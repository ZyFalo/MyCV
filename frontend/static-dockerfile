# Use an official Python runtime as a parent image
FROM python:3.11-slim

# Set the working directory in the container
WORKDIR /app

# Copy the current directory contents into the container at /app
COPY . /app

# Expose port 8000 for the HTTP server
EXPOSE 8000

# Start the server using Python's built-in HTTP server
CMD ["python", "-m", "http.server", "8000"]
