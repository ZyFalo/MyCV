// ===== CONTACT FORM HANDLER =====

class ContactFormHandler {
    constructor() {
        this.form = document.getElementById('contactForm');
        this.submitBtn = document.getElementById('submitBtn');
        this.apiEndpoint = '/api/contact/';  // Django API endpoint
        this.isSubmitting = false;
        
        this.init();
    }

    init() {
        if (this.form) {
            this.form.addEventListener('submit', (e) => this.handleSubmit(e));
            this.getCsrfToken();
        }
    }

    async getCsrfToken() {
        try {
            const response = await fetch('/api/csrf-token/', {
                method: 'GET',
                credentials: 'same-origin',
            });
            
            if (response.ok) {
                const data = await response.json();
                const csrfInput = document.getElementById('csrfToken');
                if (csrfInput) {
                    csrfInput.value = data.token;
                }
            }
        } catch (error) {
            console.warn('No se pudo obtener el token CSRF:', error);
        }
    }

    async handleSubmit(event) {
        event.preventDefault();
        
        if (this.isSubmitting) return;

        // Verificar rate limiting
        const rateLimitCheck = ContactValidator.checkRateLimit();
        if (!rateLimitCheck.allowed) {
            this.showMessage(
                'error',
                'Límite de envío excedido',
                `Por favor espera ${rateLimitCheck.remainingTime} segundos antes de enviar otro mensaje.`
            );
            return;
        }

        // Validar formulario
        const validation = window.contactValidator.validateForm();
        if (!validation.isValid) {
            this.showMessage(
                'error',
                'Formulario incompleto',
                'Por favor corrige los errores señalados en el formulario.'
            );
            
            // Hacer scroll al primer error
            const firstErrorField = document.querySelector('.error');
            if (firstErrorField) {
                firstErrorField.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstErrorField.focus();
            }
            return;
        }

        // Iniciar envío
        this.setSubmitState(true);
        
        try {
            // Recopilar datos del formulario
            const formData = this.collectFormData();
            
            // Sanitizar datos
            const sanitizedData = window.contactValidator.sanitizeData(formData);
            
            // Enviar a Django
            const response = await this.submitToBackend(sanitizedData);
            
            if (response.success) {
                this.handleSuccess(response);
            } else {
                this.handleError(response);
            }
            
        } catch (error) {
            console.error('Error al enviar formulario:', error);
            this.handleError({
                message: 'Error de conexión. Por favor, intenta nuevamente.'
            });
        } finally {
            this.setSubmitState(false);
        }
    }

    collectFormData() {
        const formData = new FormData(this.form);
        const data = {};
        
        // Convertir FormData a objeto
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Agregar información adicional
        data.timestamp = new Date().toISOString();
        data.user_agent = navigator.userAgent;
        data.referrer = document.referrer;
        data.timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
        
        // Agregar respuesta de reCAPTCHA si existe
        if (typeof grecaptcha !== 'undefined') {
            data.recaptcha_response = grecaptcha.getResponse();
        }
        
        return data;
    }

