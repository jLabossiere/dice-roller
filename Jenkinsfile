pipeline {
  agent {
    docker {
      image 'node:6-alpine'
      args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true' 
  }
  stages {
    stage('Install Dependencies') {
      steps {
        sh 'apk add --update nodejs npm'
      }
    }
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'npm start'
      }
    }
  }
}