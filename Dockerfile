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

# Make startup script executable
RUN chmod +x start.sh

# Expose port
EXPOSE $PORT

# Use startup script
CMD ["./start.sh"]