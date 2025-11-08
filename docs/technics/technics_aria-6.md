---
sidebar: auto
---

# Verwendung von `aria-label` zur Bereitstellung von Beschriftungen für Objekte

Zweck dieser Technik ist es, eine Beschriftung für Objekte bereitzustellen, die von unterstützenden Technologien gelesen werden kann. Das Attribut `aria-label` liefert die Textbeschriftung für ein Objekt, wie z. B. eine Schaltfläche. Wenn ein Screenreader auf das Objekt trifft, wird der `aria-label` Text vorgelesen, damit der Benutzer weiß, was es ist.

Autoren sollten sich bewusst sein, dass `aria-label` von unterstützenden Technologien in Situationen ignoriert werden kann, in denen `aria-labelledby` für dasselbe Objekt verwendet wird. Für weitere Informationen zur Namenshierarchie konsultieren Sie bitte den Abschnitt zur Berechnung des zugänglichen Namens und der Beschreibung der Empfehlung zur Berechnung des zugänglichen Namens und der Beschreibung. Autoren sollten sich bewusst sein, dass die Verwendung von `aria-label` jede native Benennung wie `alt` bei Bildern oder `label`, das einem Formularfeld mit dem `for`-Attribut zugeordnet ist, überschreibt.

## Beispiel 1: Unterscheidung von Navigationslandmarken
Das folgende Beispiel zeigt, wie `aria-label` verwendet werden könnte, um zwei Navigationslandmarken in einem HTML-Dokument zu unterscheiden, wenn mehr als zwei derselben Art von Landmarken auf derselben Seite vorhanden sind und es keinen vorhandenen Text auf der Seite gibt, der als Beschriftung referenziert werden kann.

```html
<div role="navigation" aria-label="Primary">
  <ul>
    <li>...a list of links here ...</li>
  </ul>
</div>
<div role="navigation" aria-label="Secondary">
  <ul>
    <li>...a list of links here ...</li>
  </ul>
</div>
```


## Beispiel 2: Identifizierung von Regionsmarken
Das folgende Beispiel zeigt, wie eine generische "Region"-Marke zu einem Wetter-Portlet hinzugefügt werden könnte. Es gibt keinen vorhandenen Text auf der Seite, der als Beschriftung referenziert werden kann, daher wird es mit aria-label beschriftet.

```html
<div role="region" aria-label="weather portlet"> 
  ...
</div>
```

## Example 3: Providing a label for Math
Below is an example of a MathML function, using the math role, appropriate label, and MathML rendering:


```html
<div role="math" aria-label="6 divided by 4 equals 1.5">
  <math xmlns="https://www.w3.org/1998/Math/MathML">
    <mfrac>
      <mn>6</mn>
      <mn>4</mn>
    </mfrac>
      <mo>=</mo>
      <mn>1.5</mn>
  </math>
</div>
```