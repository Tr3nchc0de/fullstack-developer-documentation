# HTML5 APIs

HTML5 stellt verschiedene APIs bereit, um Webanwendungen leistungsfähiger und interaktiver zu machen.

## Beispiele
```javascript
// LocalStorage
localStorage.setItem('key', 'value');
```
```javascript
// Geolocation
navigator.geolocation.getCurrentPosition(pos => console.log(pos));
```
```javascript
// Web Workers
const worker = new Worker('worker.js');
```
```javascript
// Canvas API
const ctx = document.getElementById('myCanvas').getContext('2d');
ctx.fillRect(10, 10, 50, 50);
```
