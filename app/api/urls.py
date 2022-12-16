from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import (
    UserViewSet, ListCatalogsView, ListDocumentsView,
    GetUserView, AuthUserView, CreateUserView, LogOutView,
    CreateCatalogView
)

router = DefaultRouter()
router.register(r'users', UserViewSet)

urlpatterns = [
    path('', include(router.urls)),
    path('catalogs/', ListCatalogsView.as_view()),
    path('documents/', ListDocumentsView.as_view()),

    path('get-user/', GetUserView.as_view()),
    path('auth-user/', AuthUserView.as_view()),
    path('logout/', LogOutView.as_view()),
    path('create-user/', CreateUserView.as_view()),

    path('create-catalog/', CreateCatalogView.as_view()),
]
