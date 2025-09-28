import os
import re
import requests
from django import forms
from .models import ContactMessage

class ContactMessageForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = [
            'nombre', 'email', 'empresa', 'telefono',
            'tipo_proyecto', 'presupuesto', 'mensaje',
            'acepto_terminos', 
            # 'recaptcha_response'
        ]

    # def clean_telefono(self):
    #     telefono = (self.cleaned_data.get('telefono') or '').strip()
    #     if not telefono:
    #         # campo opcional: permitir vacío
    #         return ''
    #     # limpiar caracteres no numéricos
    #     digits = re.sub(r'\D', '', telefono)
    #     # quitar código país si viene (57)
    #     if digits.startswith('57') and len(digits) > 10:
    #         digits = digits[2:]
    #     # ahora validar 10 dígitos y prefijo válido
    #     if not re.fullmatch(r'(3\d{9}|[67]\d{9})', digits):
    #         raise forms.ValidationError('Ingrese un número de teléfono colombiano válido (10 dígitos, inicia con 3,6 o 7).')
    #     return digits

    def clean_nombre(self):
        nombre = self.cleaned_data.get('nombre', '').strip()
        if not nombre:
            raise forms.ValidationError('El nombre no puede estar vacío.')
        else:
            if not re.fullmatch(r'[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+', nombre):
                raise forms.ValidationError('El nombre solo puede contener letras y espacios.')
        return nombre
    
    def clean_email(self):
        email = self.cleaned_data.get('email', '').strip()
        if not email:
            raise forms.ValidationError('El correo electrónico no puede estar vacío.')
        # Validar formato de correo electrónico estándar
        if not re.fullmatch(r"[^@]+@[^@]+\.[^@]+", email):
            raise forms.ValidationError('Ingrese un correo electrónico válido.')
        # Validar dominio permitido
        allowed_domains = {'gmail.com', 'hotmail.com', 'outlook.com', 'yahoo.com'}
        try:
            domain = email.split('@')[1].lower()
        except IndexError:
            raise forms.ValidationError('Ingrese un correo electrónico válido.')
        if domain not in allowed_domains:
            raise forms.ValidationError('El dominio del correo electrónico no está permitido.')
        return email
    
    # def clean_recaptcha_response(self):
    #     token = self.cleaned_data.get('recaptcha_response')
    #     secret = os.environ.get('RECAPTCHA_PRIVATE_KEY')
    #     if secret and token:
    #         r = requests.post('https://www.google.com/recaptcha/api/siteverify', data={
    #             'secret': secret,
    #             'response': token
    #         }, timeout=5)
    #         result = r.json()
    #         if not result.get('success') or result.get('score', 0) < 0.3:
    #             raise forms.ValidationError('reCAPTCHA validation failed')
    #     return token