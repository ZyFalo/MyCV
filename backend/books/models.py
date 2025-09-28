from django.db import models
from django.urls import reverse
from django.utils.text import slugify

class Book(models.Model):
    title = models.CharField(max_length=200, verbose_name="Title")
    slug = models.SlugField(max_length=220, unique=True, blank=True, verbose_name="URL Slug")
    image_url = models.URLField(max_length=500, verbose_name="Image URL", 
                               help_text="URL of the book cover image")
    summary = models.TextField(max_length=300, verbose_name="Summary", 
                              help_text="Brief summary (max 300 characters)")
    description = models.TextField(verbose_name="Description", 
                                  help_text="Detailed description of the book")
    keywords = models.CharField(max_length=200, verbose_name="Keywords", 
                               help_text="Comma-separated keywords (e.g., fiction, mystery, thriller)")
    author = models.CharField(max_length=100, verbose_name="Author")
    publication_year = models.PositiveIntegerField(verbose_name="Publication Year", null=True, blank=True)
    isbn = models.CharField(max_length=20, blank=True, verbose_name="ISBN")
    pages = models.PositiveIntegerField(null=True, blank=True, verbose_name="Number of Pages")
    rating = models.DecimalField(max_digits=3, decimal_places=1, null=True, blank=True, 
                                verbose_name="Rating (1-5)", help_text="Personal rating from 1 to 5")
    
    # Publication settings
    is_published = models.BooleanField(default=True, verbose_name="Published")
    featured = models.BooleanField(default=False, verbose_name="Featured", 
                                  help_text="Show as featured book")
    order = models.PositiveSmallIntegerField(default=0, verbose_name="Display Order", 
                                           help_text="Lower numbers appear first")
    
    # Timestamps
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['order', '-created_at']
        verbose_name = 'Book'
        verbose_name_plural = 'Books'

    def __str__(self):
        return f"{self.title} - {self.author}"

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(f"{self.title}-{self.author}")
        super().save(*args, **kwargs)

    def get_absolute_url(self):
        return reverse('book_detail', kwargs={'slug': self.slug})

    def get_keywords_list(self):
        """Return keywords as a list"""
        return [keyword.strip() for keyword in self.keywords.split(',') if keyword.strip()]

    def get_rating_stars(self):
        """Return rating as stars for display"""
        if self.rating:
            full_stars = int(self.rating)
            half_star = 1 if self.rating % 1 >= 0.5 else 0
            empty_stars = 5 - full_stars - half_star
            return '★' * full_stars + '☆' * half_star + '☆' * empty_stars
        return 'No rating'
