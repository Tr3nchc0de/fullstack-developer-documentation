# Security & Application Security

Security ist ein kritischer Aspekt der Fullstack-Entwicklung. Jede Schicht der Anwendung - vom Frontend bis zur Datenbank - muss gegen potenzielle Bedrohungen geschützt werden.

## Security Fundamentals

### 🔒 Kernprinzipien
- **Least Privilege** - Minimale notwendige Berechtigungen
- **Defense in Depth** - Mehrschichtige Sicherheit
- **Fail Secure** - Sichere Standardwerte bei Fehlern
- **Security by Design** - Sicherheit von Anfang an
- **Zero Trust** - Niemals vertrauen, immer verifizieren

### 🛡️ OWASP Top 10 (2021)
1. **Broken Access Control** - Fehlende Zugriffskontrolle
2. **Cryptographic Failures** - Kryptographische Schwächen
3. **Injection** - SQL, NoSQL, OS Command Injection
4. **Insecure Design** - Unsicheres Design
5. **Security Misconfiguration** - Fehlkonfiguration
6. **Vulnerable Components** - Verwundbare Komponenten
7. **Identification/Authentication Failures** - Auth-Schwächen
8. **Software/Data Integrity Failures** - Integritätsfehler
9. **Security Logging/Monitoring Failures** - Überwachungslücken
10. **Server-Side Request Forgery (SSRF)** - SSRF-Angriffe

## Frontend Security

### Cross-Site Scripting (XSS) Prevention
```javascript
// BAD: Vulnerable to XSS
function displayUserInput(input) {
    document.getElementById('output').innerHTML = input;
}

// GOOD: Properly escaped
function displayUserInput(input) {
    const element = document.getElementById('output');
    element.textContent = input; // Automatically escapes
}

// React: Built-in XSS protection
function UserProfile({ userName }) {
    return <div>{userName}</div>; // React escapes by default
}

// For HTML content, use dangerouslySetInnerHTML carefully
function TrustedContent({ htmlContent }) {
    // Only use with sanitized content!
    return <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(htmlContent) }} />;
}
```

### Content Security Policy (CSP)
```html
<!-- Basic CSP Header -->
<meta http-equiv="Content-Security-Policy" 
      content="default-src 'self'; 
               script-src 'self' https://trusted-cdn.com;
               style-src 'self' 'unsafe-inline';
               img-src 'self' data: https:;
               connect-src 'self' https://api.example.com;">

<!-- Express.js CSP Middleware -->
<script>
const helmet = require('helmet');

app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            scriptSrc: ["'self'", "https://trusted-cdn.com"],
            styleSrc: ["'self'", "'unsafe-inline'"],
            imgSrc: ["'self'", "data:", "https:"],
            connectSrc: ["'self'", "https://api.example.com"]
        }
    }
}));
</script>
```

### Secure Authentication Frontend
```javascript
// Secure Token Storage
class AuthService {
    constructor() {
        this.tokenKey = 'auth_token';
    }
    
    // Store token securely (consider httpOnly cookies for production)
    setToken(token) {
        // Use sessionStorage for temporary sessions
        sessionStorage.setItem(this.tokenKey, token);
    }
    
    getToken() {
        return sessionStorage.getItem(this.tokenKey);
    }
    
    clearToken() {
        sessionStorage.removeItem(this.tokenKey);
    }
    
    // Automatic logout on token expiration
    isTokenExpired(token) {
        try {
            const decoded = jwt_decode(token);
            return decoded.exp < Date.now() / 1000;
        } catch {
            return true;
        }
    }
    
    // Secure API requests
    async makeAuthenticatedRequest(url, options = {}) {
        const token = this.getToken();
        
        if (!token || this.isTokenExpired(token)) {
            this.logout();
            throw new Error('Authentication required');
        }
        
        return fetch(url, {
            ...options,
            headers: {
                ...options.headers,
                'Authorization': `Bearer ${token}`
            }
        });
    }
}
```

