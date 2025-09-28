# Portfolio Personal con Django CMS - Catalina Quijano

## 📋 Descripción

Portfolio personal completo de Catalina Quijano, una desarrolladora Full Stack de Bogotá, Colombia. Este proyecto integra un frontend moderno con HTML5, CSS3 y JavaScript junto con un backend Django CMS para gestión de contactos, análisis y administración. Desarrollado siguiendo principios de desarrollo moderno, patrones de diseño y mejores prácticas de desarrollo web.

## 🌟 Características

### Frontend
- **HTML Semántico**: Estructura completa utilizando etiquetas semánticas HTML5
- **CSS Mobile-First**: Diseño responsive con enfoque mobile-first
- **JavaScript Modular**: Código organizado en clases siguiendo patrones de diseño
- **Principio DRY**: Configuración de datos centralizada para fácil mantenimiento
- **Accesibilidad**: Implementación de ARIA labels y navegación por teclado
- **Animaciones Fluidas**: Efectos de transición y animaciones CSS/JS
- **Menú Responsive**: Menú hamburguesa funcional para dispositivos móviles
- **Formulario de Contacto Avanzado**: Con validación en tiempo real y reCAPTCHA

### Backend (Django CMS)
- **API REST Segura**: Endpoints para formulario de contacto con autenticación
- **Sistema Anti-Spam**: Múltiples capas de protección y filtros inteligentes
- **Panel de Administración**: Gestión completa de mensajes y estadísticas
- **Notificaciones por Email**: Confirmaciones automáticas y alertas de admin
- **Analytics Integradas**: Estadísticas de contactos y conversiones
- **Rate Limiting**: Protección contra ataques de fuerza bruta
- **Base de Datos PostgreSQL**: Almacenamiento robusto y escalable

## 📁 Estructura del Proyecto

```
MyCV/
├── 📄 Frontend
│   ├── index.html              # Portfolio principal
│   ├── contactame.html         # Página de contacto
│   ├── styles.css              # Estilos globales
│   └── assets/
│       ├── css/
│       │   ├── styles.css      # Estilos del portfolio
│       │   └── contact.css     # Estilos del formulario
│       ├── js/
│       │   ├── script.js       # Managers principales
│       │   ├── menu.js         # Menú responsive
│       │   ├── contact-form.js # Manejo del formulario
│       │   └── contact-validation.js # Validaciones
│       └── images/
│           ├── cosmic.mp4      # Video de fondo
│           ├── favicon.png     # Icono del sitio
│           ├── me.jpg          # Foto de perfil
│           └── comrades/       # Fotos del equipo
├── 🔧 Backend (Django CMS)
│   ├── manage.py               # CLI de Django
│   ├── requirements.txt        # Dependencias Python
│   ├── .env.example           # Variables de entorno
│   ├── setup.bat/setup.sh     # Scripts de inicialización
│   ├── contact/               # App de contactos
│   │   ├── models.py          # Modelos de datos
│   │   ├── views.py           # API REST views
│   │   ├── serializers.py     # Validadores de API
│   │   ├── utils.py           # Utilidades anti-spam
│   │   ├── admin.py           # Panel de administración
│   │   ├── urls.py            # Rutas de la API
│   │   ├── signals.py         # Señales de Django
│   │   └── templates/emails/  # Templates de email
│   └── portfolio_cms/
│       ├── settings.py        # Configuración Django
│       ├── urls.py            # URLs principales
│       ├── wsgi.py            # WSGI para deployment
│       └── asgi.py            # ASGI para async
├── 🐳 Docker & Deployment
│   ├── Dockerfile             # Configuración multi-stage
│   ├── nginx.conf             # Configuración proxy
│   ├── start.sh               # Script de inicio
│   ├── railway.json           # Configuración Railway
│   └── .dockerignore          # Archivos ignorados
└── 📚 Documentación
    ├── README.md              # Este archivo
    └── django_cms/README.md   # Documentación del backend
```

## 🚀 Funcionalidades

### Secciones Principales
- **Home**: Página de bienvenida con presentación
- **About**: Información personal y profesional
- **Skills**: Sistema de tabs con barras de progreso animadas
- **Projects**: Sección para mostrar proyectos (preparada para expansión)

