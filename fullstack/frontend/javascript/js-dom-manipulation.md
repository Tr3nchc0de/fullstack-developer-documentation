# DOM-Manipulation

Mit DOM-Methoden kann JavaScript HTML-Elemente dynamisch verändern und steuern.

## Beispiele
```javascript
// Element auswählen
const el = document.getElementById('demo');

// Inhalt ändern
el.innerHTML = "Neuer Text";

// Klasse hinzufügen
el.classList.add('active');

// Neues Element erstellen
const neu = document.createElement('div');
neu.textContent = "Hallo!";
document.body.appendChild(neu);
```
