# Modularisierung

Mit ES6-Modulen kann Code strukturiert und wiederverwendbar gestaltet werden.

## Beispiele
```javascript
// Export in Datei a.js
export const name = 'Anna';

// Import in Datei b.js
import { name } from './a.js';

// Default Export
export default function() { return 'Hallo!'; }

// Import Default
import greet from './greet.js';
```
