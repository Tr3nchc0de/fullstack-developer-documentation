# Fetch API

Mit der Fetch API können HTTP-Anfragen einfach und modern durchgeführt werden.

## Beispiele
```javascript
// GET Request
fetch('/api/data').then(res => res.json()).then(data => console.log(data));

// POST Request
fetch('/api/data', { method: 'POST', body: JSON.stringify({ name: 'Anna' }) });

// Mit async/await
async function getData() {
  const res = await fetch('/api/data');
  return await res.json();
}

// Fehlerbehandlung
fetch('/api/data').catch(err => console.error(err));
```
