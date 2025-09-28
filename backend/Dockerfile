FROM python:3.11-slim
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# copiar backend y frontend al contenedor (ajusta si el contexto difiere)
COPY . .
# si tu docker build se ejecuta desde backend/, copia frontend desde fuera:
# COPY ../frontend ./frontend

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

# collectstatic se puede ejecutar aquí o en entrypoint.sh
RUN python manage.py collectstatic --noinput || true

EXPOSE 8000
ENTRYPOINT ["/entrypoint.sh"]
CMD ["gunicorn", "--bind", "0.0.0.0:8000", "portfolio_cms.wsgi:application"]