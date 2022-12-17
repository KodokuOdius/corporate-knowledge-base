from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, mixins, status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import User, Catalog, Document
from .serializers import UserSerializer, CatalogSerializer, DocumentSerializer


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class CatalogViewSet(mixins.CreateModelMixin,
                     mixins.ListModelMixin,
                     mixins.RetrieveModelMixin,
                     viewsets.GenericViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = CatalogSerializer

    def get_queryset(self):
        return Catalog.objects.filter(
            document__is_private__lte=self.request.user.extended_access
        ).distinct()

    def post(self, request, *args, **kwargs):
        if self.request.user.is_staff:
            return self.create(request, *args, **kwargs)
        return Response({'description': 'Dont have permission'}, status=status.HTTP_403_FORBIDDEN)

    # def list(self, request, *args, **kwargs):
    #     queryset = self.get_queryset()
    #     serializer = CatalogSerializer(queryset, many=True)
    #     return Response(serializer.data)

    # def retrieve(self, request, pk=None):
    #     instance = get_object_or_404(self.get_queryset(), pk=pk)
    #     serializer = CatalogSerializer(instance)
    #     return Response(serializer.data)


# class DocumentViewSet(mixins.ListModelMixin, viewsets.GenericViewSet):
#     permission_classes = [IsAuthenticated]
#     serializer_class = DocumentSerializer
#
#     def get_queryset(self):
#         catalog = self.kwargs.get('catalog_id')
#         return Document.objects.filter(catalog=catalog).filter(
#             is_private__lte=self.request.user.extended_access
#         )
#

class DocumentView(APIView):
    permission_classes = [IsAuthenticated]
    serializer_class = DocumentSerializer

    def get(self, request, pk=None):
        catalog = get_object_or_404(Catalog.objects.filter(pk=pk))
        documents = Document.objects.filter(Q(catalog=catalog) & Q(is_private__lte=self.request.user.extended_access))
        return Response([self.serializer_class(document).data for document in documents])
