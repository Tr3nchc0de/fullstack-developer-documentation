---
sidebar: auto
---

# Verwendung von ARIA-`aria-label` zur Bereitstellung eines unsichtbaren Labels, wenn ein sichtbares Label nicht verwendet werden kann

## Über diese Technik
Diese Technik bezieht sich auf 4.1.2: Name, Rolle, Wert (ausreichend).

Diese Technik gilt für Technologien, die Accessible Rich Internet Applications (WAI-ARIA) unterstützen.

## Beschreibung
Für sehende Benutzer können der Kontext und das visuelle Erscheinungsbild eines Elements ausreichende Hinweise auf den Zweck geben. Ein Beispiel ist das 'X', das oft in der oberen rechten Ecke von Pop-up-Divs (Lightboxen) verwendet wird, um die Steuerung zum Schließen des Divs anzuzeigen.

In einigen Situationen können Elemente das Attribut `aria-label` erhalten, um einen zugänglichen Namen bereitzustellen, wenn kein sichtbares Label aufgrund eines gewählten Designansatzes oder Layouts vorhanden ist, aber der Kontext und das visuelle Erscheinungsbild der Steuerung ihren Zweck deutlich machen.

In anderen Situationen können Elemente das Attribut `aria-label` erhalten, um einen zugänglichen Namen bereitzustellen, wenn das native HTML-Beschriftungselement von der Steuerung nicht unterstützt wird - zum Beispiel, wenn ein `div` mit `contentEditable` anstelle von nativen Formularelementen wie `input type="text"` oder `textarea` verwendet wird, um eine reichhaltigere Texterfahrung zu bieten.

## Beispiele

### Beispiel 1: Eine Schaltfläche zum Schließen in einem Pop-up-Fenster
Auf einer Seite zeigt ein Link ein Pop-up-Fenster (ein `div`) mit zusätzlichen Informationen an. Das 'Schließen'-Element wird als Schaltfläche implementiert, die lediglich den Buchstaben 'X' enthält. Die Eigenschaft `aria-label="Close"` wird verwendet, um der Schaltfläche einen zugänglichen Namen zu geben.

```html
<div id="box">
   Dies ist ein Pop-up-Fenster.
   <button aria-label="Close">X</button>				
</div>
```


### Beispiel 2: Eine Telefonnummer mit mehreren Feldern

```html
<div role="group" aria-labelledby="groupLabel">
  <span id="groupLabel">Geschäftstelefon</span>
  +<input autocomplete="tel-country-code" type="number" aria-label="Ländercode">
  <input autocomplete="tel-area-code" type="number" aria-label="Vorwahl">
  <input autocomplete="tel-local" type="number" aria-label="Teilnehmernummer">
</div>
```
