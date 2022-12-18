from django.db.models import Q
from rest_framework import viewsets, mixins, status
from rest_framework.generics import get_object_or_404
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response


from .models import User, Catalog, Document
from .permissions import IsAdminOrAuthenticated
from .serializers import UserSerializer, CatalogSerializer, DocumentSerializer


class UserViewSet(mixins.ListModelMixin,
                  mixins.RetrieveModelMixin,
                  viewsets.GenericViewSet):
    queryset = User.objects.all()
    permission_classes = [IsAuthenticated]
    serializer_class = UserSerializer


class CatalogViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAdminOrAuthenticated]
    serializer_class = CatalogSerializer

    def get_queryset(self):
        if not self.request.user.is_anonymous:
            if self.request.user.is_staff:
                return Catalog.objects.all()
            return Catalog.objects.filter(
                Q(document__is_private__lte=self.request.user.extended_access)
            ).distinct()


class DocumentViewSet(mixins.CreateModelMixin,
                      mixins.UpdateModelMixin,
                      mixins.DestroyModelMixin,
                      viewsets.GenericViewSet):
    permission_classes = [IsAdminOrAuthenticated]
    serializer_class = DocumentSerializer

    def get_queryset(self, catalog_pk=None):
        if not self.request.user.is_anonymous:
            if self.request.user.is_staff:
                return Document.objects.all()
            return Document.objects.filter(
                    Q(catalog__pk=catalog_pk) & Q(is_private__lte=self.request.user.extended_access)
                )

    def list(self, request, catalog_pk=None):
        queryset = self.get_queryset(catalog_pk)
        if not queryset:
            return Response({'detail': 'Страница не найдена'}, status=status.HTTP_404_NOT_FOUND)
        doc_viewer_path = 'https://docs.yandex.ru/docs/view?url='
        documents_list = []
        for document in queryset:
            document_data = DocumentSerializer(document).data
            document_data['view_path'] = doc_viewer_path + request.build_absolute_uri(document.disk_path.url)
            documents_list.append(document_data)
        return Response(documents_list)

    def retrieve(self, request, pk=None, catalog_pk=None):
        queryset = self.get_queryset(catalog_pk)
        document = get_object_or_404(queryset, pk=pk)
        serializer = DocumentSerializer(document)
        return Response(serializer.data)
