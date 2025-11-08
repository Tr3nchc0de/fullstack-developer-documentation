# DevOps & Deployment

DevOps verbindet Software-Entwicklung (Development) und IT-Betrieb (Operations) und ist essentiell für moderne Fullstack-Developer. Es umfasst Automatisierung, Deployment, Monitoring und Infrastructure Management.

## Kernbereiche von DevOps

### 🔄 Version Control & Collaboration
- **Git** - Distributed Version Control System
- **GitHub/GitLab** - Code Hosting und Collaboration
- **Branching Strategies** - GitFlow, GitHub Flow
- **Code Review** - Pull/Merge Requests

### 🚀 CI/CD (Continuous Integration/Deployment)
- **GitHub Actions** - GitHub-native CI/CD
- **GitLab CI** - Integrated CI/CD Pipeline
- **Jenkins** - Open-source Automation Server
- **CircleCI** - Cloud-based CI/CD Platform

### 📦 Containerization
- **Docker** - Application Containerization
- **Docker Compose** - Multi-container Applications
- **Kubernetes** - Container Orchestration
- **Podman** - Daemonless Container Engine

### ☁️ Cloud Platforms
- **AWS** - Amazon Web Services
- **Google Cloud Platform** - Google's Cloud Services
- **Microsoft Azure** - Microsoft Cloud Platform
- **DigitalOcean** - Developer-friendly Cloud
- **Vercel/Netlify** - Frontend-focused Hosting

### 📊 Monitoring & Logging
- **Prometheus** - Monitoring und Alerting
- **Grafana** - Visualisierung und Dashboards
- **ELK Stack** - Elasticsearch, Logstash, Kibana
- **New Relic** - Application Performance Monitoring

## Mein DevOps-Lernfortschritt

### Version Control
- [ ] **Git Basics** - add, commit, push, pull
- [ ] **Branching** - create, merge, rebase
- [ ] **Collaboration** - Pull Requests, Code Reviews
- [ ] **Git Workflows** - GitFlow, GitHub Flow
- [ ] **Advanced Git** - cherry-pick, stash, hooks

### Containerization
- [ ] **Docker Basics** - Images, Containers, Dockerfile
- [ ] **Docker Compose** - Multi-service Applications
- [ ] **Container Optimization** - Image Size, Layers
- [ ] **Docker Registry** - Image Storage und Distribution
- [ ] **Kubernetes Basics** - Pods, Services, Deployments

### CI/CD Pipelines
- [ ] **GitHub Actions** - Workflow Automation
- [ ] **Automated Testing** - Unit, Integration, E2E
- [ ] **Build Automation** - Compile, Bundle, Optimize
- [ ] **Deployment Automation** - Staging, Production
- [ ] **Environment Management** - Dev, Test, Prod

### Cloud Deployment
- [ ] **AWS Basics** - EC2, S3, RDS
- [ ] **Serverless** - Lambda, Vercel Functions
- [ ] **CDN** - CloudFront, Cloudflare
- [ ] **Domain Management** - DNS, SSL Certificates
- [ ] **Monitoring** - CloudWatch, Application Insights

## Lernpfad DevOps

### Phase 1: Grundlagen
1. **Git mastern** - Version Control Workflows
2. **Docker verstehen** - Containerization Basics
3. **Erste Deployments** - Statische Sites deployen
4. **Basic Monitoring** - Logs und Metrics

### Phase 2: Automatisierung
1. **CI/CD Pipeline** - Automated Testing und Deployment
2. **Infrastructure as Code** - Terraform, CloudFormation
3. **Environment Management** - Dev, Staging, Production
4. **Security Integration** - Vulnerability Scanning

### Phase 3: Production-Ready
1. **Kubernetes** - Container Orchestration
2. **Advanced Monitoring** - APM, Distributed Tracing
3. **Incident Response** - Alerting, On-call
4. **Capacity Planning** - Scaling, Performance

### Phase 4: Platform Engineering
1. **Multi-cloud Strategies** - Vendor Independence
2. **Service Mesh** - Microservices Communication
3. **GitOps** - Git-driven Operations
4. **Platform Automation** - Self-service Infrastructure

## Technologien im Detail

### Version Control & Git
- Git Essentials (Coming Soon) - Core Version Control
- GitHub Workflows (Coming Soon) - Collaboration und CI/CD
- Advanced Git (Coming Soon) - Professionelle Workflows

### Containerization
- Docker Fundamentals (Coming Soon) - Container Basics
- Docker Compose (Coming Soon) - Multi-service Apps
- Kubernetes Basics (Coming Soon) - Container Orchestration

### CI/CD Pipelines
- GitHub Actions (Coming Soon) - Workflow Automation
- Jenkins (Coming Soon) - Self-hosted CI/CD
- Deployment Strategies (Coming Soon) - Blue-Green, Canary

### Cloud Platforms
- AWS Essentials (Coming Soon) - Amazon Web Services
- Vercel Deployment (Coming Soon) - Frontend Hosting
- DigitalOcean (Coming Soon) - VPS Hosting

## Projekte & Hands-on Learning

### Beginner-Projekte
- [ ] **Static Site Deployment** - HTML/CSS auf Netlify
- [ ] **Docker Tutorial App** - Containerize Simple App
- [ ] **Git Collaboration** - Team-basiertes Projekt
- [ ] **Basic CI/CD** - Automated Tests und Deployment

