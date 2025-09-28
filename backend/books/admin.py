from django.contrib import admin
from django.utils.html import format_html
from .models import Book

@admin.register(Book)
class BookAdmin(admin.ModelAdmin):
    list_display = ('title_display', 'author', 'rating', 'featured', 'is_published', 'order', 'created_at')
    list_display_links = ('title_display',)
    list_filter = ('is_published', 'featured', 'publication_year', 'rating', 'created_at')
    search_fields = ('title', 'author', 'keywords', 'summary')
    list_editable = ('is_published', 'featured', 'order', 'rating')
    readonly_fields = ('slug', 'created_at', 'updated_at', 'image_preview')
    
    fieldsets = (
        ('Basic Information', {
            'fields': ('title', 'slug', 'author', 'publication_year', 'isbn', 'pages')
        }),
        ('Content', {
            'fields': ('summary', 'description', 'keywords', 'rating'),
            'description': 'Main content and metadata for the book'
        }),
        ('Image & Media', {
            'fields': ('image_url', 'image_preview'),
            'description': 'Book cover image (use a URL)'
        }),
        ('Publication Settings', {
            'fields': ('is_published', 'featured', 'order'),
            'classes': ('collapse',)
        }),
        ('Timestamps', {
            'fields': ('created_at', 'updated_at'),
            'classes': ('collapse',)
        })
    )
    
    def title_display(self, obj):
        """Display title with image preview"""
        if obj.image_url:
            return format_html(
                '<div style="display: flex; align-items: center;">'
                '<img src="{}" style="width: 40px; height: 60px; object-fit: cover; margin-right: 10px; border-radius: 4px;">'
                '<div><strong>{}</strong><br><small>{}</small></div>'
                '</div>',
                obj.image_url, obj.title, obj.summary[:50] + '...' if len(obj.summary) > 50 else obj.summary
            )
        return format_html('<strong>{}</strong><br><small>{}</small>', 
                          obj.title, obj.summary[:50] + '...' if len(obj.summary) > 50 else obj.summary)
    title_display.short_description = 'Book'
    
    def image_preview(self, obj):
        """Show image preview in the admin form"""
        if obj.image_url:
            return format_html(
                '<img src="{}" style="max-width: 200px; max-height: 300px; object-fit: contain; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">',
                obj.image_url
            )
        return "No image provided"
    image_preview.short_description = 'Image Preview'
    
    def get_queryset(self, request):
        """Optimize queries"""
        return super().get_queryset(request).order_by('order', '-created_at')
    
    class Media:
        css = {
            'all': ('admin/css/book_admin.css',)
        }
        js = ('admin/js/book_admin.js',)
