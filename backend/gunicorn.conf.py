import os

# Gunicorn configuration
bind = f"0.0.0.0:{os.environ.get('PORT', '8000')}"
workers = int(os.environ.get('WEB_CONCURRENCY', '2'))
worker_class = 'sync'
worker_connections = 1000
max_requests = 1000
max_requests_jitter = 100
timeout = 30
keepalive = 2
preload_app = True

# Logging
loglevel = 'info'
accesslog = '-'
errorlog = '-'
access_log_format = '%(h)s %(l)s %(u)s %(t)s "%(r)s" %(s)s %(b)s "%(f)s" "%(a)s" %(D)s'