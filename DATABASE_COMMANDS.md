# 🔧 COMANDOS ÚTILES PARA VERIFICAR BASE DE DATOS EN RAILWAY

## Conectarse a la consola de Railway (si necesario):
```bash
railway login
railway connect [PROJECT_NAME]
railway shell
```

## Comandos Django para verificar BD (ejecutar en Railway shell):
```bash
# Verificar tablas creadas
python manage.py dbshell --command="SHOW TABLES;"

# Ver estructura de tabla específica
python manage.py dbshell --command="DESCRIBE django_migrations;"
python manage.py dbshell --command="DESCRIBE contact_contactmessage;"
python manage.py dbshell --command="DESCRIBE books_book;"
python manage.py dbshell --command="DESCRIBE fyqs_faq;"

# Verificar migraciones aplicadas
python manage.py showmigrations

# Verificar usuarios creados
python manage.py shell -c "from django.contrib.auth.models import User; print(User.objects.all())"

# Crear nuevo superusuario si es necesario
python manage.py createsuperuser
```

## Comandos locales para generar SECRET_KEY:
```bash
# Generar nueva SECRET_KEY
python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"

# Verificar conexión local (con SQLite)
cd backend
python manage.py runserver
```

## Estructura de tablas que se crearán automáticamente:

### Tablas de Django (sistema):
- `auth_group`
- `auth_group_permissions`  
- `auth_permission`
- `auth_user`
- `auth_user_groups`
- `auth_user_user_permissions`
- `django_admin_log`
- `django_content_type`
- `django_migrations`
- `django_session`

### Tablas de las apps del proyecto:
- `contact_contactmessage` - Mensajes del formulario de contacto
- `books_book` - Información de libros del portfolio  
- `fyqs_faq` - Preguntas frecuentes

## Credenciales predeterminadas del admin:
```
URL: https://tu-dominio.railway.app/admin/
Usuario: admin
Contraseña: railway2025
```

⚠️ **IMPORTANTE**: Cambiar la contraseña del admin inmediatamente después del primer acceso.

## Resolución de problemas comunes:

### Error: "mysqlclient not found"
- Verificar que `mysqlclient==2.2.4` esté en requirements.txt
- El Dockerfile debe incluir `default-libmysqlclient-dev`

### Error: "No module named 'MySQLdb'"  
- Instalar: `pip install mysqlclient`
- En Railway se instala automáticamente desde requirements.txt

### Error: "Access denied for user"
- Verificar que DATABASE_URL sea correcta
- Confirmar que el servicio MySQL esté activo en Railway

### Tablas no creadas:
- Revisar logs del despliegue en Railway
- El script start.sh muestra el progreso de las migraciones
- Verificar que todas las migraciones existan en las carpetas migrations/