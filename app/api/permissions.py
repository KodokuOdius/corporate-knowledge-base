from rest_framework.permissions import BasePermission


class IsAdminOrAuthenticated(BasePermission):
    def has_permission(self, request, view):
        if view.action in ['list', 'retrieve']:
            return request.user.is_authenticated
        elif view.action in ['create', 'update', 'partial_update', 'destroy']:
            return request.user.is_authenticated and request.user.is_staff
        return False