### Intermediate-Projekte
- [ ] **Full-stack App Deployment** - React + Node.js + Database
- [ ] **Multi-environment Setup** - Dev, Staging, Production
- [ ] **Monitoring Dashboard** - Application Metrics
- [ ] **Infrastructure as Code** - Terraform/CDK Setup

### Advanced-Projekte
- [ ] **Microservices Platform** - Kubernetes Deployment
- [ ] **Multi-cloud Architecture** - Vendor-independent Setup
- [ ] **Disaster Recovery** - Backup und Restore Procedures
- [ ] **Auto-scaling System** - Load-based Scaling

## Docker Essentials

### Dockerfile Beispiel
```dockerfile
# Multi-stage Build für Node.js App
FROM node:18-alpine AS builder

WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS runtime

# Security: Non-root User
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nextjs -u 1001

WORKDIR /app

# Copy built application
COPY --from=builder /app/node_modules ./node_modules
COPY --chown=nextjs:nodejs . .

USER nextjs

EXPOSE 3000

CMD ["npm", "start"]
```

### Docker Compose Setup
```yaml
version: '3.8'

services:
  web:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DATABASE_URL=postgresql://user:password@db:5432/myapp
    depends_on:
      - db
      - redis

  db:
    image: postgres:15-alpine
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data
    ports:
      - "5432:5432"

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

## CI/CD mit GitHub Actions

### Basic Workflow
```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:15
        env:
          POSTGRES_PASSWORD: postgres
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to Production
      uses: vercel/action@v20
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
        vercel-args: '--prod'
```

## Cloud Deployment Strategien

### AWS Deployment
```bash
# AWS CLI Setup
aws configure

# S3 Static Hosting
aws s3 sync ./build s3://my-website-bucket --delete
aws cloudfront create-invalidation --distribution-id XXXXX --paths "/*"

# EC2 Deployment
# 1. Launch EC2 Instance
# 2. Install Docker
# 3. Deploy Container
docker run -d -p 80:3000 my-app:latest
```

### Serverless Deployment
```javascript
// Vercel Serverless Function
export default function handler(req, res) {
    res.status(200).json({ message: 'Hello from Serverless!' });
}

// AWS Lambda mit Serverless Framework
module.exports.hello = async (event) => {
    return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Hello from Lambda!' })
    };
};
```

## Monitoring & Observability

### Application Monitoring
```javascript
// Express.js mit Prometheus Metrics
const promClient = require('prom-client');

const httpDuration = new promClient.Histogram({
    name: 'http_request_duration_seconds',
    help: 'Duration of HTTP requests in seconds',
    labelNames: ['method', 'status_code', 'route']
});

app.use((req, res, next) => {
    const start = Date.now();
    
    res.on('finish', () => {
        const duration = (Date.now() - start) / 1000;
        httpDuration
            .labels(req.method, res.statusCode, req.route?.path || req.path)
            .observe(duration);
    });
    
    next();
});

// Health Check Endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});
```

### Log Aggregation
```javascript
const winston = require('winston');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.errors({ stack: true }),
        winston.format.json()
    ),
    transports: [
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
        new winston.transports.File({ filename: 'combined.log' }),
        new winston.transports.Console({
            format: winston.format.simple()
        })
    ]
});
```

## Security in DevOps

### Environment Variables
```bash
# .env File (nie in Git committen!)
DATABASE_URL=postgresql://user:pass@localhost:5432/db
JWT_SECRET=your-super-secret-key
API_KEY=your-api-key

# Docker Secrets
echo "my-secret" | docker secret create db_password -

# Kubernetes Secrets
kubectl create secret generic app-secret \
    --from-literal=database-url="postgresql://..." \
    --from-literal=jwt-secret="..."
```

### Container Security
```dockerfile
# Security Best Practices
FROM node:18-alpine  # Use specific versions
RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001  # Non-root user

# Update packages
RUN apk update && apk upgrade

# Use .dockerignore
# node_modules
# .git
# .env
# Dockerfile
```

## Best Practices

### 12-Factor App Principles
1. **Codebase** - One codebase per app
2. **Dependencies** - Explicitly declare dependencies
3. **Config** - Store config in environment
4. **Backing Services** - Treat as attached resources
5. **Build, Release, Run** - Separate stages
6. **Processes** - Stateless processes
7. **Port Binding** - Export services via port binding
8. **Concurrency** - Scale out via process model
9. **Disposability** - Fast startup and shutdown
10. **Dev/Prod Parity** - Keep environments similar
11. **Logs** - Treat logs as event streams
12. **Admin Processes** - Run as one-off processes

### Infrastructure as Code
```terraform
# Terraform AWS Example
provider "aws" {
  region = "eu-central-1"
}

resource "aws_instance" "web" {
  ami           = "ami-0c02fb55956c7d316"
  instance_type = "t3.micro"
  
  tags = {
    Name = "WebServer"
    Environment = "production"
  }
}

resource "aws_s3_bucket" "static_assets" {
  bucket = "my-app-static-assets"
}
```

## Nächste Schritte

Nach DevOps-Grundlagen:
- [Security](../security/index.md) - Application Security
- Performance (Coming Soon) - Optimization und Monitoring
- [Testing](../testing/index.md) - Test Automation
- Project Management (Coming Soon) - Agile Practices