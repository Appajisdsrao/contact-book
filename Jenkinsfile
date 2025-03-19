pipeline {
    agent any

    environment {
        DOCKER_IMAGE_FRONTEND = "yourdockerhubusername/contactbook-frontend:latest"
        DOCKER_IMAGE_BACKEND = "yourdockerhubusername/contactbook-backend:latest"
    }

    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/Appajisdsrao/contact-book.git'
            }
        }

        stage('Build Docker Images') {
            steps {
                sh 'docker build -t $DOCKER_IMAGE_FRONTEND frontend/'
                sh 'docker build -t $DOCKER_IMAGE_BACKEND backend/'
            }
        }

        stage('Push to Docker Hub') {
            steps {
                withDockerRegistry([credentialsId: 'docker-hub-credentials', url: '']) {
                    sh 'docker push $DOCKER_IMAGE_FRONTEND'
                    sh 'docker push $DOCKER_IMAGE_BACKEND'
                }
            }
        }

        stage('Deploy Containers') {
            steps {
                sh 'docker run -d -p 3000:3000 --name contactbook-frontend $DOCKER_IMAGE_FRONTEND'
                sh 'docker run -d -p 5000:5000 --name contactbook-backend $DOCKER_IMAGE_BACKEND'
            }
        }
    }
}
