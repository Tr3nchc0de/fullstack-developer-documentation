---
sidebar: auto
---


# Verwendung der `aria-describedby` Eigenschaft, um eine beschreibende Bezeichnung für Benutzeroberflächenelemente bereitzustellen

Der Zweck dieser Technik ist es, zu demonstrieren, wie die WAI-ARIA `aria-describedby` Eigenschaft verwendet wird, um programmatisch bestimmte, beschreibende Informationen über ein Benutzeroberflächenelement bereitzustellen. Die `aria-describedby` Eigenschaft kann verwendet werden, um beschreibende Informationen an ein oder mehrere Elemente durch die Verwendung einer ID-Referenzliste anzuhängen. Die ID-Referenzliste enthält eine oder mehrere eindeutige Element-IDs.

Weitere Informationen zur Bereitstellung von WAI-ARIA-Zuständen und -Eigenschaften mit HTML finden Sie unter ARIA in HTML. WAI-ARIA-Zustände und -Eigenschaften sind auch mit anderen Sprachen kompatibel; konsultieren Sie die Dokumentation in diesen Sprachen.



### Beispiele
## Beispiel 1: Verwendung von `aria-describedby`, um Anweisungen mit Formularfeldern zu verknüpfen
Beispielformularfeld, das `aria-describedby` verwendet, um Anweisungen mit Formularfeldern zu verknüpfen, während ein Formularlabel vorhanden ist.

```html
<form>
  <label for="fname">First name</label>
  <input
    aria-describedby="int2"
    autocomplete="given-name"
    id="fname"
    type="text"
  />
  <p id="int2">Your first name is sometimes called your "given name".</p>
</form>
```
## Beispiel 2: Verwendung der `aria-describedby` Eigenschaft, um detailliertere Informationen über die Schaltfläche bereitzustellen

```html
<div>
  <span id="fontDesc"
    >Select the font faces and sizes to be used Auf dieser Seite</span
  >
  <button aria-describedby="fontDesc" id="fontB" type="button">Fonts</button>
</div>
<div>
  <span id="colorDesc">Select the colors to be used Auf dieser Seite</span>
  <button aria-describedby="colorDesc" id="colorB" type="button">Colors</button>
</div>
<div>
  <span id="customDesc">Customize the layout and styles used Auf dieser Seite</span>
  <button aria-describedby="customDesc" id="customB" type="button">
    Customize
  </button>
</div>
```

