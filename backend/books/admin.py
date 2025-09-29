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
        # Safely handle summary text
        summary_text = obj.summary or ""
        summary_preview = summary_text[:50] + '...' if len(summary_text) > 50 else summary_text
        
        if obj.image_url:
            return format_html(
                '<div style="display: flex; align-items: center;">'
                '<img src="{}" style="width: 40px; height: 60px; object-fit: cover; margin-right: 10px; border-radius: 4px;" onerror="this.style.display=\'none\'">'
                '<div><strong>{}</strong><br><small>{}</small></div>'
                '</div>',
                obj.image_url, 
                obj.title, 
                summary_preview
            )
        return format_html('<strong>{}</strong><br><small>{}</small>', 
                          obj.title, 
                          summary_preview)
    title_display.short_description = 'Book'
    
    def image_preview(self, obj):
        """Show image preview in the admin form"""
        if obj.image_url:
            return format_html(
                '<img src="{}" style="max-width: 200px; max-height: 300px; object-fit: contain; border-radius: 8px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" onerror="this.alt=\'Image not available\'; this.style.display=\'none\';">',
                obj.image_url
            )
        return format_html('<span style="color: #666; font-style: italic;">No image provided</span>')
    image_preview.short_description = 'Image Preview'
    
    def get_queryset(self, request):
        """Optimize queries"""
        return super().get_queryset(request).order_by('order', '-created_at')
    
    # Removed custom CSS/JS that may not exist
