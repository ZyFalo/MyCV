from django.shortcuts import render
from django.http import JsonResponse
from .models import FAQ

def faq_list(request):
    faqs = FAQ.objects.filter(is_published=True).order_by('order', '-created_at')
    return render(request, 'fyqs.html', {'faqs': faqs})

def faq_api(request):
    """API para obtener las FAQs en formato JSON"""
    faqs = FAQ.objects.filter(is_published=True).order_by('order', '-created_at')
    faq_data = []
    
    for faq in faqs:
        faq_data.append({
            'id': faq.id,
            'question': faq.question,
            'answer': faq.answer,
            'order': faq.order
        })
    
    return JsonResponse({'faqs': faq_data})