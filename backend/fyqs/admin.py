from django.contrib import admin
from .models import FAQ

@admin.register(FAQ)
class FAQAdmin(admin.ModelAdmin):
    list_display = ('question_preview', 'is_published', 'order', 'created_at')
    list_display_links = ('question_preview',)
    list_filter = ('is_published', 'created_at')
    search_fields = ('question', 'answer')
    ordering = ('order', '-created_at')
    list_editable = ('is_published', 'order')
    
    fieldsets = (
        ('Contenido', {
            'fields': ('question', 'answer')
        }),
        ('Configuración', {
            'fields': ('is_published', 'order'),
            'description': 'Configura la visibilidad y orden de la pregunta'
        })
    )
    
    def question_preview(self, obj):
        """Muestra una vista previa de la pregunta truncada"""
        if len(obj.question) > 60:
            return f"{obj.question[:60]}..."
        return obj.question
    question_preview.short_description = 'Pregunta'
    
    def get_queryset(self, request):
        """Optimiza las consultas"""
        return super().get_queryset(request).order_by('order', '-created_at')
    
    # Removed custom CSS/JS that don't exist