from django.urls import path, include
from rest_framework.routers import DefaultRouter
from rest_framework_nested import routers

from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'catalogs', views.CatalogViewSet, basename='catalogs')
catalog_router = routers.NestedSimpleRouter(router, r'catalogs', lookup='catalog')
catalog_router.register(r'documents', views.DocumentViewSet, basename='documents')

urlpatterns = [
    path('', include(router.urls)),
    path('', include(catalog_router.urls)),
    path('auth/', include('rest_framework.urls'))
]
