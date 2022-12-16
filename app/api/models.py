from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    role_id = models.IntegerField()


class Role(models.Model):
    role_name = models.CharField(max_length=50)


class Material(models.Model):
    pass


class Folder(models.Model):
    pass