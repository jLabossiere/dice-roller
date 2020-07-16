pipeline {
  agent {
    docker {
      image 'node:current-alpine3.12'
      args '-p 3000:3000'
    }
  }
  environment {
    CI = 'true' 
    HOME = '.'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'sudo apk update'
        sh 'sudo apk add --update nodejs npm'
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