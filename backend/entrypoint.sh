#!/bin/sh
set -e

# Espera a que la base de datos esté disponible (opcional simple)
# (puedes mejorar con wait-for-it o similar si lo necesitas)
echo "Starting entrypoint: running migrations and collectstatic"

# Ejecutar migraciones
python manage.py migrate --noinput

# Recolectar estáticos (si Django debe servirlos)
python manage.py collectstatic --noinput

# Ejecutar cualquier comando adicional pasado al contenedor
exec "$@"