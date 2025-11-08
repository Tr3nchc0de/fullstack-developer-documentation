# Build Tools & Development Workflow

Moderne Frontend-Entwicklung erfordert ein solides Verständnis von Build Tools und Development Workflows. Diese Tools automatisieren wiederkehrende Aufgaben und optimieren die Entwicklererfahrung.

## Was sind Build Tools?

Build Tools sind Programme, die den Entwicklungsprozess automatisieren, indem sie Aufgaben wie Bundling, Transpiling, Minification und Testing übernehmen.

### Warum Build Tools verwenden?
- **Automatisierung** - Wiederkehrende Aufgaben automatisieren
- **Optimierung** - Code für Produktion optimieren
- **Entwicklererfahrung** - Hot Reload, Source Maps
- **Kompatibilität** - Moderne Syntax in älteren Browsern

## Module Bundler

### Webpack
Der most popular Module Bundler für JavaScript-Anwendungen.

#### Kernkonzepte
- **Entry Points** - Startpunkt der Anwendung
- **Output** - Wo die gebundenen Dateien gespeichert werden
- **Loaders** - Transformationen für verschiedene Dateitypen
- **Plugins** - Erweiterte Funktionalitäten

#### Mein Webpack Lernfortschritt
- [ ] Grundkonfiguration verstehen
- [ ] Loaders konfigurieren (CSS, Images, etc.)
- [ ] Plugins verwenden
- [ ] Code Splitting implementieren
- [ ] Performance optimieren

### Vite
Moderner Build Tool mit extremer Geschwindigkeit.

#### Vorteile
- **Instant Server Start** - Durch ES Modules
- **Lightning Fast HMR** - Hot Module Replacement
- **Rich Features** - TypeScript, JSX, CSS out-of-the-box
- **Optimized Build** - Rollup-basierte Builds

#### Mein Vite Lernfortschritt
- [ ] Vite-Projekt erstellen
- [ ] Plugin-System verstehen
- [ ] Build-Konfiguration anpassen
- [ ] Environment Variables nutzen
- [ ] Production Build optimieren

### Parcel
Zero-configuration Build Tool.

#### Features
- **Zero Config** - Funktioniert out-of-the-box
- **Fast Builds** - Multi-core Processing
- **Built-in Dev Server** - Hot Reload included
- **Asset Optimization** - Automatische Bildoptimierung

## Package Manager

### npm (Node Package Manager)
Standard Package Manager für Node.js und JavaScript.

```bash
# Projekt initialisieren
npm init

# Packages installieren
npm install package-name
npm install -D package-name  # Development Dependency

# Scripts ausführen
npm run build
npm start
```

### Yarn
Alternative zu npm mit verbesserter Performance.

```bash
# Projekt initialisieren
yarn init

# Packages installieren
yarn add package-name
yarn add -D package-name

# Scripts ausführen
yarn build
yarn start
```

### pnpm
Effizienter Package Manager mit Disk Space Optimierung.

```bash
# Projekt initialisieren
pnpm init

# Packages installieren
pnpm add package-name
pnpm add -D package-name

# Scripts ausführen
pnpm build
pnpm start
```

## Transpiler & Compiler

### Babel
JavaScript Transpiler für moderne Syntax.

#### Zweck
- **ES6+ → ES5** - Kompatibilität mit älteren Browsern
- **JSX → JavaScript** - React Syntax transpiling
- **TypeScript → JavaScript** - Type-stripped Compilation

#### Konfiguration (.babelrc)
```json
{
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": [
    "@babel/plugin-transform-runtime"
  ]
}
```

### TypeScript Compiler (tsc)
Transpiler für TypeScript zu JavaScript.

#### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "commonjs",
    "jsx": "react-jsx",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

## CSS Tools

### CSS Preprocessors
- **Sass/SCSS** - Erweiterte CSS-Syntax
- **Less** - Dynamic CSS-Sprache
- **Stylus** - Expressive, robuste CSS-Sprache

### PostCSS
Tool für CSS-Transformationen mit JavaScript Plugins.

```bash
# Installation
npm install -D postcss autoprefixer

# postcss.config.js
module.exports = {
  plugins: [
    require('autoprefixer'),
    require('cssnano')
  ]
}
```

### CSS-in-JS
- **Styled Components** - CSS in React Components
- **Emotion** - Performant CSS-in-JS
- **JSS** - Authoring tool for CSS

## Linting & Code Quality

### ESLint
JavaScript/TypeScript Linting Tool.

```bash
# Installation
npm install -D eslint

# Konfiguration
npx eslint --init

# .eslintrc.js
module.exports = {
  extends: [
    'eslint:recommended',
    '@typescript-eslint/recommended'
  ],
  rules: {
    'no-console': 'warn',
    'no-unused-vars': 'error'
  }
}
```

### Prettier
Code Formatter für konsistenten Stil.

```bash
# Installation
npm install -D prettier

# .prettierrc
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "tabWidth": 2
}
```

### Husky
Git Hooks für Code Quality.

```bash
# Installation
npm install -D husky lint-staged

# package.json
{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "*.{js,ts,tsx}": ["eslint --fix", "prettier --write"]
  }
}
```

## Development Server

### Webpack Dev Server
```javascript
// webpack.config.js
module.exports = {
  devServer: {
    contentBase: './dist',
    hot: true,
    port: 3000,
    open: true
  }
}
```

### Vite Dev Server
```javascript
// vite.config.js
export default {
  server: {
    port: 3000,
    open: true,
    hmr: true
  }
}
```

## Mein Build Tools Lernpfad

### Phase 1: Grundlagen
- [ ] npm/yarn Package Management verstehen
- [ ] Webpack Basic Configuration
- [ ] Babel Setup für ES6+
- [ ] Development Server einrichten

### Phase 2: Fortgeschritten
- [ ] Vite für moderne Development
- [ ] ESLint & Prettier Setup
- [ ] CSS Preprocessors integrieren
- [ ] Source Maps konfigurieren

### Phase 3: Produktiv
- [ ] Production Build optimieren
- [ ] Code Splitting implementieren
- [ ] Bundle Analysis
- [ ] CI/CD Pipeline erstellen

## Projekt-Templates

### React mit Webpack
```bash
npx create-react-app my-app
cd my-app
npm start
```

### React mit Vite
```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

### Vue mit Vite
```bash
npm create vue@latest my-vue-app
cd my-vue-app
npm install
npm run dev
```

## Performance Optimierung

### Bundle Optimization
- **Tree Shaking** - Unused Code Elimination
- **Code Splitting** - Dynamic Imports
- **Lazy Loading** - On-demand Loading
- **Bundle Analysis** - webpack-bundle-analyzer

### Development Performance
- **Hot Module Replacement** - Faster Development
- **Source Maps** - Better Debugging
- **Caching** - Faster Rebuilds

## Nächste Schritte

Nach Build Tools:
- [Testing](../testing/index.md) - Automated Testing Setup
- Deployment (Coming Soon) - Production Deployment
- Performance (Coming Soon) - Web Performance Optimization
- [Backend Development](../backend/index.md) - Full-stack Development