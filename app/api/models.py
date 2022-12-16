from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    position = models.CharField()
    bith_date = models.DateField()
    extended_access = models.BooleanField(default=0)


class Material(models.Model):
    folder_id = models.ForeignKey('Folder', on_delete=models.CASCADE)
    author_id = models.ForeignKey('User', on_delete=models.CASCADE)
    is_private = models.BooleanField(default=0)

    title = models.CharField(max_length=30)
    disk_path = models.FilePathField()

    # должны иметь формат docx, xls, pdf, pptx, ppt, pptm, png, jpeg размером не более 20 mb


class Folder(models.Model):
    name = models.CharField(max_length=20)
    author_id = models.ForeignKey('User', on_delete=models.CASCADE)
