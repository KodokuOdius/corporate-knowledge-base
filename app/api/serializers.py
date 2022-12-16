from rest_framework import serializers
from .models import User, Catalog, Document


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'


class CreateUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['fio', 'email', 'department', 'extended_access', 'birth_date', 'password']


class CatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catalog
        fields = ['name', 'author']

class CreateCatalogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Catalog
        fields = ['name']

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        models = Document
        fields = ['name', 'catalog', 'author', 'is_private', 'disk_path']


class AuthUserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'password')