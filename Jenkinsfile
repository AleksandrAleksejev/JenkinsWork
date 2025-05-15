pipeline {
    agent any
    stages {
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Start App') {
            steps {
                sh 'node index.js'
            }
        }
    }
}
