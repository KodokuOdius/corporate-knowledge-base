from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views
from .views import DocumentView

router = DefaultRouter()
router.register(r'users', views.UserViewSet)
router.register(r'catalogs', views.CatalogViewSet, basename='catalogs')

urlpatterns = [
    path('', include(router.urls)),
    path('auth/', include('rest_framework.urls')),
    path('catalogs/<int:pk>/documents/', DocumentView.as_view()),
]
