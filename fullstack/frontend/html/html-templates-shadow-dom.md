# Templates & Shadow DOM

Mit `<template>` und Shadow DOM können wiederverwendbare Komponenten und gekapselte Strukturen erstellt werden.

## Beispiele
```html
<template id="my-template">
  <div>Vorlage</div>
</template>
```
```javascript
// Shadow DOM erstellen
const el = document.createElement('div');
el.attachShadow({ mode: 'open' });
```
```javascript
// Template-Inhalt verwenden
const template = document.getElementById('my-template');
const clone = template.content.cloneNode(true);
document.body.appendChild(clone);
```
```javascript
// Web Component
class MyElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
}
customElements.define('my-element', MyElement);
```
