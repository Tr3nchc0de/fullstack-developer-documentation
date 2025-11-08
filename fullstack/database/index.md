# Datenbank-Technologien

Datenbanken sind das Herzstück jeder modernen Anwendung. Als Fullstack-Developer müssen Sie verstehen, wie Daten strukturiert, gespeichert und effizient abgerufen werden.

## Datenbanktypen Übersicht

### 🗄️ Relationale Datenbanken (SQL)
- **PostgreSQL** - Fortgeschrittene relationale Datenbank
- **MySQL** - Weit verbreitete open-source Datenbank
- **SQLite** - Eingebettete Datenbank für kleinere Anwendungen
- **Microsoft SQL Server** - Enterprise-Datenbank
- **Oracle** - High-performance Enterprise-Lösung

### 📄 NoSQL-Datenbanken
- **MongoDB** - Dokumentenbasierte Datenbank
- **Redis** - In-Memory Key-Value Store
- **Cassandra** - Spaltenorientierte Datenbank
- **Neo4j** - Graph-Datenbank
- **Elasticsearch** - Such- und Analytics-Engine

### 🔄 ORM/ODM Tools
- **Sequelize** - SQL ORM für Node.js
- **Prisma** - Modernes Database Toolkit
- **Mongoose** - MongoDB ODM für Node.js
- **TypeORM** - TypeScript ORM
- **Knex.js** - SQL Query Builder

## Mein Datenbank-Lernfortschritt

### SQL-Grundlagen
- [ ] **SQL Syntax** - SELECT, INSERT, UPDATE, DELETE
- [ ] **Joins** - INNER, LEFT, RIGHT, FULL OUTER
- [ ] **Indizes** - Performance-Optimierung
- [ ] **Constraints** - Datenintegrität
- [ ] **Stored Procedures** - Serverseitige Logik

### PostgreSQL
- [ ] **Installation & Setup** - Lokale Entwicklungsumgebung
- [ ] **Schema Design** - Tabellenstruktur und Beziehungen
- [ ] **Erweiterte Features** - JSON, Arrays, Extensions
- [ ] **Performance Tuning** - Query-Optimierung
- [ ] **Backup & Recovery** - Datensicherung

### MongoDB
- [ ] **Document Model** - JSON-ähnliche Strukturen
- [ ] **Collections & Queries** - CRUD-Operationen
- [ ] **Aggregation Framework** - Datenverarbeitung
- [ ] **Indexing** - Performance-Optimierung
- [ ] **Replication & Sharding** - Skalierung

### ORM/ODM Integration
- [ ] **Sequelize** - SQL-Modelle in Node.js
- [ ] **Prisma** - Type-safe Database Access
- [ ] **Mongoose** - MongoDB Object Modeling
- [ ] **Migrations** - Schema-Versionierung
- [ ] **Seeds** - Testdaten-Management

## Lernpfad Datenbank-Entwicklung

### Phase 1: SQL-Grundlagen
1. **Relationale Konzepte** - Tabellen, Schlüssel, Beziehungen
2. **Basic SQL** - CRUD-Operationen
3. **PostgreSQL Setup** - Lokale Installation
4. **Schema Design** - Normalisierung

### Phase 2: Erweiterte SQL-Konzepte
1. **Joins & Subqueries** - Komplexe Abfragen
2. **Indexing** - Performance-Optimierung
3. **Transactions** - ACID-Eigenschaften
4. **Views & Triggers** - Erweiterte Features

### Phase 3: NoSQL & Polyglot Persistence
1. **MongoDB Grundlagen** - Document-Model
2. **Redis Caching** - In-Memory Storage
3. **Database Selection** - Richtige DB für Use Case
4. **Hybrid Architectures** - SQL + NoSQL

### Phase 4: Production-Ready
1. **Performance Monitoring** - Query Analysis
2. **Backup Strategies** - Disaster Recovery
3. **Security** - Access Control, Encryption
4. **Scaling** - Replication, Sharding

## Technologien im Detail

### SQL-Datenbanken
- PostgreSQL (Coming Soon) - Enterprise-grade Relational DB
- MySQL (Coming Soon) - Popular Open-source DB
- SQL Grundlagen (Coming Soon) - Core SQL Concepts

### NoSQL-Datenbanken
- MongoDB (Coming Soon) - Document Database
- Redis (Coming Soon) - In-Memory Data Store
- Database Selection Guide (Coming Soon) - Choosing the Right DB

### ORM/ODM Tools
- Sequelize (Coming Soon) - SQL ORM for Node.js
- Prisma (Coming Soon) - Modern Database Toolkit
- Mongoose (Coming Soon) - MongoDB ODM

## Projekte & Praktische Anwendung

