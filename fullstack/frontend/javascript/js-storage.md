# LocalStorage & SessionStorage

Mit LocalStorage und SessionStorage kann man Daten im Browser persistent speichern.

## Beispiele
```javascript
// LocalStorage speichern
localStorage.setItem('name', 'Anna');

// LocalStorage lesen
const name = localStorage.getItem('name');

// SessionStorage speichern
sessionStorage.setItem('token', '123');

// SessionStorage löschen
sessionStorage.removeItem('token');
```
