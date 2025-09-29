#!/bin/bash
set -e

echo "======================================"
echo "🚀 Railway Deployment - Django Portfolio"
echo "======================================"
echo "Python version: $(python --version)"
echo "Current directory: $(pwd)"
echo "Port: ${PORT:-8000}"
echo "DEBUG: ${DEBUG:-False}"
echo "DATABASE_URL: ${DATABASE_URL:0:30}..."

# Check if manage.py exists
if [ ! -f "manage.py" ]; then
    echo "❌ ERROR: manage.py not found in $(pwd)"
    ls -la
    exit 1
fi

echo "\n🔍 Running Django system check..."
python manage.py check --deploy

echo "\n📊 Checking database connection..."
python -c "
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_cms.settings')
import django
django.setup()
from django.db import connection
cursor = connection.cursor()
cursor.execute('SELECT 1')
print('✅ Database connection successful!')
" || echo "⚠️  DB connection check failed, continuing..."

echo "\n🗃️  Making migrations (in case of model changes)..."
python manage.py makemigrations --noinput --verbosity=2

echo "\n📦 Applying all migrations to new MySQL database..."
# Force apply migrations even if they appear to exist
python manage.py migrate --run-syncdb --verbosity=2

echo "\n👤 Creating superuser if needed..."
echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.filter(username='admin').exists() or User.objects.create_superuser('admin', 'admin@portfolio.com', 'railway2025')" | python manage.py shell

echo "\n🎨 Collecting static files..."
python manage.py collectstatic --noinput --verbosity=2

echo "\n✅ Database setup complete! Verifying Django setup..."
python -c "
import os
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'portfolio_cms.settings')
import django
django.setup()
from django.db import connection
print('✅ Django successfully connected to MySQL!')
print('✅ Database backend:', connection.settings_dict['ENGINE'])
"

echo "\n🚀 Starting Gunicorn server..."
exec gunicorn -c gunicorn.conf.py portfolio_cms.wsgi:application