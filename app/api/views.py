from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.generics import ListAPIView
from rest_framework.response import Response
from rest_framework.request import Request
from rest_framework.status import *

from django.contrib.auth import authenticate

from .models import User, Catalog, Document
from .serializers import (
    UserSerializer, CatalogSerializer, DocumentSerializer, 
    AuthUserSerializer, CreateCatalogSerializer, CreateUserSerializer
)


class UserViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer


class ListCatalogsView(ListAPIView):
    queryset = Catalog.objects.all()
    serializer_class = CatalogSerializer


class CreateCatalogView(APIView):
    serializer_class = CreateCatalogSerializer
    
    def post(self, request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            return Response({'Bad Request': 'Unauthrized'}, status=HTTP_401_UNAUTHORIZED)

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            catalog_name = request.data.get('name')
            catalog = Catalog.objects.filter(name=catalog_name)

            if catalog.exists():
                return Response({'Warning': 'Catalog Already Exists'}, status=HTTP_409_CONFLICT)
            

            print('===========================')
            print(self.request.user.id)

            # new_catalog = Catalog.objects.create(name=catalog_name, author=author.id)

            # return Response(self.serializer_class(new_catalog).data, status=HTTP_200_OK)
            return Response({'super': 'duper'}, status=HTTP_200_OK)

        return Response({'Bad Request': 'Invalid Data'}, status=HTTP_400_BAD_REQUEST)


class ListDocumentsView(APIView):
    serializer_class = DocumentSerializer
    lookup_url_kwarg = 'catalog'

    def get(self, request, format=None):

        catalog = request.GET.get(self.lookup_url_kwarg)

        if catalog is not None:
            catalog_result = Catalog.objects.filter(name=catalog)

            if len(catalog_result) > 0:
                documents = [self.serializer_class(document) for document in Document.objects.filter(catalog=catalog)]

                return Response({'documents': documents})

            return Response({'Bad Request': 'Catalog Not Found'}, status=HTTP_404_NOT_FOUND)

        return Response({'Bad Request': 'Invalid data'}, status=HTTP_400_BAD_REQUEST)



class CreateUserView(APIView):
    serializer_class = CreateUserSerializer

    def post(self, request: Request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            email = request.data.get('email')

            user = User.objects.filter(email=email)
            if user.exists():
                return Response({'Warning Create': 'User Already Exists'}, status=HTTP_409_CONFLICT)

            fio = request.data.get('fio')
            department = request.data.get('department')
            password = request.data.get('password')
            birth_date = request.data.get('birth_date')
            extended_access = (request.data.get('extended_access') == 'true')

            new_user = User(
                email=email, fio=fio,
                username=email,
                department=department,
                birth_date=birth_date,
                extended_access=extended_access,
                password=password
            )
            new_user.set_password(raw_password=password)
            new_user.save()

            return Response(self.serializer_class(new_user).data, status=HTTP_200_OK)

        return Response({'Bad Request': 'Invalid data...'}, status=HTTP_400_BAD_REQUEST)


class GetUserView(APIView):
    serializer_class = UserSerializer
    lookup_url_kwarg = 'email'

    def get(self, request: Request, format=None):
        if not self.request.session.exists(self.request.session.session_key):
            return Response({'Error Session Token': 'Session Token Not Found'}, status=HTTP_403_FORBIDDEN)

        email = request.GET.get(self.lookup_url_kwarg)
        if email is not None:
            user = User.objects.get(email=email)
            if user is not None:
                return Response(self.serializer_class(user).data, status=HTTP_200_OK)

            return Response({'User': 'User not found'}, status=HTTP_404_NOT_FOUND)

        return Response({'Bad request': 'Invalid data'}, status=HTTP_400_BAD_REQUEST)


class AuthUserView(APIView):
    serializer_class = AuthUserSerializer

    def post(self, request: Request, format=None):
        if self.request.session.exists(self.request.session.session_key):
            return Response({'Auth': 'Already Auth'}, status=HTTP_200_OK)

        email = request.data.get('email')
        password = request.data.get('password')

        user = authenticate(username=email, password=password)
        if user is None:
            return Response({'Forbiden': 'Incorrect password or email'}, status=HTTP_403_FORBIDDEN)

        self.request.session.create()
        print(user)
        self.request.session['user'] = user.id

        return Response(UserSerializer(user).data, status=HTTP_200_OK)


class LogOutView(APIView):
    def get(self, request: Request, format=None):
        if self.request.session.exists(self.request.session.session_key):
            self.request.session.delete()
            return Response({'LogOut': 'Successesful'}, status=HTTP_200_OK)
        else:
            return Response({'Token Error': 'Session token not found'}, status=HTTP_404_NOT_FOUND)
