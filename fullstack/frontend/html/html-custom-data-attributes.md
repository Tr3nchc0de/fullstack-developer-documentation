# Custom Data Attributes

Mit `data-*`-Attributen können eigene Daten an HTML-Elemente gebunden und im JavaScript genutzt werden.

## Beispiele
```html
<div data-user-id="123">Anna</div>
```
```html
<button data-action="save">Speichern</button>
```
```html
<input data-valid="true">
```
```javascript
// Zugriff im JS
const id = document.querySelector('[data-user-id]').dataset.userId;
```
