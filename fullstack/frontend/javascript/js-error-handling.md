# Fehlerbehandlung

Fehlerbehandlung ist wichtig, um Programme robust und sicher zu machen.

## Beispiele
```javascript
// try/catch
try {
  throw new Error('Fehler!');
} catch (e) {
  console.error(e.message);
}

// Fehlerobjekt
function divide(a, b) {
  if (b === 0) throw new Error('Division durch Null');
  return a / b;
}

// Fehler in Promises
Promise.reject('Problem').catch(err => console.log(err));

// Fehler in async/await
async function test() {
  try {
    await Promise.reject('Async Fehler');
  } catch (e) {
    console.log(e);
  }
}
```