### Beginner-Projekte
- [ ] **Blog Database** - Artikel, Kategorien, Kommentare
- [ ] **User Management** - Authentication, Rollen
- [ ] **Inventory System** - Produkte, Kategorien, Lager
- [ ] **Simple CMS** - Content-Verwaltung

### Intermediate-Projekte
- [ ] **E-Commerce Platform** - Produkte, Bestellungen, Payments
- [ ] **Social Media Backend** - Posts, Likes, Followers
- [ ] **Task Management** - Projekte, Tasks, Teams
- [ ] **Analytics Dashboard** - Metriken, Reports

### Advanced-Projekte
- [ ] **Multi-tenant SaaS** - Tenant Isolation
- [ ] **Real-time Analytics** - Time-series Data
- [ ] **Recommendation Engine** - Machine Learning Integration
- [ ] **Distributed System** - Microservices mit eigenen DBs

## Database Design Best Practices

### Schema Design
```sql
-- Normalisierung Beispiel
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE profiles (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    bio TEXT
);

CREATE TABLE posts (
    id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Index für Performance
CREATE INDEX idx_posts_user_id ON posts(user_id);
CREATE INDEX idx_posts_created_at ON posts(created_at DESC);
```

### MongoDB Schema Design
```javascript
// User Schema mit eingebetteten Dokumenten
const userSchema = {
    _id: ObjectId,
    email: String,
    profile: {
        firstName: String,
        lastName: String,
        avatar: String
    },
    posts: [{
        title: String,
        content: String,
        createdAt: Date,
        tags: [String]
    }],
    createdAt: Date
};

// Separate Collections für bessere Skalierung
const userSchema = {
    _id: ObjectId,
    email: String,
    profile: {
        firstName: String,
        lastName: String
    }
};

const postSchema = {
    _id: ObjectId,
    userId: ObjectId,
    title: String,
    content: String,
    createdAt: Date
};
```

## Performance & Optimization

### SQL Query Optimization
```sql
-- Ineffizient
SELECT * FROM posts 
WHERE user_id IN (
    SELECT id FROM users WHERE city = 'Berlin'
);

-- Optimiert mit JOIN
SELECT p.* FROM posts p
INNER JOIN users u ON p.user_id = u.id
WHERE u.city = 'Berlin';

-- Index Usage
EXPLAIN ANALYZE SELECT * FROM posts WHERE user_id = 123;

-- Partial Index
CREATE INDEX idx_active_users ON users(email) 
WHERE active = true;
```

### MongoDB Optimization
```javascript
// Ineffizient - Multiple Queries
const users = await User.find({ city: 'Berlin' });
const userIds = users.map(u => u._id);
const posts = await Post.find({ userId: { $in: userIds } });

// Optimiert - Aggregation Pipeline
const result = await User.aggregate([
    { $match: { city: 'Berlin' } },
    {
        $lookup: {
            from: 'posts',
            localField: '_id',
            foreignField: 'userId',
            as: 'posts'
        }
    }
]);

// Index für Performance
db.posts.createIndex({ userId: 1, createdAt: -1 });
```

## Security Best Practices

### SQL Injection Prevention
```javascript
// Unsicher - SQL Injection möglich
const query = `SELECT * FROM users WHERE email = '${email}'`;

// Sicher - Prepared Statements
const query = 'SELECT * FROM users WHERE email = $1';
const result = await client.query(query, [email]);

// ORM - Automatischer Schutz
const user = await User.findOne({ where: { email } });
```

### Access Control
```sql
-- Role-based Access Control
CREATE ROLE read_only;
GRANT SELECT ON ALL TABLES IN SCHEMA public TO read_only;

CREATE ROLE api_user;
GRANT SELECT, INSERT, UPDATE ON users, posts TO api_user;

-- User Management
CREATE USER app_backend WITH PASSWORD 'secure_password';
GRANT api_user TO app_backend;
```

## Tools & Development

### Database Administration
- **pgAdmin** - PostgreSQL Management
- **MongoDB Compass** - MongoDB GUI
- **DBeaver** - Universal Database Tool
- **TablePlus** - Modern Database Client

### CLI Tools
- **psql** - PostgreSQL Command Line
- **mongosh** - MongoDB Shell
- **redis-cli** - Redis Command Line
- **mysql** - MySQL Command Line

### Migration Tools
- **Flyway** - Database Migration Tool
- **Liquibase** - Database Change Management
- **Prisma Migrate** - Schema Migration
- **Sequelize CLI** - Migration Management

## Nächste Schritte

Nach Datenbank-Grundlagen:
- [Backend Development](../backend/index.md) - API Integration
- [DevOps](../devops/index.md) - Database Deployment
- Performance (Coming Soon) - Database Optimization
- [Security](../security/index.md) - Data Protection