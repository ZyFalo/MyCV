#!/bin/bash
set -e

echo "Starting Railway deployment script..."
echo "Python version: $(python --version)"
echo "Current directory: $(pwd)"
echo "Port: ${PORT:-8000}"
echo "DEBUG: ${DEBUG:-False}"
echo "DATABASE_URL: ${DATABASE_URL:0:20}..."

# Check if manage.py exists
if [ ! -f "manage.py" ]; then
    echo "ERROR: manage.py not found in $(pwd)"
    ls -la
    exit 1
fi

echo "Running Django system check..."
python manage.py check --deploy

echo "Running migrations..."
python manage.py migrate --noinput

echo "Collecting static files..."
python manage.py collectstatic --noinput

echo "Starting Gunicorn server..."
exec gunicorn -c gunicorn.conf.py portfolio_cms.wsgi:application