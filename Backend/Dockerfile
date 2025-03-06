# Use official Python image
FROM python:3.9

# Set working directory
WORKDIR /app

# Copy all backend files
COPY . .

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose Flask port
EXPOSE 5000

# Run the app
CMD ["python", "contact_book.py"]
