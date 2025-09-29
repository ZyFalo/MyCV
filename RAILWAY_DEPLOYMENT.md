# 🚀 Despliegue Automático en Railway

## Resumen de Variables de Entorno Requeridas

Este proyecto Django está preparado para despliegue automático en Railway. A continuación se detallan **únicamente las variables estrictamente necesarias**.

## ✅ Variables Obligatorias

### 1. Variables Críticas
```env
SECRET_KEY=                 # Clave secreta de Django (generar nueva)
DEBUG=False                 # SIEMPRE False en producción  
DATABASE_URL=               # URL MySQL de Railway (auto-generada)
```

### 2. Variables de Configuración
```env
ALLOWED_HOSTS=              # tu-app.railway.app
WEB_CONCURRENCY=2           # Workers de Gunicorn
```

### 3. Variables de Seguridad
```env
RAILWAY_ENVIRONMENT=production
ENABLE_SSL=true
```

## 🔧 Configuración Rápida en Railway

### Paso 1: Preparar Base de Datos MySQL (Nueva y Vacía)
1. En Railway dashboard → **"Add Service"** → **"MySQL"**
2. Railway genera automáticamente `DATABASE_URL`
3. Copia la URL generada
4. ⚠️ **IMPORTANTE**: La BD estará completamente vacía (sin tablas)

### Paso 2: Generar SECRET_KEY
```bash
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"
```

### Paso 3: Configurar Variables en Railway
En el dashboard de Railway, pestaña **"Variables"**, agrega:

| Variable | Valor |
|----------|--------|
| `SECRET_KEY` | [clave generada en paso 2] |
| `DEBUG` | `False` |
| `DATABASE_URL` | [URL del MySQL de Railway] |
| `ALLOWED_HOSTS` | `tu-app.railway.app` |
| `WEB_CONCURRENCY` | `2` |
| `RAILWAY_ENVIRONMENT` | `production` |
| `ENABLE_SSL` | `true` |

### Paso 4: Desplegar
1. Conecta tu repositorio GitHub a Railway
2. Railway detectará automáticamente el proyecto Django
3. El script `backend/start.sh` se ejecutará automáticamente

## 📋 Variables Auto-Gestionadas por Railway

Estas variables **NO necesitan configuración manual**:
- `PORT` - Asignado automáticamente por Railway
- `RAILWAY_STATIC_URL` - URL estática del proyecto  
- `RAILWAY_PUBLIC_DOMAIN` - Dominio público asignado

## 🛠️ Estructura del Proyecto para Railway

```
MyCV/
├── backend/                 # Aplicación Django
│   ├── manage.py           # Entry point de Django
│   ├── requirements.txt    # Dependencias Python
│   ├── start.sh           # Script de inicio para Railway
│   ├── gunicorn.conf.py   # Configuración del servidor
│   └── portfolio_cms/     # Proyecto Django principal
├── frontend/              # Archivos estáticos
└── .env.railway.example   # Plantilla de variables
```

## ⚡ Comandos de Despliegue - Base de Datos Nueva

El archivo `start.sh` ejecuta automáticamente para **BD completamente nueva**:
1. ✅ Verificación del sistema Django
2. � Generación de nuevas migraciones (si hay cambios)
3. 📦 **Creación de TODAS las tablas** (contact, books, fyqs, auth, sessions, etc.)
4. 👤 **Creación automática de superusuario** (admin/railway2025)
5. 🎨 Recolección de archivos estáticos  
6. 📋 Verificación de tablas creadas
7. 🚀 Inicio del servidor Gunicorn

### 🎯 Resultado del Primer Despliegue:
- ✅ Base de datos MySQL completamente inicializada
- ✅ Todas las tablas de Django creadas
- ✅ Superusuario admin disponible
- ✅ Sistema listo para usar

## 🔒 Consideraciones de Seguridad

- ✅ **SSL habilitado** automáticamente en producción
- ✅ **Headers de seguridad** configurados
- ✅ **SECRET_KEY** único y fuerte
- ✅ **DEBUG=False** en producción
- ✅ **Hosts permitidos** restringidos

## 🔍 Verificación Post-Despliegue (Base de Datos Nueva)

Después del despliegue, verifica:
1. 🌐 El sitio web carga correctamente
2. 📱 Formulario de contacto funciona
3. 🎯 Base de datos MySQL conectada y tablas creadas
4. 🔒 HTTPS habilitado
5. 👨‍💻 **Admin panel accesible**: `https://tu-app.railway.app/admin/`
6. 🔑 **Login admin**: usuario `admin` / contraseña `railway2025`

### 🛡️ Acceso al Panel de Administración:
- URL: `https://tu-dominio.railway.app/admin/`
- Usuario: `admin`
- Contraseña: `railway2025`
- ⚠️ **¡Cambia la contraseña inmediatamente por seguridad!**

## 📞 Solución de Problemas

### Error: "SECRET_KEY not found"
- Verifica que `SECRET_KEY` está configurado en Railway Variables

### Error: "Database connection failed"  
- Confirma que el servicio MySQL está corriendo en Railway
- Verifica que `DATABASE_URL` apunta al MySQL correcto

### Error: "DisallowedHost"
- Actualiza `ALLOWED_HOSTS` con tu dominio de Railway exacto

---

**🎯 Resultado:** Tu portfolio estará disponible en `https://tu-app.railway.app`