## Backend Security

### Input Validation & Sanitization
```javascript
const validator = require('validator');
const xss = require('xss');

// Input validation middleware
function validateUserInput(req, res, next) {
    const { email, name, age } = req.body;
    
    // Email validation
    if (!email || !validator.isEmail(email)) {
        return res.status(400).json({ error: 'Valid email required' });
    }
    
    // Name validation and sanitization
    if (!name || !validator.isLength(name, { min: 2, max: 50 })) {
        return res.status(400).json({ error: 'Name must be 2-50 characters' });
    }
    
    // Sanitize HTML input
    req.body.name = xss(name);
    
    // Age validation
    if (age && !validator.isInt(age.toString(), { min: 18, max: 120 })) {
        return res.status(400).json({ error: 'Age must be between 18 and 120' });
    }
    
    next();
}

app.post('/api/users', validateUserInput, createUser);
```

### SQL Injection Prevention
```javascript
const { Pool } = require('pg');
const pool = new Pool();

// BAD: Vulnerable to SQL injection
async function getUserByEmail(email) {
    const query = `SELECT * FROM users WHERE email = '${email}'`;
    return await pool.query(query);
}

// GOOD: Using parameterized queries
async function getUserByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1';
    return await pool.query(query, [email]);
}

// With ORM (Sequelize example)
async function getUserByEmail(email) {
    return await User.findOne({
        where: { email } // Sequelize automatically sanitizes
    });
}
```

### Authentication & Authorization
```javascript
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Password hashing
async function hashPassword(password) {
    const saltRounds = 12;
    return await bcrypt.hash(password, saltRounds);
}

// Password verification
async function verifyPassword(password, hash) {
    return await bcrypt.compare(password, hash);
}

// JWT token generation
function generateToken(userId, roles = []) {
    return jwt.sign(
        { 
            userId, 
            roles,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + (60 * 60 * 24) // 24 hours
        },
        process.env.JWT_SECRET,
        { algorithm: 'HS256' }
    );
}

// JWT middleware
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    
    if (!token) {
        return res.status(401).json({ error: 'Access token required' });
    }
    
    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Invalid or expired token' });
        }
        req.user = user;
        next();
    });
}

// Authorization middleware
function requireRole(roles) {
    return (req, res, next) => {
        const userRoles = req.user.roles || [];
        const hasRole = roles.some(role => userRoles.includes(role));
        
        if (!hasRole) {
            return res.status(403).json({ error: 'Insufficient permissions' });
        }
        next();
    };
}

// Usage
app.get('/api/admin/users', 
    authenticateToken, 
    requireRole(['admin']), 
    getUsers
);
```

### Rate Limiting
```javascript
const rateLimit = require('express-rate-limit');
const RedisStore = require('rate-limit-redis');
const redis = require('redis');

const redisClient = redis.createClient();

// General rate limiting
const generalLimiter = rateLimit({
    store: new RedisStore({
        client: redisClient,
        prefix: 'rl:general:'
    }),
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
    message: 'Too many requests from this IP',
    standardHeaders: true,
    legacyHeaders: false
});

// Strict rate limiting for auth endpoints
const authLimiter = rateLimit({
    store: new RedisStore({
        client: redisClient,
        prefix: 'rl:auth:'
    }),
    windowMs: 15 * 60 * 1000,
    max: 5, // limit each IP to 5 requests per windowMs
    message: 'Too many authentication attempts',
    skipSuccessfulRequests: true
});

app.use('/api/', generalLimiter);
app.use('/api/auth/', authLimiter);
```

## Database Security

### Secure Database Configuration
```javascript
// PostgreSQL connection with SSL
const { Pool } = require('pg');

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        rejectUnauthorized: false, // Only for development
        ca: fs.readFileSync('server-ca.pem').toString(),
        key: fs.readFileSync('client-key.pem').toString(),
        cert: fs.readFileSync('client-cert.pem').toString()
    },
    // Connection pool security
    max: 20,
    idleTimeoutMillis: 30000,
    connectionTimeoutMillis: 2000
});
```

