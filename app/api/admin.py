from django.contrib import admin
from .models import User, Catalog, Document, Department


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'fio', 'email', 'birth_date', 'department', 'extended_access',)
    list_display_links = ('id', 'fio',)
    list_editable = ('extended_access',)
    list_filter = ('department', 'extended_access',)
    fields = ('fio', 'email', 'department', 'is_staff', 'extended_access',)
    readonly_fields = ('is_staff',)


@admin.register(Catalog)
class CatalogAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)
    list_display_links = ('id',)
    fields = ('name',)


@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ('id', 'catalog', 'name', 'is_private', 'disk_path',)
    list_display_links = ('id',)
    list_editable = ('is_private',)
    list_filter = ('catalog',)
    fields = ('catalog', 'name', 'is_private', 'disk_path',)


@admin.register(Department)
class DepartmentAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)
    list_display_links = ('id', 'name',)
    fields = ('name',)


admin.site.site_header = 'Администрирование Корпоративной базы знаний'