### Sistema de Skills Dinámico
- **Tabs Interactivos**: 4 categorías (Programming Languages, Frameworks, Tools, Soft Skills)
- **Barras de Progreso Animadas**: Indicadores visuales de nivel de competencia
- **Agregar Skills Dinámicamente**: API para agregar nuevas habilidades
- **Iconos Dinámicos**: Integración con Simple Icons

### Menú de Navegación
- **Responsive**: Se adapta automáticamente a diferentes tamaños de pantalla
- **Menú Hamburguesa**: Funcionalidad completa para móviles
- **Smooth Scroll**: Navegación suave entre secciones
- **Accesibilidad**: Soporte para navegación por teclado

## 🛠️ Stack Tecnológico

### Frontend
- **HTML5**: Estructura semántica moderna
- **CSS3**: Grid, Flexbox, animaciones y responsive design
- **JavaScript ES6+**: Clases, módulos y programación orientada a objetos
- **Google Fonts**: Tipografías Nunito, Libre Baskerville y Playfair Display
- **Simple Icons**: Iconos vectoriales para tecnologías
- **reCAPTCHA v3**: Protección contra spam

### Backend
- **Django 4.2.7**: Framework web principal
- **Django REST Framework**: API REST robusta
- **PostgreSQL**: Base de datos relacional
- **Redis**: Cache y sesiones (opcional)
- **Celery**: Tareas asíncronas (opcional)
- **Python 3.11**: Lenguaje de programación

### DevOps & Deployment
- **Docker**: Containerización multi-stage
- **Nginx**: Servidor web y proxy reverso
- **Railway**: Plataforma de deployment
- **WhiteNoise**: Servir archivos estáticos
- **Gunicorn**: Servidor WSGI para producción

## 📱 Responsive Design

El diseño sigue el principio **mobile-first** con breakpoints en:
- **600px**: Ajustes para pantallas pequeñas
- **800px**: Activación del menú hamburguesa
- **900px**: Layout de escritorio completo

## 🎨 Paleta de Colores

- **Fondo Principal**: `#140c24` (Morado muy oscuro)
- **Secciones**: `#2e1556` (Morado medio)
- **Acentos**: `#a78bfa` (Lavanda)
- **Highlights**: `#e0aaff` (Rosa claro)
- **Texto**: `#ffffff` (Blanco)

## 📝 Uso

### Personalización de Skills

```javascript
// Agregar una nueva skill
window.addSkill('programming', {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/typescript.svg',
    percentage: 85
});

// Actualizar porcentaje de una skill existente
window.updateSkillPercentage('programming', 'JavaScript', 95);
```

### Configuración de Datos

Los datos de skills se encuentran en `script.js` en el objeto `skillsData`:

```javascript
const skillsData = {
    programming: [
        { name: 'HTML5', icon: 'url', percentage: 90 },
        // ... más skills
    ],
    // ... más categorías
};
```

## 🔧 Instalación y Configuración

### Opción 1: Solo Frontend (Desarrollo Rápido)

```bash
# Clonar el repositorio
git clone [tu-repositorio]
cd MyCV

# Servidor de desarrollo simple
python -m http.server 8000
# o
npx live-server
```

### Opción 2: Stack Completo (Frontend + Backend)

#### Prerequisitos
- Python 3.8+
- PostgreSQL 12+
- Git

#### Windows
```bash
cd MyCV/django_cms
setup.bat
```

#### Linux/macOS
```bash
cd MyCV/django_cms
chmod +x setup.sh
./setup.sh
```

#### Configuración Manual

1. **Backend Django**
```bash
cd django_cms
python -m venv venv
source venv/bin/activate  # Linux/macOS
# o venv\Scripts\activate.bat  # Windows

pip install -r requirements.txt
cp .env.example .env
# Editar .env con tus configuraciones

python manage.py migrate
python manage.py createsuperuser
python manage.py runserver
```

2. **Frontend**
```bash
# En otra terminal
cd .. # volver al directorio raíz
python -m http.server 3000
```

### Opción 3: Docker (Producción)

```bash
# Construir y ejecutar
docker build -t portfolio-cms .
docker run -p 80:80 portfolio-cms

# Con docker-compose (recomendado)
docker-compose up --build
```

## 🎯 Características Técnicas

### Patrones de Diseño Implementados
- **Singleton**: MenuManager y SkillsManager
- **Observer**: IntersectionObserver para animaciones
- **Factory**: Generación dinámica de elementos HTML
- **Event Delegation**: Manejo eficiente de eventos