    async submitToBackend(data) {
        const response = await fetch(this.apiEndpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-CSRFToken': data.csrfmiddlewaretoken,
                'X-Requested-With': 'XMLHttpRequest',
            },
            credentials: 'same-origin',
            body: JSON.stringify(data)
        });

        const result = await response.json();
        
        if (!response.ok) {
            throw new Error(result.message || 'Error del servidor');
        }
        
        return result;
    }

    handleSuccess(response) {
        // Limpiar formulario
        this.form.reset();
        
        // Limpiar reCAPTCHA
        if (typeof grecaptcha !== 'undefined') {
            grecaptcha.reset();
        }
        
        // Limpiar estados visuales
        this.clearFormStates();
        
        // Mostrar mensaje de éxito
        this.showMessage(
            'success',
            '¡Mensaje enviado con éxito! ✅',
            'Gracias por contactarme. Te responderé lo antes posible, generalmente en 24-48 horas.'
        );
        
        // Analytics/tracking
        this.trackEvent('contact_form_success');
    }

    handleError(response) {
        let errorMessage = 'Hubo un problema al enviar tu mensaje. Por favor, intenta nuevamente.';
        
        if (response.errors) {
            // Mostrar errores específicos de campos
            Object.keys(response.errors).forEach(field => {
                const fieldElement = document.getElementById(field);
                const errorElement = document.getElementById(field + '-error');
                
                if (fieldElement && errorElement) {
                    fieldElement.classList.add('error');
                    errorElement.textContent = response.errors[field][0] || 'Error en este campo';
                }
            });
            
            errorMessage = 'Por favor corrige los errores en el formulario.';
        }
        
        if (response.message) {
            errorMessage = response.message;
        }
        
        this.showMessage(
            'error',
            'Error al enviar mensaje ❌',
            errorMessage
        );
        
        // Analytics/tracking
        this.trackEvent('contact_form_error', { error: response.message });
    }

    clearFormStates() {
        // Limpiar clases de error y éxito
        const fields = this.form.querySelectorAll('.form-input, .form-select, .form-textarea');
        fields.forEach(field => {
            field.classList.remove('error', 'success');
        });
        
        // Limpiar mensajes de error
        const errorElements = this.form.querySelectorAll('.error-message');
        errorElements.forEach(element => {
            element.textContent = '';
        });
        
        // Resetear contador de caracteres
        const counter = document.getElementById('mensaje-counter');
        if (counter) {
            counter.textContent = '0/1000';
            counter.style.color = '#9ca3af';
        }
    }

    setSubmitState(isSubmitting) {
        this.isSubmitting = isSubmitting;
        
        if (this.submitBtn) {
            this.submitBtn.disabled = isSubmitting;
            
            const btnText = this.submitBtn.querySelector('.btn-text');
            const btnLoading = this.submitBtn.querySelector('.btn-loading');
            
            if (btnText && btnLoading) {
                if (isSubmitting) {
                    btnText.style.display = 'none';
                    btnLoading.style.display = 'flex';
                } else {
                    btnText.style.display = 'inline';
                    btnLoading.style.display = 'none';
                }
            }
        }
        
        // Deshabilitar todos los campos del formulario
        const formElements = this.form.querySelectorAll('input, select, textarea, button');
        formElements.forEach(element => {
            element.disabled = isSubmitting;
        });
    }

    showMessage(type, title, message) {
        const modal = document.getElementById('messageModal');
        const modalTitle = document.getElementById('modalTitle');
        const modalMessage = document.getElementById('modalMessage');
        
        if (modal && modalTitle && modalMessage) {
            modalTitle.textContent = title;
            modalMessage.textContent = message;
            
            // Agregar clase de tipo para estilos específicos
            modal.className = `message-modal ${type}`;
            modal.style.display = 'flex';
            
            // Auto-cerrar mensaje de éxito después de 5 segundos
            if (type === 'success') {
                setTimeout(() => {
                    this.closeModal();
                }, 5000);
            }
        }
    }

    closeModal() {
        const modal = document.getElementById('messageModal');
        if (modal) {
            modal.style.display = 'none';
        }
    }

    trackEvent(eventName, data = {}) {
        // Google Analytics 4
        if (typeof gtag !== 'undefined') {
            gtag('event', eventName, {
                event_category: 'contact_form',
                ...data
            });
        }
        
        // Google Tag Manager
        if (typeof dataLayer !== 'undefined') {
            dataLayer.push({
                event: eventName,
                category: 'contact_form',
                ...data
            });
        }
    }
}

// Función global para cerrar modal
window.closeModal = function() {
    if (window.contactFormHandler) {
        window.contactFormHandler.closeModal();
    }
};

// Callback para reCAPTCHA
window.onRecaptchaSuccess = function() {
    if (window.contactValidator) {
        window.contactValidator.clearRecaptchaError();
    }
};

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.contactFormHandler = new ContactFormHandler();
});

// Manejar errores de reCAPTCHA
window.onRecaptchaError = function() {
    if (window.contactValidator) {
        window.contactValidator.showRecaptchaError('Error en la verificación. Por favor, inténtalo de nuevo.');
    }
};

window.onRecaptchaExpired = function() {
    if (window.contactValidator) {
        window.contactValidator.showRecaptchaError('La verificación ha expirado. Por favor, complétala nuevamente.');
    }
};