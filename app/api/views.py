from django.db.models import Q
from django.shortcuts import get_object_or_404
from rest_framework import viewsets, mixins, status
from rest_framework.decorators import action
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
        if self.request.user.is_staff:
            return Catalog.objects.all()
        return Catalog.objects.filter(
            Q(document__is_private__lte=self.request.user.extended_access)
        ).distinct()

    def post(self, request, *args, **kwargs):
        if self.request.user.is_staff:
            return self.create(request, *args, **kwargs)
        return Response({'description': 'Dont have permission'}, status=status.HTTP_403_FORBIDDEN)

    @action(detail=True, methods=['get'])
    def documents(self, request, pk=None):
        documents = Document.objects.filter(Q(catalog__pk=pk) & Q(is_private__lte=self.request.user.extended_access))
        if not documents:
            return Response({'description': 'Not found'}, status=status.HTTP_404_NOT_FOUND)
        google_doc_viewer = 'https://docs.google.com/viewer?a=v&url='
        documents_list = []
        for document in documents:
            document_data = DocumentSerializer(document).data
            document_data['view_path'] = google_doc_viewer + request.build_absolute_uri(document.disk_path.url)
            documents_list.append(document_data)
        return Response(documents_list)

    # def list(self, request, *args, **kwargs):
    #     queryset = self.get_queryset()
    #     serializer = CatalogSerializer(queryset, many=True)
    #     return Response(serializer.data)

    # def retrieve(self, request, pk=None):
    #     instance = get_object_or_404(self.get_queryset(), pk=pk)
    #     serializer = CatalogSerializer(instance)
    #     return Response(serializer.data)


class DocumentViewSet(mixins.CreateModelMixin,
                      mixins.ListModelMixin,
                      viewsets.GenericViewSet):
    permission_classes = [IsAuthenticated]
    serializer_class = DocumentSerializer

    def get_queryset(self):
        catalog = self.request.GET.get('catalog_id')
        return Document.objects.filter(catalog=catalog if catalog.isdigit() else None).filter(
            is_private__lte=self.request.user.extended_access
        )

    def post(self, request, *args, **kwargs):
        if self.request.user.is_staff:
            return self.create(request, *args, **kwargs)
        return Response({'description': 'Dont have permission'}, status=status.HTTP_403_FORBIDDEN)

    # def retrieve(self, request, pk=None):
    #     documents = self.get_queryset()
    #     return Response({'documents': [DocumentSerializer(doc).data for doc in documents]}, status=status.HTTP_200_OK)


# class DocumentView(APIView):
#     permission_classes = [IsAuthenticated]
#     serializer_class = DocumentSerializer
#
#     def get(self, request, pk=None):
#         catalog = get_object_or_404(Catalog.objects.filter(pk=pk))
#         documents = Document.objects.filter(Q(catalog=catalog) & Q(is_private__lte=self.request.user.extended_access))
#         return Response([self.serializer_class(document).data for document in documents])