### Principios SOLID
- **Responsabilidad Única**: Cada clase tiene una responsabilidad específica
- **Abierto/Cerrado**: Fácil extensión sin modificar código existente
- **Segregación de Interfaces**: APIs específicas para cada funcionalidad

### Accesibilidad (WCAG)
- Etiquetas ARIA para lectores de pantalla
- Navegación por teclado completa
- Contraste de colores adecuado
- Estructura semántica clara

## 🚀 Extensibilidad

El proyecto está diseñado para ser fácilmente extensible:

1. **Agregar nuevas secciones**: Seguir el patrón de `.content-section`
2. **Nuevas categorías de skills**: Agregar al objeto `skillsData`
3. **Temas personalizados**: Modificar variables CSS
4. **Funcionalidades adicionales**: Crear nuevas clases siguiendo el patrón existente

## ⚙️ Configuración del Sistema

### Variables de Entorno Principales

```env
# Django Core
SECRET_KEY=tu-clave-secreta-super-segura
DEBUG=False
ALLOWED_HOSTS=tu-dominio.com,localhost

# Base de Datos
DATABASE_URL=postgresql://usuario:password@host:puerto/db_name

# Email (Gmail recomendado)
EMAIL_HOST_USER=tu-email@gmail.com
EMAIL_HOST_PASSWORD=tu-app-password
DEFAULT_FROM_EMAIL=noreply@tu-dominio.com
CONTACT_EMAIL_RECIPIENTS=admin@tu-dominio.com

# reCAPTCHA (Obligatorio para producción)
RECAPTCHA_PUBLIC_KEY=tu-site-key
RECAPTCHA_PRIVATE_KEY=tu-secret-key

# Site Configuration
SITE_URL=https://tu-dominio.com
ADMIN_EMAIL=admin@tu-dominio.com
```

### Configurar reCAPTCHA