### Data Encryption
```javascript
const crypto = require('crypto');

class DataEncryption {
    constructor() {
        this.algorithm = 'aes-256-gcm';
        this.secretKey = crypto.scryptSync(process.env.ENCRYPTION_PASSWORD, 'salt', 32);
    }
    
    encrypt(text) {
        const iv = crypto.randomBytes(16);
        const cipher = crypto.createCipher(this.algorithm, this.secretKey, iv);
        
        let encrypted = cipher.update(text, 'utf8', 'hex');
        encrypted += cipher.final('hex');
        
        const authTag = cipher.getAuthTag();
        
        return {
            encrypted,
            iv: iv.toString('hex'),
            authTag: authTag.toString('hex')
        };
    }
    
    decrypt(encryptedData) {
        const { encrypted, iv, authTag } = encryptedData;
        
        const decipher = crypto.createDecipher(
            this.algorithm, 
            this.secretKey, 
            Buffer.from(iv, 'hex')
        );
        
        decipher.setAuthTag(Buffer.from(authTag, 'hex'));
        
        let decrypted = decipher.update(encrypted, 'hex', 'utf8');
        decrypted += decipher.final('utf8');
        
        return decrypted;
    }
}

// Usage in database model
class User {
    static async create(userData) {
        const encryption = new DataEncryption();
        
        // Encrypt sensitive data
        const encryptedSSN = encryption.encrypt(userData.ssn);
        
        return await db.User.create({
            ...userData,
            ssn: JSON.stringify(encryptedSSN),
            password: await bcrypt.hash(userData.password, 12)
        });
    }
}
```

## Environment & Configuration Security

### Secure Environment Variables
```bash
# .env (never commit to version control)
NODE_ENV=production
JWT_SECRET=your-super-secret-jwt-key-min-32-chars
DB_PASSWORD=complex-database-password
ENCRYPTION_PASSWORD=encryption-key-for-sensitive-data
API_KEY=third-party-api-key

# Use different secrets for different environments
JWT_SECRET_DEV=dev-jwt-secret
JWT_SECRET_PROD=prod-jwt-secret
JWT_SECRET_TEST=test-jwt-secret
```

```javascript
// Secure configuration management
class Config {
    constructor() {
        this.env = process.env.NODE_ENV || 'development';
        this.validateEnvironment();
    }
    
    validateEnvironment() {
        const required = ['JWT_SECRET', 'DB_PASSWORD'];
        const missing = required.filter(key => !process.env[key]);
        
        if (missing.length > 0) {
            throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
        }
        
        // Validate JWT secret strength
        if (process.env.JWT_SECRET.length < 32) {
            throw new Error('JWT_SECRET must be at least 32 characters long');
        }
    }
    
    get jwtSecret() {
        return process.env.JWT_SECRET;
    }
    
    get dbConfig() {
        return {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            username: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
            ssl: this.env === 'production'
        };
    }
}
```

### Security Headers
```javascript
const helmet = require('helmet');

app.use(helmet({
    // Content Security Policy
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com"],
            scriptSrc: ["'self'"],
            imgSrc: ["'self'", "data:", "https:"]
        }
    },
    
    // HTTP Strict Transport Security
    hsts: {
        maxAge: 31536000,
        includeSubDomains: true,
        preload: true
    },
    
    // X-Frame-Options
    frameguard: { action: 'deny' },
    
    // X-Content-Type-Options
    noSniff: true,
    
    // Referrer Policy
    referrerPolicy: { policy: 'same-origin' }
}));

// CORS configuration
const cors = require('cors');

app.use(cors({
    origin: process.env.ALLOWED_ORIGINS?.split(',') || 'http://localhost:3000',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
```

## Security Testing

