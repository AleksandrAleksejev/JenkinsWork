pipeline {
    agent any
    stages {
        stage('Build Docker image') {
            steps {
                sh 'docker build -t sweet-app .'
            }
        }
        stage('Run Docker container') {
            steps {
                sh 'docker run -d -p 3000:3000 --name sweet-app-container sweet-app'
            }
        }
        stage('Test /sweet endpoint') {
            steps {
                sh 'sleep 5 && curl http://localhost:3000/sweet'
            }
        }
    }
}