1. Ve a [Google reCAPTCHA](https://www.google.com/recaptcha/)
2. Registra tu sitio (usa reCAPTCHA v3)
3. Agrega tus dominios (localhost para desarrollo)
4. Copia las claves a tu archivo .env
5. Actualiza `contactame.html` con tu site key

### Configurar Email con Gmail

1. Habilita verificación en 2 pasos en Gmail
2. Genera una contraseña de aplicación
3. Usa esa contraseña en `EMAIL_HOST_PASSWORD`

## 🚀 Despliegue en Railway

### Configuración Automática

1. **Fork/Clone el repositorio**
2. **Conecta a Railway**
   - Ve a [Railway](https://railway.app)
   - "New Project" → "Deploy from GitHub repo"
   - Selecciona tu repositorio

3. **Railway detectará automáticamente:**
   - Dockerfile para build multi-stage
   - PostgreSQL como base de datos
   - Variables de entorno necesarias

### Variables de Entorno en Railway

```env
# Automáticas (Railway las configura)
DATABASE_URL=postgresql://...
PORT=80

# Manuales (debes configurarlas)
SECRET_KEY=django-insecure-cambiar-en-produccion
DEBUG=False
ALLOWED_HOSTS=tu-dominio.railway.app
EMAIL_HOST_USER=tu-email@gmail.com
EMAIL_HOST_PASSWORD=tu-app-password
RECAPTCHA_PUBLIC_KEY=tu-site-key
RECAPTCHA_PRIVATE_KEY=tu-secret-key
SITE_URL=https://tu-dominio.railway.app
ADMIN_EMAIL=admin@tu-dominio.com
```

### Post-Deployment

Después del primer deploy, ejecuta:

```bash
# En Railway CLI o dashboard
railway run python django_cms/manage.py migrate
railway run python django_cms/manage.py createsuperuser
```

### Desarrollo local con Docker

#### Construir la imagen
```bash
docker build -t mycv-portfolio .
```

#### Ejecutar el contenedor
```bash
docker run -p 8080:80 mycv-portfolio
```

#### Acceder a la aplicación
Abre tu navegador en `http://localhost:8080`

### Comandos útiles

#### Ver logs del contenedor
```bash
docker logs <container-id>
```

#### Ejecutar bash en el contenedor
```bash
docker exec -it <container-id> /bin/sh
```

#### Limpiar imágenes Docker
```bash
docker system prune -a
```

### Despliegue automático

Cada push a la rama `main` desplegará automáticamente en Railway.

#### Monitoreo
- **Logs**: Railway Dashboard → Deployments → View Logs
- **Métricas**: Railway Dashboard → Metrics
- **Dominio**: Railway asignará un dominio automáticamente

### Configuración de dominio personalizado

1. En Railway Dashboard → Settings → Domains
2. Agregar tu dominio personalizado
3. Configurar DNS según las instrucciones de Railway

### Troubleshooting

#### Error de puerto
Asegúrate que el contenedor expone el puerto 80 y Railway está configurado correctamente.

#### Archivos estáticos no cargan
Verifica la configuración de Nginx y las rutas de archivos.

#### Build fallido
Revisa los logs de build en Railway Dashboard.

## �📄 Licencia

Este proyecto es una plantilla base para CV online y puede ser utilizada libremente para fines personales y comerciales.

## 🔒 Características de Seguridad

### Frontend
- Validación en tiempo real de formularios
- Rate limiting en cliente
- Sanitización de inputs
- reCAPTCHA v3 integrado

### Backend
- Protección CSRF y CORS configurada
- Rate limiting por IP (10 requests/minuto para contacto)
- Detección automática de spam por contenido
- Validación de emails temporales/sospechosos
- Headers de seguridad (XSS, CSRF, Content-Type)
- Logs de seguridad completos

### Infrastructure
- Docker multi-stage builds
- Nginx como proxy reverso
- PostgreSQL con conexiones seguras
- HTTPS enforced en producción

## 📊 Panel de Administración

Accede a `/admin/` con credenciales de superusuario:

### Funcionalidades
- **Dashboard de Mensajes**: Vista completa de todos los contactos
- **Filtros Avanzados**: Por estado, tipo de proyecto, fecha, spam
- **Acciones en Lote**: Marcar como leído, respondido, archivar
- **Analytics Dashboard**: Estadísticas de conversión y tendencias
- **Gestión de Spam**: Herramientas para identificar y gestionar spam
- **Export de Datos**: Exportar contactos para análisis externo

## 📈 Analytics y Métricas

El sistema rastrea automáticamente:
- Total de mensajes por día
- Tasa de conversión (mensajes válidos vs total)
- Distribución por tipo de proyecto
- Detección de patrones de spam
- Métricas de engagement del formulario

## 🛠️ Desarrollo y Contribución

### Estructura de Código
- **Frontend**: Módulos ES6+ con patrón MVC
- **Backend**: Apps Django con separación de responsabilidades
- **Tests**: Suite de tests automatizados
- **Documentation**: Código documentado y comentado

### Para Contribuir
1. Fork el repositorio
2. Crea una rama feature: `git checkout -b feature/nueva-funcionalidad`
3. Commit tus cambios: `git commit -m 'Agregar nueva funcionalidad'`
4. Push a la rama: `git push origin feature/nueva-funcionalidad`
5. Abre un Pull Request

### Testing
```bash
# Frontend (si tienes Jest configurado)
npm test

# Backend
cd django_cms
python manage.py test

# Cobertura
coverage run --source='.' manage.py test
coverage report
```

## 📞 Soporte y Contacto

- **Documentación**: Ver `/django_cms/README.md` para detalles del backend
- **Issues**: Reporta bugs en GitHub Issues
- **Email**: [tu-email] para consultas directas
- **LinkedIn**: [tu-linkedin] para networking

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Puedes usar, modificar y distribuir libremente para proyectos personales y comerciales.

## 🙏 Agradecimientos

- **Django Community**: Por el excelente framework
- **Railway**: Por la plataforma de deployment
- **Google Fonts**: Por las tipografías
- **Simple Icons**: Por los iconos de tecnologías

---

**¡Portfolio Full Stack listo para producción! 🚀**

*Desarrollado con ❤️ por Catalina Quijano*

## ⚙️ Notas sobre archivos estáticos
- Django recopila los assets estáticos (CSS, JS, imágenes) desde STATICFILES_DIRS y los copia a STATIC_ROOT cuando se ejecuta `python manage.py collectstatic`.
- En este proyecto STATIC_ROOT por defecto es backend/staticfiles. Esa carpeta es generada y NO debe comitearse en el repositorio.
- Puedes borrar backend/staticfiles si la ves en tu repo; se recreará al ejecutar collectstatic en el entorno de despliegue. Añadimos `/backend/staticfiles` a .dockerignore para evitar incluirla en el contexto de build de Docker.