### Automated Security Scanning
```javascript
// package.json
{
    "scripts": {
        "security-audit": "npm audit",
        "security-fix": "npm audit fix",
        "snyk-test": "snyk test",
        "snyk-monitor": "snyk monitor"
    },
    "devDependencies": {
        "snyk": "^1.0.0"
    }
}
```

### Penetration Testing
```javascript
// Security test with Jest
const request = require('supertest');
const app = require('../app');

describe('Security Tests', () => {
    describe('XSS Protection', () => {
        test('should sanitize script tags in input', async () => {
            const maliciousInput = '<script>alert("xss")</script>';
            
            const response = await request(app)
                .post('/api/comments')
                .send({ content: maliciousInput })
                .expect(201);
            
            expect(response.body.content).not.toContain('<script>');
            expect(response.body.content).toContain('&lt;script&gt;');
        });
    });
    
    describe('SQL Injection Protection', () => {
        test('should prevent SQL injection in login', async () => {
            const sqlInjection = "'; DROP TABLE users; --";
            
            const response = await request(app)
                .post('/api/auth/login')
                .send({
                    email: sqlInjection,
                    password: 'password'
                })
                .expect(400);
            
            expect(response.body.error).toBeDefined();
        });
    });
    
    describe('Rate Limiting', () => {
        test('should rate limit excessive requests', async () => {
            const requests = Array(10).fill().map(() =>
                request(app).post('/api/auth/login').send({
                    email: 'test@example.com',
                    password: 'wrong'
                })
            );
            
            const responses = await Promise.all(requests);
            const tooManyRequests = responses.filter(r => r.status === 429);
            
            expect(tooManyRequests.length).toBeGreaterThan(0);
        });
    });
});
```

## Mein Security-Lernfortschritt

### Grundlagen
- [ ] **OWASP Top 10** - Häufigste Sicherheitslücken verstehen
- [ ] **Authentication** - Sichere Anmeldung implementieren
- [ ] **Authorization** - Rollenbasierte Zugriffskontrolle
- [ ] **Input Validation** - Eingaben validieren und sanitisieren
- [ ] **HTTPS/TLS** - Verschlüsselte Kommunikation

### Frontend Security
- [ ] **XSS Prevention** - Cross-Site Scripting verhindern
- [ ] **CSRF Protection** - Cross-Site Request Forgery
- [ ] **CSP Implementation** - Content Security Policy
- [ ] **Secure Storage** - Token und Daten sicher speichern
- [ ] **SRI** - Subresource Integrity für CDN

### Backend Security
- [ ] **SQL Injection** - Datenbank-Angriffe verhindern
- [ ] **Rate Limiting** - DoS-Angriffe begrenzen
- [ ] **Security Headers** - HTTP-Sicherheitsheader
- [ ] **Session Management** - Sichere Session-Handling
- [ ] **API Security** - REST/GraphQL absichern

### Advanced Security
- [ ] **Penetration Testing** - Sicherheitstests durchführen
- [ ] **Security Monitoring** - Angriffe erkennen
- [ ] **Incident Response** - Sicherheitsvorfälle behandeln
- [ ] **Compliance** - GDPR, SOX, HIPAA
- [ ] **Threat Modeling** - Bedrohungsanalyse

## Security Tools

### Development Tools
- **Snyk** - Vulnerability Scanning
- **OWASP ZAP** - Security Testing
- **Bandit** - Python Security Linter
- **ESLint Security** - JavaScript Security Rules

### Monitoring Tools
- **Sentry** - Error Tracking mit Security Context
- **Splunk** - Security Information Management
- **Sumo Logic** - Cloud Security Monitoring
- **AWS GuardDuty** - Threat Detection

## Nächste Schritte

Nach Security-Grundlagen:
- Testing Security (Coming Soon) - Security Testing Strategies
- DevOps Security (Coming Soon) - Secure CI/CD Pipelines
- Compliance (Coming Soon) - Regulatory Requirements
- Incident Response (Coming Soon) - Security Incident Handling