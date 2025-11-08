# Testing & Quality Assurance

Testing ist ein kritischer Aspekt der Softwareentwicklung, der Qualität, Zuverlässigkeit und Wartbarkeit von Anwendungen gewährleistet. Als Fullstack-Developer müssen Sie verschiedene Testing-Strategien und -Tools beherrschen.

## Testing-Pyramide

### 🔺 Unit Tests (Basis)
- **Umfang:** Einzelne Funktionen/Methoden
- **Geschwindigkeit:** Sehr schnell
- **Isolation:** Komplett isoliert
- **Anzahl:** Viele (60-70%)

### 🔺 Integration Tests (Mitte)
- **Umfang:** Komponenten-Interaktionen
- **Geschwindigkeit:** Mittel
- **Isolation:** Teilweise isoliert
- **Anzahl:** Mittel (20-30%)

### 🔺 End-to-End Tests (Spitze)
- **Umfang:** Vollständige User Journeys
- **Geschwindigkeit:** Langsam
- **Isolation:** Reale Umgebung
- **Anzahl:** Wenige (5-10%)

## Testing-Strategien

### Frontend Testing
- **Component Testing** - React/Vue Component Tests
- **Visual Regression** - Screenshot Comparisons
- **Accessibility Testing** - A11y Compliance
- **Cross-browser Testing** - Browser Compatibility

### Backend Testing
- **API Testing** - HTTP Endpoint Testing
- **Database Testing** - Data Layer Validation
- **Load Testing** - Performance unter Last
- **Security Testing** - Vulnerability Assessment

### Full-stack Testing
- **Integration Testing** - Frontend ↔ Backend
- **User Journey Testing** - Complete Workflows
- **Contract Testing** - API Contract Validation
- **Smoke Testing** - Basic Functionality

## Mein Testing-Lernfortschritt

### Testing-Grundlagen
- [ ] **Testing-Konzepte** - Unit, Integration, E2E
- [ ] **TDD/BDD** - Test-Driven Development
- [ ] **Test Patterns** - AAA, Given-When-Then
- [ ] **Mocking/Stubbing** - Test Doubles
- [ ] **Code Coverage** - Metrics und Tools

### Frontend Testing
- [ ] **Jest** - JavaScript Testing Framework
- [ ] **React Testing Library** - Component Testing
- [ ] **Cypress** - E2E Testing Framework
- [ ] **Playwright** - Modern E2E Testing
- [ ] **Storybook** - Component Development

### Backend Testing
- [ ] **Supertest** - HTTP Testing für Node.js
- [ ] **Postman/Newman** - API Testing
- [ ] **Database Testing** - Test Databases
- [ ] **Load Testing** - Artillery, K6
- [ ] **Contract Testing** - Pact

### Advanced Testing
- [ ] **Visual Testing** - Chromatic, Percy
- [ ] **Performance Testing** - Lighthouse, WebPageTest
- [ ] **Security Testing** - OWASP ZAP, Snyk
- [ ] **Mobile Testing** - Responsive, Device Testing
- [ ] **Accessibility Testing** - axe-core, Pa11y

## Testing Frameworks & Tools

### JavaScript Testing
#### Jest - Universal Testing Framework
```javascript
// sum.js
function sum(a, b) {
    return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

describe('sum function', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(sum(1, 2)).toBe(3);
    });
    
    test('adds negative numbers', () => {
        expect(sum(-1, -2)).toBe(-3);
    });
    
    test('handles zero', () => {
        expect(sum(0, 5)).toBe(5);
    });
});
```

#### React Testing Library
```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

describe('Counter Component', () => {
    test('renders with initial count', () => {
        render(<Counter />);
        expect(screen.getByText('Count: 0')).toBeInTheDocument();
    });
    
    test('increments count when button clicked', () => {
        render(<Counter />);
        const button = screen.getByText('Increment');
        
        fireEvent.click(button);
        
        expect(screen.getByText('Count: 1')).toBeInTheDocument();
    });
    
    test('handles multiple increments', () => {
        render(<Counter />);
        const button = screen.getByText('Increment');
        
        fireEvent.click(button);
        fireEvent.click(button);
        fireEvent.click(button);
        
        expect(screen.getByText('Count: 3')).toBeInTheDocument();
    });
});
```

