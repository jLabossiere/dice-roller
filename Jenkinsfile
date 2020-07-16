pipeline {
  agent {
    docker {
      image 'node:current-alpine3.12'
      args '-p 3000:3000'
      args '-u 0'
    }
  }
  environment {
    CI = 'true' 
    HOME = '.'
  }

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'apk update'
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