import json
import logging
from .models import ContactMessage
from .forms import ContactMessageForm
from django.shortcuts import render
from django.http import JsonResponse
from django.middleware.csrf import get_token
from django.views.decorators.http import require_GET
from django.views.decorators.http import require_POST
from django.views.decorators.csrf import ensure_csrf_cookie


logger = logging.getLogger(__name__)


@require_POST
def contact_api(request):
    try:
        payload = json.loads(request.body.decode('utf-8'))
    except Exception:
        return JsonResponse({'success': False, 'message': 'Invalid JSON'}, status=400)

    # Mapear nombre del checkbox del frontend -> campo del ModelForm
    if 'terminos' in payload and 'acepto_terminos' not in payload:
        val = payload.pop('terminos')
        payload['acepto_terminos'] = str(val).lower() in ('true', '1', 'on', 'yes')

    # Normalizar teléfono: quitar espacios/caracteres; si vacío dejar cadena vacía
    if 'telefono' in payload:
        telefono_raw = str(payload.get('telefono') or '').strip()
        telefono_digits = ''.join(ch for ch in telefono_raw if ch.isdigit())
        # si vino con prefijo 57 eliminarlo para validar si necesario
        if telefono_digits.startswith('57') and len(telefono_digits) > 10:
            telefono_digits = telefono_digits[2:]
        payload['telefono'] = telefono_digits or ''

    form = ContactMessageForm(payload)
    if form.is_valid():
        obj = form.save(commit=False)
        # metadata opcional
        x_forwarded = request.META.get('HTTP_X_FORWARDED_FOR')
        obj.ip_address = (x_forwarded.split(',')[0].strip() if x_forwarded else request.META.get('REMOTE_ADDR'))
        obj.user_agent = request.META.get('HTTP_USER_AGENT', '')[:512]
        obj.save()
        logger.info("Saved ContactMessage id=%s", obj.pk)
        return JsonResponse({'success': True, 'message': 'Message saved', 'id': obj.pk})
    else:
        logger.warning("Contact form validation errors: %s", form.errors)
        return JsonResponse({'success': False, 'errors': form.errors}, status=400)

# Endpoint simple para proveer token CSRF (tu frontend ya hace GET /api/csrf-token/)

@require_GET
@ensure_csrf_cookie
def csrf_token_view(request):
    token = get_token(request)
    return JsonResponse({'token': token})