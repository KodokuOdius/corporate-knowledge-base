from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    role_id = models.ForeignKey('Role', on_delete=models.CASCADE)


class Role(models.Model):
    role_name = models.CharField(max_length=50)


class Material(models.Model):
    folder_id = models.ForeignKey('Folder', on_delete=models.CASCADE)
    author_id = models.ForeignKey('User', on_delete=models.CASCADE)
    access_level = models.ForeignKey('Role', on_delete=models.CASCADE)

    title = models.CharField(max_length=256)
    disk_path = models.CharField(max_length=256)


class Folder(models.Model):
    name = models.CharField(max_length=256)
    author_id = models.ForeignKey('User', on_delete=models.CASCADE)
