from django.shortcuts import render, get_object_or_404
from django.http import JsonResponse
from .models import Book

def books_list(request):
    """Vista para mostrar la lista de libros"""
    books = Book.objects.filter(is_published=True).order_by('order', '-created_at')
    return render(request, 'books.html', {'books': books})

def book_detail(request, slug):
    """Vista para mostrar el detalle de un libro"""
    book = get_object_or_404(Book, slug=slug, is_published=True)
    return render(request, 'book_detail.html', {'book': book})

def books_api(request):
    """API para obtener los libros en formato JSON"""
    books = Book.objects.filter(is_published=True).order_by('order', '-created_at')
    books_data = []
    
    for book in books:
        books_data.append({
            'id': book.id,
            'title': book.title,
            'slug': book.slug,
            'author': book.author,
            'summary': book.summary,
            'description': book.description,
            'image_url': book.image_url,
            'keywords': book.get_keywords_list(),
            'rating': float(book.rating) if book.rating else None,
            'rating_stars': book.get_rating_stars(),
            'publication_year': book.publication_year,
            'pages': book.pages,
            'featured': book.featured,
            'detail_url': book.get_absolute_url()
        })
    
    return JsonResponse({'books': books_data})
