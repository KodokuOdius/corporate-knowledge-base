from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _


def validate_document_name_length(value: str):
    if len(value) > 30 or len(value) < 7:
        raise ValidationError(
            _('length of %(value)s > 30 or < 7'),
            params={'value': value}
        )

def validate_folder_name_length(value: str):
    if len(value) > 20 or len(value) < 5:
        raise ValidationError(
            _('length of %(value)s > 30 or < 7'),
            params={'value': value}
        )


class User(AbstractUser):
    position = models.CharField(max_length=256, default="")
    birth_date = models.DateField(auto_now=True)
    extended_access = models.BooleanField(default=0)


class Document(models.Model):
    folder_id = models.ForeignKey('Folder', on_delete=models.CASCADE)
    author_id = models.ForeignKey('User', on_delete=models.CASCADE)
    is_private = models.BooleanField(default=0)

    name = models.CharField(max_length=30, validators=[validate_document_name_length])
    disk_path = models.FilePathField(
        path="documents/",
        match=r"{|\.docx$|\.xls$|\.pdf$|\.pptx$|\.ppt$|\.pptm$|\.png$|\.jpeg$|}"
    )

    # должны иметь формат docx, xls, pdf, pptx, ppt, pptm, png, jpeg размером не более 20 mb


class Folder(models.Model):
    name = models.CharField(max_length=20, validators=[validate_folder_name_length])
    author_id = models.ForeignKey('User', on_delete=models.CASCADE)
