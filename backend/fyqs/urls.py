from django.urls import path
from . import views

urlpatterns = [
    path('api/faqs/', views.faq_api, name='faq_api'),
    path('', views.faq_list, name='faq_list'),
]