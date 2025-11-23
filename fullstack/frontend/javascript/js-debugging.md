# Debugging

Debugging hilft, Fehler im Code zu finden und zu beheben.

## Beispiele
```javascript
// console.log
console.log('Debug Info');

// Breakpoint im DevTool
// (Im Browser: F12 und Breakpoint setzen)

// Fehlerausgabe
try {
  throw new Error('Fehler!');
} catch (e) {
  console.error(e);
}

// Performance messen
console.time('Test');
for (let i = 0; i < 1000; i++) {}
console.timeEnd('Test');
```
