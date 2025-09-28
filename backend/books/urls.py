from django.urls import path
from . import views

urlpatterns = [
    path('api/books/', views.books_api, name='books_api'),
    path('<slug:slug>/', views.book_detail, name='book_detail'),
    path('', views.books_list, name='books_list'),
]