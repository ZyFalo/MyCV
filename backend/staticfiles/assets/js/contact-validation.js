// ===== CONTACT FORM VALIDATION =====

class ContactValidator {
    constructor() {
        this.rules = {
            nombre: {
                required: true,
                minLength: 2,
                maxLength: 100,
                pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
                message: 'El nombre debe contener solo letras y espacios (mín. 2 caracteres)'
            },
            email: {
                required: true,
                pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                maxLength: 254,
                message: 'Ingresa un correo electrónico válido'
            },
            empresa: {
                required: false,
                maxLength: 100,
                pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s\d\.\-&,]+$/,
                message: 'Nombre de empresa no válido'
            },
            telefono: {
                required: false,
                pattern: /^[\+]?[0-9\s\-\(\)]{7,20}$/,
                message: 'Formato de teléfono no válido (ej: +57 300 123 4567)'
            },
            tipo_proyecto: {
                required: true,
                message: 'Selecciona el tipo de proyecto'
            },
            mensaje: {
                required: true,
                minLength: 10,
                maxLength: 1000,
                message: 'El mensaje debe tener entre 10 y 1000 caracteres'
            },
            terminos: {
                required: true,
                message: 'Debes aceptar los términos y condiciones'
            }
        };
        
        this.init();
    }

    init() {
        this.bindEvents();
        this.initCharacterCounter();
    }

    bindEvents() {
        // Validación en tiempo real
        Object.keys(this.rules).forEach(fieldName => {
            const field = document.getElementById(fieldName);
            if (field) {
                // Eventos de validación
                field.addEventListener('blur', () => this.validateField(fieldName));
                field.addEventListener('input', () => this.clearError(fieldName));
                
                // Validación especial para email
                if (fieldName === 'email') {
                    field.addEventListener('input', () => {
                        // Eliminar espacios automáticamente
                        field.value = field.value.trim();
                    });
                }
            }
        });

        // Validación del teléfono con formato automático
        const telefonoField = document.getElementById('telefono');
        if (telefonoField) {
            telefonoField.addEventListener('input', (e) => {
                this.formatPhoneNumber(e.target);
            });
        }
    }

    initCharacterCounter() {
        const mensajeField = document.getElementById('mensaje');
        const counter = document.getElementById('mensaje-counter');
        
        if (mensajeField && counter) {
            mensajeField.addEventListener('input', () => {
                const length = mensajeField.value.length;
                const maxLength = this.rules.mensaje.maxLength;
                
                counter.textContent = `${length}/${maxLength}`;
                
                // Cambiar color cuando se acerque al límite
                if (length > maxLength * 0.9) {
                    counter.style.color = '#ef4444';
                } else if (length > maxLength * 0.8) {
                    counter.style.color = '#f59e0b';
                } else {
                    counter.style.color = '#9ca3af';
                }
            });
        }
    }

    validateField(fieldName) {
        const field = document.getElementById(fieldName);
        const rule = this.rules[fieldName];
        
        if (!field || !rule) return true;

        const value = field.value.trim();
        let isValid = true;
        let errorMessage = '';

        // Validar campo requerido
        if (rule.required && !value) {
            isValid = false;
            errorMessage = 'Este campo es requerido';
        }
        // Validar longitud mínima
        else if (rule.minLength && value.length < rule.minLength) {
            isValid = false;
            errorMessage = rule.message || `Mínimo ${rule.minLength} caracteres`;
        }
        // Validar longitud máxima
        else if (rule.maxLength && value.length > rule.maxLength) {
            isValid = false;
            errorMessage = `Máximo ${rule.maxLength} caracteres`;
        }
        // Validar patrón
        else if (rule.pattern && value && !rule.pattern.test(value)) {
            isValid = false;
            errorMessage = rule.message || 'Formato no válido';
        }
        
        // Validaciones especiales
        if (fieldName === 'email' && value) {
            isValid = this.validateEmail(value);
            if (!isValid) {
                errorMessage = 'Correo electrónico no válido';
            }
        }
        
        if (fieldName === 'terminos') {
            isValid = field.checked;
            if (!isValid) {
                errorMessage = rule.message;
            }
        }

        this.showFieldResult(fieldName, isValid, errorMessage);
        return isValid;
    }

    validateEmail(email) {
        // Validación más estricta para email
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        
        if (!emailRegex.test(email)) return false;
        
        // Verificar dominios comunes sospechosos
        const suspiciousDomains = ['tempmail', '10minutemail', 'guerrillamail', 'mailinator'];
        const domain = email.split('@')[1]?.toLowerCase();
        
        if (suspiciousDomains.some(suspicious => domain?.includes(suspicious))) {
            return false;
        }
        
        return true;
    }

    formatPhoneNumber(field) {
        let value = field.value.replace(/\D/g, ''); // Solo números
        
        // Formato colombiano
        if (value.startsWith('57')) {
            value = value.slice(2);
        }
        
        if (value.length <= 10) {
            // Formato: 300 123 4567
            if (value.length > 6) {
                value = value.replace(/(\d{3})(\d{3})(\d{4})/, '$1 $2 $3');
            } else if (value.length > 3) {
                value = value.replace(/(\d{3})(\d+)/, '$1 $2');
            }
        }
        
        // Agregar código de país si no existe
        if (value && !field.value.startsWith('+')) {
            value = '+57 ' + value;
        }
        
        field.value = value;
    }

    showFieldResult(fieldName, isValid, errorMessage) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(fieldName + '-error');
        
        if (!field) return;

        // Limpiar clases previas
        field.classList.remove('error', 'success');
        
        if (errorElement) {
            if (isValid && field.value.trim()) {
                field.classList.add('success');
                errorElement.textContent = '';
            } else if (!isValid) {
                field.classList.add('error');
                errorElement.textContent = errorMessage;
            } else {
                errorElement.textContent = '';
            }
        }
    }

    clearError(fieldName) {
        const field = document.getElementById(fieldName);
        const errorElement = document.getElementById(fieldName + '-error');
        
        if (field) {
            field.classList.remove('error');
        }
        
        if (errorElement && field?.value.trim()) {
            setTimeout(() => {
                this.validateField(fieldName);
            }, 500);
        }
    }

    validateForm() {
        let isFormValid = true;
        const errors = [];

        // Validar todos los campos
        Object.keys(this.rules).forEach(fieldName => {
            const fieldValid = this.validateField(fieldName);
            if (!fieldValid) {
                isFormValid = false;
                errors.push(fieldName);
            }
        });

        // Validar reCAPTCHA
        if (typeof grecaptcha !== 'undefined') {
            const recaptchaResponse = grecaptcha.getResponse();
            if (!recaptchaResponse) {
                isFormValid = false;
                errors.push('recaptcha');
                this.showRecaptchaError('Por favor, completa la verificación reCAPTCHA');
            }
        }

        return {
            isValid: isFormValid,
            errors: errors
        };
    }

    showRecaptchaError(message) {
        const errorElement = document.getElementById('recaptcha-error');
        if (errorElement) {
            errorElement.textContent = message;
        }
    }

    clearRecaptchaError() {
        const errorElement = document.getElementById('recaptcha-error');
        if (errorElement) {
            errorElement.textContent = '';
        }
    }

    // Sanitización de datos
    sanitizeData(data) {
        const sanitized = {};
        
        Object.keys(data).forEach(key => {
            if (typeof data[key] === 'string') {
                // Eliminar caracteres peligrosos
                sanitized[key] = data[key]
                    .trim()
                    .replace(/[<>\"']/g, '') // Eliminar caracteres HTML
                    .substring(0, this.rules[key]?.maxLength || 1000); // Limitar longitud
            } else {
                sanitized[key] = data[key];
            }
        });
        
        return sanitized;
    }

    // Rate limiting básico
    static checkRateLimit() {
        const lastSubmission = localStorage.getItem('lastContactSubmission');
        const now = Date.now();
        const cooldownTime = 60000; // 1 minuto
        
        if (lastSubmission && (now - parseInt(lastSubmission)) < cooldownTime) {
            const remainingTime = Math.ceil((cooldownTime - (now - parseInt(lastSubmission))) / 1000);
            return {
                allowed: false,
                remainingTime: remainingTime
            };
        }
        
        localStorage.setItem('lastContactSubmission', now.toString());
        return { allowed: true };
    }
}

// Inicializar validador cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    window.contactValidator = new ContactValidator();
});