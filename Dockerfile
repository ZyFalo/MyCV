FROM python:3.10-slim

WORKDIR /app

# Install system dependencies
RUN apt-get update && apt-get install -y \
    gcc \
    && rm -rf /var/lib/apt/lists/*

# Copy requirements from backend directory
COPY backend/requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend application code
COPY backend/ .

# Copy frontend static files
COPY frontend/ ./frontend/

# Create staticfiles directory
RUN mkdir -p /app/staticfiles

# Expose port
EXPOSE $PORT

# Run migrations, collect static files, and start server
CMD ["sh", "-c", "python manage.py check && python manage.py migrate && python manage.py collectstatic --noinput && python manage.py runserver 0.0.0.0:$PORT"]