### Backend API Testing
#### Supertest mit Express
```javascript
const request = require('supertest');
const app = require('../app');

describe('User API', () => {
    describe('POST /api/users', () => {
        test('creates a new user', async () => {
            const userData = {
                name: 'John Doe',
                email: 'john@example.com'
            };
            
            const response = await request(app)
                .post('/api/users')
                .send(userData)
                .expect(201);
            
            expect(response.body).toMatchObject(userData);
            expect(response.body.id).toBeDefined();
        });
        
        test('validates required fields', async () => {
            const response = await request(app)
                .post('/api/users')
                .send({})
                .expect(400);
            
            expect(response.body.error).toContain('name is required');
        });
    });
    
    describe('GET /api/users/:id', () => {
        test('returns user by id', async () => {
            // Setup: Create a user first
            const createResponse = await request(app)
                .post('/api/users')
                .send({ name: 'Jane Doe', email: 'jane@example.com' });
            
            const userId = createResponse.body.id;
            
            // Test: Fetch the user
            const response = await request(app)
                .get(`/api/users/${userId}`)
                .expect(200);
            
            expect(response.body.name).toBe('Jane Doe');
        });
        
        test('returns 404 for non-existent user', async () => {
            await request(app)
                .get('/api/users/999')
                .expect(404);
        });
    });
});
```

### End-to-End Testing mit Cypress
```javascript
// cypress/integration/user-journey.spec.js
describe('User Registration and Login', () => {
    beforeEach(() => {
        cy.visit('/');
    });
    
    it('should complete user registration flow', () => {
        // Navigate to registration
        cy.get('[data-cy=register-link]').click();
        
        // Fill registration form
        cy.get('[data-cy=name-input]').type('John Doe');
        cy.get('[data-cy=email-input]').type('john@example.com');
        cy.get('[data-cy=password-input]').type('password123');
        cy.get('[data-cy=confirm-password-input]').type('password123');
        
        // Submit form
        cy.get('[data-cy=register-button]').click();
        
        // Verify success
        cy.url().should('include', '/dashboard');
        cy.get('[data-cy=welcome-message]').should('contain', 'Welcome, John Doe');
    });
    
    it('should handle login with valid credentials', () => {
        cy.get('[data-cy=login-link]').click();
        
        cy.get('[data-cy=email-input]').type('john@example.com');
        cy.get('[data-cy=password-input]').type('password123');
        cy.get('[data-cy=login-button]').click();
        
        cy.url().should('include', '/dashboard');
    });
    
    it('should show error for invalid credentials', () => {
        cy.get('[data-cy=login-link]').click();
        
        cy.get('[data-cy=email-input]').type('wrong@example.com');
        cy.get('[data-cy=password-input]').type('wrongpassword');
        cy.get('[data-cy=login-button]').click();
        
        cy.get('[data-cy=error-message]').should('contain', 'Invalid credentials');
    });
});
```

## Test-Driven Development (TDD)

### TDD Cycle: Red-Green-Refactor
```javascript
// 1. RED: Write failing test
describe('Calculator', () => {
    test('should multiply two numbers', () => {
        const calculator = new Calculator();
        expect(calculator.multiply(3, 4)).toBe(12);
    });
});

// 2. GREEN: Write minimal code to pass
class Calculator {
    multiply(a, b) {
        return a * b;
    }
}

// 3. REFACTOR: Improve code quality
class Calculator {
    multiply(a, b) {
        if (typeof a !== 'number' || typeof b !== 'number') {
            throw new Error('Both arguments must be numbers');
        }
        return a * b;
    }
}

// Continue with more tests...
test('should throw error for non-numeric inputs', () => {
    const calculator = new Calculator();
    expect(() => calculator.multiply('a', 3)).toThrow('Both arguments must be numbers');
});
```

## Mocking & Test Doubles

