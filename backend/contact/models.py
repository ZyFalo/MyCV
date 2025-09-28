from django.db import models

# Create your models here.
class ContactMessage(models.Model):
    STATUS_CHOICES = [
        ('new', 'New'),
        ('read', 'Read'),
        ('archived', 'Archived'),
    ]

    nombre = models.CharField(max_length=100)
    email = models.EmailField(max_length=254)
    empresa = models.CharField(max_length=100, blank=True)
    telefono = models.CharField(max_length=32, blank=True)
    tipo_proyecto = models.CharField(max_length=50)
    presupuesto = models.CharField(max_length=50, blank=True)
    mensaje = models.TextField(max_length=1000)
    acepto_terminos = models.BooleanField(default=False)
    # recaptcha_response = models.TextField(blank=True)
    status = models.CharField(max_length=16, choices=STATUS_CHOICES, default='new')
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.nombre} <{self.email}> - {self.tipo_proyecto}"