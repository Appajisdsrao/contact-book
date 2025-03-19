pipeline {
    agent any

    environment {
        IMAGE_BACKEND = "contact-book-backend"
        IMAGE_FRONTEND = "contact-book-frontend"
        CONTAINER_BACKEND = "contact-book-backend-container"
        CONTAINER_FRONTEND = "contact-book-frontend-container"
        DOCKER_COMPOSE_FILE = "docker-compose.yml"
    }

    stages {
        stage('Clone Repository') {
            steps {
                script {
                    echo "Cloning the repository..."
                    checkout scm
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    echo "Building Docker images..."
                    sh 'docker build -t $IMAGE_FRONTEND -f frontend/Dockerfile frontend/'
                    sh 'docker build -t $IMAGE_BACKEND -f Backend/Dockerfile Backend/'
                }
            }
        }

        stage('Save Docker Images Locally') {
            steps {
                script {
                    echo "Saving Docker images..."
                    sh 'docker save -o frontend.tar $IMAGE_FRONTEND'
                    sh 'docker save -o backend.tar $IMAGE_BACKEND'
                }
            }
        }

        stage('Stop & Remove Old Containers') {
            steps {
                script {
                    echo "Stopping and removing old containers if they exist..."
                    sh '''
                        docker ps -q --filter "name=$CONTAINER_FRONTEND" | grep -q . && docker stop $CONTAINER_FRONTEND || true
                        docker ps -q --filter "name=$CONTAINER_BACKEND" | grep -q . && docker stop $CONTAINER_BACKEND || true
                        docker ps -a -q --filter "name=$CONTAINER_FRONTEND" | grep -q . && docker rm $CONTAINER_FRONTEND || true
                        docker ps -a -q --filter "name=$CONTAINER_BACKEND" | grep -q . && docker rm $CONTAINER_BACKEND || true
                    '''
                }
            }
        }

        stage('Load and Deploy Containers') {
            steps {
                script {
                    echo "Loading Docker images..."
                    sh 'docker load -i frontend.tar'
                    sh 'docker load -i backend.tar'

                    echo "Deploying using Docker Compose..."
                    sh 'docker-compose down || true'  // Stop any existing services
                    sh 'docker-compose up -d --build'
                }
            }
        }
    }

    post {
        always {
            echo "Cleaning up tar files..."
            sh 'rm -f frontend.tar backend.tar || true'
        }
        success {
            echo "✅ Deployment completed successfully!"
        }
        failure {
            echo "❌ Deployment failed. Check logs for details."
        }
    }
}
