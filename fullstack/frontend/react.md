# React.js Framework

React ist eine JavaScript-Library für das Erstellen von Benutzeroberflächen, die von Facebook entwickelt wurde. Es ist eines der beliebtesten Frontend-Frameworks und ein Muss für moderne Fullstack-Developer.

## Was ist React?

React ist eine deklarative, effiziente und flexible JavaScript-Library zum Erstellen von Benutzeroberflächen. Es basiert auf dem Konzept von Komponenten - wiederverwendbaren UI-Bausteinen.

### Kernkonzepte
- **Komponenten** - Wiederverwendbare UI-Bausteine
- **JSX** - JavaScript-Syntax-Erweiterung
- **Props** - Datenübertragung zwischen Komponenten
- **State** - Lokaler Komponentenzustand
- **Virtual DOM** - Effiziente DOM-Updates

## Mein React Lernfortschritt

### Grundlagen
- [ ] JSX Syntax verstehen
- [ ] Funktionale Komponenten erstellen
- [ ] Props verwenden
- [ ] Event-Handling implementieren
- [ ] Conditional Rendering beherrschen

### React Hooks
- [ ] useState - State Management
- [ ] useEffect - Side Effects
- [ ] useContext - Context API
- [ ] useReducer - Complex State
- [ ] Custom Hooks erstellen

### Fortgeschrittene Konzepte
- [ ] Component Lifecycle verstehen
- [ ] Error Boundaries implementieren
- [ ] Performance Optimierung (memo, useMemo, useCallback)
- [ ] Code Splitting
- [ ] Lazy Loading

## React Ökosystem

### State Management
- **Redux** - Predictable State Container
- **Zustand** - Moderne State Management
- **Context API** - Built-in State Sharing
- **Recoil** - Facebook's State Management

### Routing
- **React Router** - Declarative Routing
- **Next.js Router** - File-based Routing
- **Reach Router** - (Merged with React Router)

### Styling
- **Styled Components** - CSS-in-JS
- **Emotion** - Performant CSS-in-JS
- **Tailwind CSS** - Utility-First CSS
- **Material-UI** - React Component Library

### Testing
- **React Testing Library** - Simple Testing Utilities
- **Enzyme** - JavaScript Testing Utility
- **Jest** - Testing Framework

## Projekte & Lernpfad

### Beginner-Projekte
- [ ] **Hello World App** - Erste React-Komponente
- [ ] **Counter App** - useState Hook lernen
- [ ] **Todo List** - CRUD-Operationen
- [ ] **Weather App** - API-Integration

### Intermediate-Projekte
- [ ] **E-Commerce Cart** - Complex State Management
- [ ] **Blog Platform** - Routing und Navigation
- [ ] **Dashboard** - Datenvisualisierung
- [ ] **Chat Application** - Real-time Updates

### Advanced-Projekte
- [ ] **Social Media Platform** - Full-featured App
- [ ] **Project Management Tool** - Complex Business Logic
- [ ] **Video Streaming App** - Media Integration

## React Best Practices

### Component Design
```jsx
// Funktionale Komponente mit Props
const UserCard = ({ user, onEdit, onDelete }) => {
    return (
        <div className="user-card">
            <h3>{user.name}</h3>
            <p>{user.email}</p>
            <button onClick={() => onEdit(user.id)}>Edit</button>
            <button onClick={() => onDelete(user.id)}>Delete</button>
        </div>
    );
};
```

### State Management
```jsx
// useState Hook
const [users, setUsers] = useState([]);
const [loading, setLoading] = useState(false);

// useEffect Hook
useEffect(() => {
    const fetchUsers = async () => {
        setLoading(true);
        try {
            const response = await fetch('/api/users');
            const userData = await response.json();
            setUsers(userData);
        } catch (error) {
            console.error('Error fetching users:', error);
        } finally {
            setLoading(false);
        }
    };

    fetchUsers();
}, []);
```

### Performance
- **React.memo** - Component Memoization
- **useMemo** - Expensive Calculation Caching
- **useCallback** - Function Memoization
- **Code Splitting** - Dynamic Imports

## React mit TypeScript

### Warum TypeScript?
- **Type Safety** - Compile-time Error Detection
- **Better IDE Support** - Autocomplete und IntelliSense
- **Refactoring** - Safer Code Changes
- **Documentation** - Self-documenting Code

### Basic TypeScript Setup
```tsx
interface User {
    id: number;
    name: string;
    email: string;
}

interface UserCardProps {
    user: User;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

const UserCard: React.FC<UserCardProps> = ({ user, onEdit, onDelete }) => {
    // Component implementation
};
```

## React Deployment

### Build-Prozess
```bash
# Development Server
npm start

# Production Build
npm run build

# Testing
npm test
```

### Deployment-Optionen
- **Netlify** - Static Site Hosting
- **Vercel** - React-optimized Hosting
- **GitHub Pages** - Free Static Hosting
- **AWS S3** - Cloud Storage Hosting

## Tools & Libraries

### Development Tools
- **React Developer Tools** - Browser Extension
- **Create React App** - Project Boilerplate
- **Vite** - Fast Build Tool
- **Storybook** - Component Development

### Nützliche Libraries
- **React Hook Form** - Form Management
- **React Query** - Data Fetching
- **Framer Motion** - Animation Library
- **React Spring** - Spring-physics Animations

## Lernressourcen

### Offizielle Dokumentation
- [ ] **React.dev** - Official Documentation
- [ ] **React Tutorial** - Interactive Tutorial

### Online-Kurse
- [ ] **freeCodeCamp** - React Course
- [ ] **Udemy** - Complete React Developer
- [ ] **Pluralsight** - React Path

### Praxis-Plattformen
- [ ] **CodeSandbox** - Online React IDE
- [ ] **React Challenges** - Practice Problems
- [ ] **Frontend Mentor** - Real-world Projects

## Nächste Schritte

Nach React-Grundlagen:
- Next.js (Coming Soon) - Full-stack React Framework
- State Management (Coming Soon) - Redux, Zustand
- Testing React Apps (Coming Soon) - Testing Library, Jest
- [Backend Development](../backend/index.md) - API für React Apps