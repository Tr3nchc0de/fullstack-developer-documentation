# Node.js Grundlagen

Node.js ist eine JavaScript-Runtime, die auf der V8 JavaScript-Engine von Chrome basiert und es ermöglicht, JavaScript auf dem Server auszuführen. Es ist eine der beliebtesten Technologien für Backend-Entwicklung.

## Was ist Node.js?

Node.js ist eine open-source, plattformübergreifende JavaScript-Runtime-Umgebung, die JavaScript-Code außerhalb eines Webbrowsers ausführt. Es verwendet ein event-driven, non-blocking I/O-Modell, das es leichtgewichtig und effizient macht.

### Warum Node.js?
- **JavaScript überall** - Eine Sprache für Frontend und Backend
- **Performance** - V8 Engine und Non-blocking I/O
- **NPM Ecosystem** - Größtes Package-Repository
- **Rapid Development** - Schnelle Prototyping-Möglichkeiten
- **Real-time Applications** - Ideal für Live-Apps

## Node.js Kernkonzepte

### Event-Driven Architecture
```javascript
const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();

myEmitter.on('event', () => {
    console.log('Ein Event wurde ausgelöst!');
});

myEmitter.emit('event');
```

### Non-blocking I/O
```javascript
const fs = require('fs');

// Asynchronous (Non-blocking)
fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

console.log('Diese Zeile wird zuerst ausgeführt!');

// Synchronous (Blocking)
try {
    const data = fs.readFileSync('file.txt', 'utf8');
    console.log(data);
} catch (err) {
    console.error(err);
}
```

### Modules System
```javascript
// module.js
const greeting = 'Hello World';

function sayHello(name) {
    return `${greeting}, ${name}!`;
}

module.exports = {
    greeting,
    sayHello
};

// app.js
const { sayHello } = require('./module');
console.log(sayHello('Node.js'));

// ES6 Modules (mit --experimental-modules)
import { sayHello } from './module.js';
```

## Mein Node.js Lernfortschritt

### Grundlagen
- [ ] Node.js Installation und Setup
- [ ] JavaScript auf dem Server verstehen
- [ ] Module System (CommonJS & ES6)
- [ ] Event-Driven Programming
- [ ] File System Operations

### Core Modules
- [ ] **fs** - File System Operationen
- [ ] **http** - HTTP Server/Client
- [ ] **path** - File Path Utilities
- [ ] **os** - Operating System Utilities
- [ ] **crypto** - Cryptographic Functionality

### Asynchrone Programmierung
- [ ] Callbacks verstehen
- [ ] Promises verwenden
- [ ] Async/Await beherrschen
- [ ] Error Handling implementieren
- [ ] Event Loop verstehen

## Core Modules im Detail

### File System (fs)
```javascript
const fs = require('fs').promises;

// Datei lesen
async function readFile() {
    try {
        const data = await fs.readFile('example.txt', 'utf8');
        console.log(data);
    } catch (error) {
        console.error('Fehler beim Lesen:', error);
    }
}

// Datei schreiben
async function writeFile() {
    try {
        await fs.writeFile('output.txt', 'Hello Node.js!');
        console.log('Datei wurde geschrieben');
    } catch (error) {
        console.error('Fehler beim Schreiben:', error);
    }
}
```

### HTTP Server
```javascript
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const method = req.method;

    // CORS Headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/json');

    if (path === '/' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ message: 'Hello Node.js!' }));
    } else if (path === '/api/users' && method === 'GET') {
        res.statusCode = 200;
        res.end(JSON.stringify({ users: [] }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Not Found' }));
    }
});

server.listen(3000, () => {
    console.log('Server läuft auf http://localhost:3000');
});
```

### Path Utilities
```javascript
const path = require('path');

console.log(path.join('/users', 'john', 'documents')); // /users/john/documents
console.log(path.extname('file.txt')); // .txt
console.log(path.basename('/path/to/file.txt')); // file.txt
console.log(path.dirname('/path/to/file.txt')); // /path/to
```

## NPM (Node Package Manager)

### Package.json
```json
{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "My Node.js Application",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.0",
    "mongoose": "^6.0.0"
  },
  "devDependencies": {
    "nodemon": "^2.0.0",
    "jest": "^27.0.0"
  }
}
```

