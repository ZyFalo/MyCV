from django.contrib import admin
from .models import ContactMessage

@admin.register(ContactMessage)
class ContactMessageAdmin(admin.ModelAdmin):
    list_display = ('id', 'nombre', 'email', 'tipo_proyecto', 'status', 'created_at')
    list_filter = ('status', 'tipo_proyecto', 'created_at')
    search_fields = ('nombre', 'email', 'empresa', 'mensaje')
    ordering = ('-created_at',)