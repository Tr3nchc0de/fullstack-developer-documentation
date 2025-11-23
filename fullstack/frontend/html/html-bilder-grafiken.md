# Bilder & Grafiken

Mit HTML5 können Bilder und Vektorgrafiken einfach eingebunden und beschrieben werden.

## Beispiele
```html
<img src="bild.jpg" alt="Beschreibung">
```
```html
<svg width="100" height="100"><circle cx="50" cy="50" r="40" /></svg>
```
```html
<figure>
  <img src="bild.jpg" alt="Beispiel">
  <figcaption>Bildbeschreibung</figcaption>
</figure>
```
```html
<picture>
  <source srcset="bild.webp" type="image/webp">
  <img src="bild.jpg" alt="Responsive Bild">
</picture>
```
