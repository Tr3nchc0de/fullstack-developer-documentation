# Asynchrone Programmierung

Mit asynchronem Code kann JavaScript auf externe Daten warten, ohne den Ablauf zu blockieren.

## Beispiele
```javascript
// Callback
setTimeout(() => console.log('Fertig!'), 1000);

// Promise
const p = new Promise(resolve => resolve('Erledigt!'));
p.then(msg => console.log(msg));

// async/await
async function getData() {
  return await fetch('/api/data');
}

// Fehlerbehandlung
getData().catch(err => console.error(err));
```
