---
sidebar: auto
---

# Verwendung von ARIA-`role="heading"` zur Identifizierung von Überschriften
Der Zweck dieser Technik besteht darin, unterstützenden Technologien (AT) eine Möglichkeit zu bieten, ein Inhaltselement als Überschrift zu identifizieren. Das Anwenden von `role="heading"` auf ein Element führt dazu, dass eine AT (wie ein Screenreader) es so behandelt, als wäre es eine Überschrift. Die Eigenschaft `role="heading"` muss mit der Eigenschaft `aria-level` kombiniert werden, um die Überschriftenebene zu definieren.

Wann immer möglich, verwenden Sie native Überschriften-Markup. Zum Beispiel ist es vorzuziehen, ein `h1`-Element zu verwenden, anstatt `<div role="heading" aria-level="1">`. Native HTML-Elemente haben implizite Stile und Funktionen, die nicht unbedingt mit ARIA-Äquivalenten repliziert werden. Zum Beispiel haben Überschriftselemente spezifische Stiländerungen, wenn eine Seite im Lesemodus eines Browsers angezeigt wird. Ein `<div role="heading" aria-level="1">` wird jedoch nicht als Überschrift gestylt, da das zugrunde liegende Element ein `div` ist. ARIA ändert nur die Art und Weise, wie ein Element für unterstützende Technologien dargestellt wird, es ändert nichts am impliziten Stil oder der Funktionalität des Elements, auf das es angewendet wird.

## Beispiele

### Beispiel 1: Einfache Überschriften
Dieses Beispiel zeigt, wie Überschriften mit `role="heading"` und `aria-level` implementiert werden.

```html
<div role="heading" aria-level="2">Global News Items</div>
... eine Liste globaler Nachrichten mit redaktionellen Kommentaren ...

<div role="heading" aria-level="3">Politics</div>
... eine Liste globaler politischer Nachrichten ...
```

### Beispiel 2: Zusätzliche Überschriftenebenen
Dieses Beispiel zeigt, wie eine Überschrift der Ebene 7 mit `role="heading"` und dem Attribut `aria-level` implementiert wird. Da HTML nur Überschriften bis zur Ebene 6 unterstützt, gibt es kein natives Element, um diese Semantik bereitzustellen.

```html
<h5>Obstbäume</h5>
<h6>Äpfel</h6>
<p>Äpfel wachsen an Bäumen in Gebieten, die als Obstgärten bekannt sind...</p>
   ...
<div role="heading" aria-level="7">Jonagold</div>
<p>Jonagold ist eine Kreuzung zwischen den Sorten Golden Delicious und Jonathan...</p>
```

Überschriften mit einem `aria-level` von 10 oder höher können für Benutzer Schwierigkeiten bereiten. Zum Zeitpunkt des Schreibens (2024) melden die meisten Kombinationen von Benutzeragenten und unterstützenden Technologien solche Ebenen als Ebene 2.
