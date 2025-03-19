pipeline {
    agent any
    stages {
        stage('Clone Repository') {
            steps {
                git branch: 'main', url: 'https://github.com/Appajisdsrao/contact-book.git'
            }
        }
        stage('Build Docker Images') {
            steps {
                sh 'docker build -t appajisdsrao/contact-book-frontend -f frontend/Dockerfile frontend/'
                sh 'docker build -t appajisdsrao/contact-book-backend -f Backend/Dockerfile Backend/'
            }
        }
        stage('Push to Docker Hub') {
            steps {
                sh 'docker login -u $DOCKER_USER -p $DOCKER_PASS'
                sh 'docker push appajisdsrao/contact-book-frontend'
                sh 'docker push appajisdsrao/contact-book-backend'
            }
        }
        stage('Deploy Containers') {
            steps {
                sh 'docker-compose up -d'
            }
        }
    }
}