### Jest Mocks
```javascript
// External API Mock
const axios = require('axios');
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('UserService', () => {
    test('should fetch user data', async () => {
        const userData = { id: 1, name: 'John Doe' };
        mockedAxios.get.mockResolvedValue({ data: userData });
        
        const userService = new UserService();
        const result = await userService.getUser(1);
        
        expect(result).toEqual(userData);
        expect(mockedAxios.get).toHaveBeenCalledWith('/api/users/1');
    });
});

// Function Mock
const mockCallback = jest.fn(x => 42 + x);

test('mock implementation', () => {
    [0, 1].forEach(mockCallback);
    
    expect(mockCallback.mock.calls.length).toBe(2);
    expect(mockCallback.mock.calls[0][0]).toBe(0);
    expect(mockCallback.mock.results[0].value).toBe(42);
});
```

### Database Mocking
```javascript
// In-memory SQLite for testing
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('sqlite::memory:', {
    logging: false
});

beforeAll(async () => {
    await sequelize.authenticate();
    await sequelize.sync({ force: true });
});

afterAll(async () => {
    await sequelize.close();
});

beforeEach(async () => {
    // Clean database before each test
    await sequelize.sync({ force: true });
});
```

## Performance Testing

### Load Testing mit K6
```javascript
import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
    stages: [
        { duration: '30s', target: 20 },
        { duration: '1m', target: 20 },
        { duration: '30s', target: 0 },
    ],
};

export default function () {
    let response = http.get('https://api.example.com/users');
    
    check(response, {
        'status is 200': (r) => r.status === 200,
        'response time < 500ms': (r) => r.timings.duration < 500,
    });
    
    sleep(1);
}
```

### Frontend Performance Testing
```javascript
// Lighthouse CI Configuration
module.exports = {
    ci: {
        collect: {
            url: ['http://localhost:3000'],
            numberOfRuns: 3,
        },
        assert: {
            assertions: {
                'categories:performance': ['error', { minScore: 0.9 }],
                'categories:accessibility': ['error', { minScore: 0.9 }],
                'categories:best-practices': ['error', { minScore: 0.9 }],
                'categories:seo': ['error', { minScore: 0.9 }],
            },
        },
        upload: {
            target: 'temporary-public-storage',
        },
    },
};
```

## Testing Best Practices

### Test Organization
```javascript
// Good: Descriptive test structure
describe('User Authentication', () => {
    describe('when user provides valid credentials', () => {
        it('should return JWT token', () => {
            // test implementation
        });
        
        it('should set authentication cookie', () => {
            // test implementation
        });
    });
    
    describe('when user provides invalid credentials', () => {
        it('should return 401 status', () => {
            // test implementation
        });
        
        it('should not set authentication cookie', () => {
            // test implementation
        });
    });
});
```

### Test Data Management
```javascript
// Factory Functions
function createUser(overrides = {}) {
    return {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
        active: true,
        ...overrides
    };
}

function createPost(userOverrides = {}, postOverrides = {}) {
    return {
        id: 1,
        title: 'Test Post',
        content: 'Test content',
        author: createUser(userOverrides),
        published: false,
        ...postOverrides
    };
}

// Usage in tests
test('should display post author', () => {
    const post = createPost(
        { name: 'Jane Doe' },
        { title: 'Custom Title' }
    );
    
    expect(post.author.name).toBe('Jane Doe');
    expect(post.title).toBe('Custom Title');
});
```

## CI/CD Integration

### GitHub Actions Test Workflow
```yaml
name: Test Suite

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    
    strategy:
      matrix:
        node-version: [16, 18, 20]
    
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
    
    - name: Use Node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v3
      with:
        node-version: ${{ matrix.node-version }}
        cache: 'npm'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run linting
      run: npm run lint
    
    - name: Run unit tests
      run: npm test -- --coverage
    
    - name: Run integration tests
      run: npm run test:integration
      env:
        DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test
    
    - name: Upload coverage to Codecov
      uses: codecov/codecov-action@v3
      with:
        file: ./coverage/lcov.info
```

## Nächste Schritte

Nach Testing-Grundlagen:
- Security (Coming Soon) - Security Testing Strategies
- Performance (Coming Soon) - Performance Testing Deep Dive
- [DevOps](../devops/index.md) - Test Automation in CI/CD
- Quality Assurance (Coming Soon) - QA Processes und Standards