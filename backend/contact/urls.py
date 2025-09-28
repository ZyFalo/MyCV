from django.urls import path
from . import views

urlpatterns = [
    path('contact/', views.contact_api, name='api_contact'),
    path('csrf-token/', views.csrf_token_view, name='api_csrf_token'),
]