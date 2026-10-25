
pipeline {
    agent any

    options {
        timestamps()
        disableConcurrentBuilds()
        timeout(time: 10, unit: 'MINUTES')
        buildDiscarder(logRotator(numToKeepStr: '20'))
    }

    triggers {
        pollSCM('H/3 * * * *')
    }

    environment {
        SITE_URL = 'https://rohan1510.github.io/portfolio/'
    }

    stages {
        stage('Checkout and verify files') {
            steps {
                sh '''
                    set -eu
                    test -s index.html
                    test -s style.css
                    test -s script.js
                    echo "Required files found."
                '''
            }
        }

        stage('Validate HTML') {
            steps {
                sh '''
                    set -eu
                    docker run --rm \
                      -v "$WORKSPACE:/src:ro" \
                      ghcr.io/validator/validator:latest \
                      vnu --errors-only /src/index.html
                '''
            }
        }

        stage('Check JavaScript syntax') {
            steps {
                sh '''
                    set -eu
                    docker run --rm \
                      -v "$WORKSPACE:/src:ro" \
                      -w /src \
                      node:22-alpine \
                      node --check script.js
                '''
            }
        }

        stage('Basic CSS checks') {
            steps {
                sh '''
                    set -eu
                    test -s style.css
                    grep -q '{' style.css
                    grep -q '}' style.css
                    echo "Basic CSS checks passed."
                '''
            }
        }

        stage('Check live GitHub Pages site') {
            steps {
                sh '''
                    set -eu
                    curl --fail --silent --show-error \
                      --location \
                      --retry 3 \
                      --retry-delay 5 \
                      "$SITE_URL" \
                      -o live-site.html

                    grep -qi '<html' live-site.html
                    echo "Live site returned HTML."
                    rm -f live-site.html
                '''
            }
        }
    }

    post {
        success {
            echo 'Portfolio CI checks passed.'
        }
        failure {
            echo 'A pipeline stage failed. Inspect Console Output.'
        }
        always {
            deleteDir()
        }
    }
}
