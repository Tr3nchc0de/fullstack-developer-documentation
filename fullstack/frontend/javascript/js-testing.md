# Testing

Testing ist wichtig, um Fehler frühzeitig zu erkennen und die Qualität des Codes zu sichern.

## Beispiele
```javascript
// Unit Test mit Jest
// sum.js
function sum(a, b) { return a + b; }
module.exports = sum;
// sum.test.js
const sum = require('./sum');
test('addiert Zahlen', () => {
  expect(sum(1, 2)).toBe(3);
});

// Test mit Testing Library
import { render, screen } from '@testing-library/react';
render(<button>Click</button>);
expect(screen.getByText('Click')).toBeInTheDocument();

// Mocking
const mockFn = jest.fn();
mockFn('Test');
expect(mockFn).toHaveBeenCalledWith('Test');

// Fehlerfall testen
expect(() => { throw new Error('Fehler'); }).toThrow('Fehler');
```