### Wichtige NPM Commands
```bash
# Projekt initialisieren
npm init
npm init -y  # Mit Standardwerten

# Packages installieren
npm install package-name
npm install -D package-name  # Development Dependency
npm install -g package-name  # Global Installation

# Package-Lock und Updates
npm ci  # Clean Install aus package-lock.json
npm update  # Packages aktualisieren
npm audit  # Security Vulnerabilities checken
```

## Wichtige Node.js Packages

### Utility Libraries
- **lodash** - Utility Functions
- **moment/dayjs** - Date Manipulation
- **uuid** - Unique Identifier Generation
- **dotenv** - Environment Variables

### Web Development
- **express** - Web Framework
- **cors** - Cross-Origin Resource Sharing
- **helmet** - Security Headers
- **compression** - Response Compression

### Database
- **mongoose** - MongoDB ODM
- **sequelize** - SQL ORM
- **redis** - Redis Client
- **pg** - PostgreSQL Client

### Development Tools
- **nodemon** - Auto-restart Development Server
- **jest** - Testing Framework
- **eslint** - Code Linting
- **prettier** - Code Formatting

## Projekte & Übungen

### Beginner-Projekte
- [ ] **File System Explorer** - Directory Listing
- [ ] **Simple HTTP Server** - Static File Serving
- [ ] **CLI Tool** - Command Line Application
- [ ] **Log File Parser** - Text Processing

### Intermediate-Projekte
- [ ] **REST API** - CRUD Operations
- [ ] **File Upload Service** - Multipart File Handling
- [ ] **WebSocket Chat** - Real-time Communication
- [ ] **Email Service** - SMTP Integration

### Advanced-Projekte
- [ ] **Task Queue** - Background Job Processing
- [ ] **Streaming Service** - Large File Processing
- [ ] **Microservice** - Service Communication
- [ ] **CLI Framework** - Reusable Command Line Tool

## Best Practices

### Error Handling
```javascript
// Promise Error Handling
async function safeAsyncOperation() {
    try {
        const result = await riskyOperation();
        return result;
    } catch (error) {
        console.error('Operation failed:', error);
        throw new Error('Service unavailable');
    }
}

// Unhandled Promise Rejections
process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    process.exit(1);
});

// Uncaught Exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    process.exit(1);
});
```

### Environment Configuration
```javascript
// .env file
PORT=3000
DB_URL=mongodb://localhost:27017/myapp
JWT_SECRET=your-secret-key

// app.js
require('dotenv').config();

const port = process.env.PORT || 3000;
const dbUrl = process.env.DB_URL;
const jwtSecret = process.env.JWT_SECRET;
```

### Logging
```javascript
const fs = require('fs');
const path = require('path');

class Logger {
    static log(level, message) {
        const timestamp = new Date().toISOString();
        const logEntry = `${timestamp} [${level}] ${message}\n`;
        
        console.log(logEntry.trim());
        
        const logFile = path.join(__dirname, 'logs', 'app.log');
        fs.appendFileSync(logFile, logEntry);
    }
    
    static info(message) { this.log('INFO', message); }
    static error(message) { this.log('ERROR', message); }
    static warn(message) { this.log('WARN', message); }
}
```

## Performance & Monitoring

### Profiling
```javascript
// Performance Measuring
console.time('operation');
// ... some operation
console.timeEnd('operation');

// Memory Usage
const used = process.memoryUsage();
console.log('Memory Usage:', {
    rss: Math.round(used.rss / 1024 / 1024) + ' MB',
    heapTotal: Math.round(used.heapTotal / 1024 / 1024) + ' MB',
    heapUsed: Math.round(used.heapUsed / 1024 / 1024) + ' MB'
});
```

### Clustering
```javascript
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);
    
    // Fork workers
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }
    
    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} died`);
        cluster.fork();
    });
} else {
    // Workers share the same port
    http.createServer((req, res) => {
        res.writeHead(200);
        res.end('Hello from worker ' + process.pid);
    }).listen(8000);
    
    console.log(`Worker ${process.pid} started`);
}
```

## Nächste Schritte

Nach Node.js Grundlagen:
- Express.js Framework (Coming Soon) - Web Framework für Node.js
- [Database Integration](../database/index.md) - MongoDB und SQL Datenbanken
- Testing Node.js (Coming Soon) - Unit und Integration Tests
- Node.js Security (Coming Soon) - Sicherheit in Node.js Apps