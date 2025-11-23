# Event-Handling

Events sind Aktionen wie Klicks oder Tastendrücke. Mit Event-Handling reagiert JavaScript darauf.

## Beispiele
```javascript
// Klick-Event
button.addEventListener('click', () => {
  alert('Button geklickt!');
});

// Event-Objekt nutzen
window.addEventListener('resize', (event) => {
  console.log(event.target.innerWidth);
});

// Event Delegation
ul.addEventListener('click', (e) => {
  if (e.target.tagName === 'LI') {
    console.log('Listenelement:', e.target.textContent);
  }
});

// Tastendruck
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') {
    console.log('Enter gedrückt');
  }
});
```
