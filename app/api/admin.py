from django.contrib import admin

from .models import User, Catalog


@admin.register(User)
class UserAdmin(admin.ModelAdmin):
    list_display = ('id', 'fio', 'email', 'birth_date', 'department', 'extended_access',)
    list_display_links = ('id', 'fio',)
    list_editable = ('extended_access',)
    list_filter = ('department', 'extended_access',)
    fields = ('fio', 'email', 'department', 'is_staff', 'extended_access',)
    readonly_fields = ('is_staff',)


# @admin.register(Catalog)
# class CatalogAdmin(admin.ModelAdmin):
#     list_display = ('id', 'name', 'author',)
#     list_display_links = ('id', 'name',)
#     fields = ('name', 'author',)
