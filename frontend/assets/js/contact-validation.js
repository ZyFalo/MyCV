// ===== CONTACT FORM VALIDATION =====

class ContactValidator {
    constructor() {
        this.rules = {
            nombre: {
                required: true,
                minLength: 2,
                maxLength: 100,
                pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s]+$/,
                message: 'Name must contain only letters and spaces (min. 2 characters)'
            },
            email: {
                required: true,
                pattern: /^[a-zA-Z0-9]([a-zA-Z0-9._-])*[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9-])*[a-zA-Z0-9]\.([a-zA-Z]{2,})+$/,
                maxLength: 254,
                message: 'Please enter a valid email address'
            },
            empresa: {
                required: false,
                maxLength: 100,
                pattern: /^[a-zA-ZÀ-ÿ\u00f1\u00d1\s\d\.\-&,]+$/,
                message: 'Invalid company name'
            },
            telefono: {
                required: false,
                pattern: /^(\+57\s?)?(3[0-9]{2}|[67][0-9]{2})\s?[0-9]{3}\s?[0-9]{4}$/,
                minLength: 10,
                maxLength: 17,
                message: 'Invalid Colombian phone format (e.g. +57 300 123 4567)'
            },
            tipo_proyecto: {
                required: true,
                message: 'Please select a project type'
            },
            mensaje: {
                required: true,
                minLength: 10,
                maxLength: 1000,
                message: 'Message must be between 10 and 1000 characters'
            },
            terminos: {
                required: true,
                message: 'You must accept the terms and conditions'
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

        // Required
        if (rule.required && !value) {
            isValid = false;
            errorMessage = 'This field is required';
        }
        // Min length
        else if (rule.minLength && value.length < rule.minLength) {
            isValid = false;
            errorMessage = rule.message || `Minimum ${rule.minLength} characters`;
        }
        // Max length
        else if (rule.maxLength && value.length > rule.maxLength) {
            isValid = false;
            errorMessage = `Maximum ${rule.maxLength} characters`;
        }
        // Pattern
        else if (rule.pattern && value && !rule.pattern.test(value)) {
            isValid = false;
            errorMessage = rule.message || 'Invalid format';
        }
        
        // Special validations
        if (fieldName === 'email' && value) {
            isValid = this.validateEmail(value);
            if (!isValid) {
                errorMessage = 'Invalid email address';
            }
        }
        
        if (fieldName === 'telefono' && value) {
            isValid = this.validateColombianPhone(value);
            if (!isValid) {
                errorMessage = 'Invalid Colombian phone number';
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
        // Robust email regex
        const emailRegex = /^[a-zA-Z0-9]([a-zA-Z0-9._-])*[a-zA-Z0-9]@[a-zA-Z0-9]([a-zA-Z0-9-])*[a-zA-Z0-9]\.([a-zA-Z]{2,})+$/;
        
        if (!emailRegex.test(email)) return false;
        
        if (email.includes('..')) return false;
        
        const localPart = email.split('@')[0];
        const domain = email.split('@')[1];
        
        if (localPart.startsWith('.') || localPart.endsWith('.') || 
            localPart.startsWith('-') || localPart.endsWith('-')) return false;
        
        if (domain.startsWith('.') || domain.endsWith('.') || 
            domain.startsWith('-') || domain.endsWith('-')) return false;
        
        const suspiciousDomains = ['tempmail', '10minutemail', 'guerrillamail', 'mailinator'];
        
        if (suspiciousDomains.some(suspicious => domain?.toLowerCase().includes(suspicious))) {
            return false;
        }
        
        return true;
    }

    validateColombianPhone(phone) {
        // Limpiar el teléfono de espacios y caracteres especiales
        const cleanPhone = phone.replace(/[\s\-\(\)]/g, '');
        
        // Patrones para teléfonos colombianos
        const patterns = [
            // Con código de país: +573001234567
            /^\+57(3[0-9]{2}|[67][0-9]{2})[0-9]{7}$/,
            // Sin código de país: 3001234567
            /^(3[0-9]{2}|[67][0-9]{2})[0-9]{7}$/,
            // Con código de país y espacios: +57 300 123 4567
            /^\+57\s?(3[0-9]{2}|[67][0-9]{2})\s?[0-9]{3}\s?[0-9]{4}$/
        ];
        
        // Verificar si coincide con algún patrón
        const isValidFormat = patterns.some(pattern => pattern.test(phone));
        
        if (!isValidFormat) return false;
        
        // Verificar longitud del número limpio
        const phoneDigits = cleanPhone.replace(/^\+57/, '');
        
        // Debe tener exactamente 10 dígitos (sin código de país)
        if (phoneDigits.length !== 10) return false;
        
        // Verificar que sea un número móvil válido (empieza con 3, 6 o 7)
        const firstDigit = phoneDigits.charAt(0);
        if (!['3', '6', '7'].includes(firstDigit)) return false;
        
        // Para números que empiezan con 3 (móviles), verificar el segundo dígito
        if (firstDigit === '3') {
            const secondDigit = phoneDigits.charAt(1);
            // Prefijos móviles válidos en Colombia: 300-350
            const validSecondDigits = ['0', '1', '2', '3', '4', '5'];
            if (!validSecondDigits.includes(secondDigit)) return false;
        }
        
        return true;
    }

    formatPhoneNumber(field) {
        let value = field.value.replace(/[^\d\+]/g, ''); // Solo números y +
        
        // Si no tiene código de país, agregarlo
        if (value && !value.startsWith('+57')) {
            // Remover cualquier código de país incorrecto
            if (value.startsWith('+')) {
                value = value.replace(/^\+\d+/, '');
            }
            
            // Si empieza con 57, quitarlo para reagregarlo correctamente
            if (value.startsWith('57')) {
                value = value.slice(2);
            }
            
            // Solo agregar +57 si el número parece colombiano
            if (value.length >= 10 && ['3', '6', '7'].includes(value.charAt(0))) {
                value = '+57' + value;
            }
        }
        
        // Formatear con espacios para números colombianos
        if (value.startsWith('+57') && value.length >= 13) {
            // +57 300 123 4567
            value = value.replace(/^(\+57)(\d{3})(\d{3})(\d{4}).*/, '$1 $2 $3 $4');
        } else if (!value.startsWith('+') && value.length >= 10 && ['3', '6', '7'].includes(value.charAt(0))) {
            // 300 123 4567
            value = value.replace(/^(\d{3})(\d{3})(\d{4}).*/, '$1 $2 $3');
            // Agregar código de país
            value = '+57 ' + value;
        }
        
        // Limitar longitud máxima
        if (value.length > 17) {
            value = value.substring(0, 17);
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
            if (isValid) {
                // Determinar si el campo tiene "valor" visible (para checkbox/select/input)
                let hasValue = false;
                if (field.type === 'checkbox') {
                    hasValue = field.checked;
                } else if (field.tagName.toLowerCase() === 'select') {
                    hasValue = field.value !== null && field.value.toString().trim() !== '';
                } else {
                    hasValue = field.value !== null && field.value.toString().trim() !== '';
                }

                if (hasValue) {
                    field.classList.add('success');
                    errorElement.textContent = '';
                } else {
                    // Campo válido pero sin valor (no mostrar éxito visual)
                    field.classList.remove('success');
                    errorElement.textContent = '';
                }
            } else {
                // error
                field.classList.add('error');
                errorElement.textContent = errorMessage;
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
                this.showRecaptchaError('Please complete the reCAPTCHA verification');
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