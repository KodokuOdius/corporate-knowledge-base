from os.path import splitext

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
    fio = models.CharField(max_length=256, default='', verbose_name='ФИО')
    department = models.CharField(max_length=256, default='', verbose_name='Отдел')
    birth_date = models.DateField(auto_now=True, verbose_name='Дата рождения')
    extended_access = models.BooleanField(default=0, verbose_name='Расширенный доступ')

    def __str__(self):
        return str(self.fio)

    class Meta:
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'


class Catalog(models.Model):
    name = models.CharField(max_length=20, validators=[validate_folder_name_length], verbose_name='Название')
    author = models.ForeignKey('User', on_delete=models.CASCADE, verbose_name='Автор')

    class Meta:
        verbose_name = 'Каталог'
        verbose_name_plural = 'Каталоги'


def catalog_path(instance, filename):
    return f"{instance.catalog.name}/{instance.name}{splitext(filename)[-1]}"


class Document(models.Model):
    catalog = models.ForeignKey('Catalog', on_delete=models.CASCADE, verbose_name='Каталог')
    author = models.ForeignKey('User', on_delete=models.CASCADE, verbose_name='Автор')
    is_private = models.BooleanField(default=0, verbose_name='Ограниченный доступ')

    name = models.CharField(max_length=30, validators=[validate_document_name_length])
    disk_path = models.FileField(upload_to=catalog_path)

    # должны иметь формат docx, xls, pdf, pptx, ppt, pptm, png, jpeg размером не более 20 mb

    class Meta:
        verbose_name = 'Документ'
        verbose_name_plural = 'Документы'
