from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'catalogs', views.CatalogViewSet, basename='catalogs')
router.register(r'documents', views.DocumentViewSet, basename='documents')

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls')),
]
