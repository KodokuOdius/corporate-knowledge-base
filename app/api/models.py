from os.path import splitext

from django.db import models
from django.contrib.auth.models import AbstractUser
from django.core.exceptions import ValidationError
from django.utils.translation import gettext_lazy as _
from django.core.validators import FileExtensionValidator

from .managers import UserManager


def validate_document_name_length(value: str):
    if len(value) > 30 or len(value) < 7:
        raise ValidationError(
            _('length of "%(value)s" > 30 or < 7'),
            params={'value': value}
        )
    return value


def validate_folder_name_length(value: str):
    if len(value) > 20 or len(value) < 5:
        raise ValidationError(
            _('length of "%(value)s" > 30 or < 7'),
            params={'value': value}
        )
    return value


def validate_file_size(value):
    limit = 20971520
    if value.size > limit:
        raise ValidationError(
            'File too large. Size should not exceed 20 MiB',
        )  
    return value


def validate_name(value):
    # Разрешенные символы кириллица, латиница, цифры, спецсимволы “№:()-_.

    from string import ascii_letters, digits
    cyrillic_letters = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя' + 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя'.upper()
    specific_letters = '“№:()-_.'
    validate_letters = ascii_letters + digits + cyrillic_letters + specific_letters

    if set(value) - set(validate_letters):
        raise ValidationError(
            _('The name "%(value)s" contains unsupported characters'),
            params={'value': value}
        )
    return value



def catalog_path(instance, filename):
    return f"{instance.catalog.name}/{instance.name}{splitext(filename)[-1]}"


class User(AbstractUser):
    username = None
    first_name = None
    last_name = None
    email = models.EmailField(_("email address"), blank=False, unique=True)
    fio = models.CharField(max_length=256, default='', verbose_name='ФИО')
    department = models.CharField(max_length=256, default='', verbose_name='Отдел')
    birth_date = models.DateField(auto_now=True, verbose_name='Дата рождения')
    extended_access = models.BooleanField(default=0, verbose_name='Расширенный доступ')

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = []

    objects = UserManager()

    class Meta:
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'

    def __str__(self):
        return str(self.fio)


class Catalog(models.Model):
    name = models.CharField(max_length=20, validators=[validate_folder_name_length, validate_name], verbose_name='Название')
    author = models.ForeignKey('User', on_delete=models.CASCADE, verbose_name='Автор')

    class Meta:
        verbose_name = 'Каталог'
        verbose_name_plural = 'Каталоги'

    def __str__(self):
        return str(self.name)


class Document(models.Model):
    catalog = models.ForeignKey('Catalog', on_delete=models.CASCADE, verbose_name='Каталог')
    author = models.ForeignKey('User', on_delete=models.CASCADE, verbose_name='Автор')
    is_private = models.BooleanField(default=0, verbose_name='Ограниченный доступ')

    name = models.CharField(max_length=30, validators=[validate_document_name_length, validate_name])

    # должны иметь формат docx, xls, pdf, pptx, ppt, pptm, png, jpeg размером не более 20 mb
    disk_path = models.FileField(
        upload_to=catalog_path, 
        validators=[
            validate_file_size,
            FileExtensionValidator(
                ['docx', 'xls', 'pdf', 'pptx', 'ppt', 'pptm', 'png', 'jpeg'], 
                message=_('File Extension is not supported')
            )
        ]
    )

    class Meta:
        verbose_name = 'Документ'
        verbose_name_plural = 'Документы'

    def __str__(self):
        return str(self.name)
