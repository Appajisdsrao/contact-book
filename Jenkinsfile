pipeline {
    agent any
    environment {
        IMAGE_BACKEND = "contact-book-backend"
        IMAGE_FRONTEND = "contact-book-frontend"
    }
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Appajisdsrao/contact-book.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $IMAGE_FRONTEND -f frontend/Dockerfile frontend/'
                sh 'docker build -t $IMAGE_BACKEND -f Backend/Dockerfile Backend/'
            }
        }
        stage('Save Docker Images Locally') {
            steps {
                sh 'docker save -o frontend.tar $IMAGE_FRONTEND'
                sh 'docker save -o backend.tar $IMAGE_BACKEND'
            }
        }
        stage('Load and Deploy Containers') {
            steps {
                sh 'docker load -i frontend.tar'
                sh 'docker load -i backend.tar'
                sh 'docker-compose up -d'
            }
        }
    }
}
