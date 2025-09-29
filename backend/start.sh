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
python manage.py dbshell --command="SELECT 1;" || echo "⚠️  DB connection check failed, continuing..."

echo "\n🗃️  Making migrations (in case of model changes)..."
python manage.py makemigrations --noinput --verbosity=2

echo "\n📦 Applying all migrations to new MySQL database..."
python manage.py migrate --noinput --verbosity=2

echo "\n👤 Creating superuser if needed..."
echo "from django.contrib.auth import get_user_model; User = get_user_model(); User.objects.filter(username='admin').exists() or User.objects.create_superuser('admin', 'admin@portfolio.com', 'railway2025')" | python manage.py shell

echo "\n🎨 Collecting static files..."
python manage.py collectstatic --noinput --verbosity=2

echo "\n✅ Database setup complete! Tables created:"
python manage.py dbshell --command="SHOW TABLES;"

echo "\n🚀 Starting Gunicorn server..."
exec gunicorn -c gunicorn.conf.py portfolio_cms.wsgi:application