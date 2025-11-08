---
sidebar: auto
---
# Verwendung von `aria-labelledby` zur Verkettung eines Labels aus mehreren Textknoten

Die Eigenschaft `aria-labelledby` kann verwendet werden, um allen visuellen Objekten einen Namen zu geben. Angewendet auf Eingaben kann die Eigenschaft `aria-labelledby` verwendet werden, um sowohl nativen Eingaben als auch nicht-nativen Elementen, wie benutzerdefinierten Texteingaben, die mit `div contenteditable="true"` erstellt wurden, einen Namen zu geben.

Eine besondere Verwendung von `aria-labelledby` ist für Texteingaben in Situationen, in denen ein aussagekräftiger Name aus mehr als einer Textzeichenkette bestehen sollte.

Autoren weisen den zu verkettenden Label-Zeichenketten eindeutige IDs zu, die als Name für das Eingabeelement dienen sollen. Der Wert des Attributs `aria-labelledby` ist dann eine durch Leerzeichen getrennte Liste aller IDs in der Reihenfolge, in der die referenzierten Label-Zeichenketten von Screenreadern gelesen werden sollen. Unterstützende Benutzeragenten werden die referenzierten Label-Zeichenketten verketten und sie als einen kontinuierlichen Namen für die Eingabe lesen.

Die Verkettung von Zeichenketten kann aus verschiedenen Gründen nützlich sein. Im Beispiel 1 ist eine Eingabe im Kontext eines vollständigen Satzes verschachtelt. Die gewünschte Ausgabe des Screenreaders lautet "Extend time-out to [ 20 ] minutes - edit with autocomplete, selected 20". Da die ID der Texteingabe in der Zeichenkette der durch `aria-labelledby` referenzierten IDs enthalten ist, wird der Wert der Eingabe an der richtigen Position in den verketteten Namen aufgenommen.

Eine weitere Anwendung von `aria-labelledby` ist, wenn kein Platz vorhanden ist, um ein sichtbares Label neben der Eingabe bereitzustellen, oder wenn die Verwendung nativer Labels unnötige Redundanz erzeugen würde. Hier macht die Verwendung von `aria-labelledby` es möglich, sichtbare Elemente auf der Seite als Namen für solche Eingaben zuzuordnen. Dies wird in Beispiel 2 demonstriert, wo Tabellen-Spalten- und Zeilenüberschriften zu Namen für die Texteingabeelemente innerhalb der Tabelle verkettet werden.

:::tip
Die Accessible Name and Description Computation spezifiziert, dass die in `aria-labelledby` angegebene Zeichenkette den Inhalt des Elements, das die Eigenschaft trägt, ersetzen und nicht hinzufügen sollte. Das Hinzufügen der Eigenschaft `aria-labelledby` zu einem nativen Label sollte also den Textinhalt innerhalb dieses Labels ersetzen, es sei denn, das Label selbst wird als Teil der ID-Sequenz in `aria-labelledby` referenziert.
:::

## Beispiel 1: Ein Eingabefeld für die Zeitüberschreitung mit verkettetem Namen
Ein Texteingabefeld ermöglicht es Benutzern, die Standardzeit vor einer Zeitüberschreitung zu verlängern.

Der Text "Extend time-out to" ist in einem nativen Label-Element enthalten und ist mit dem Eingabefeld durch `id="timeout-duration"` verknüpft. Dieses Label ist nur auf Benutzeragenten, die ARIA nicht unterstützen, mit dieser Eingabe durch die `for/id`-Verknüpfung assoziiert. Auf Benutzeragenten, die ARIA unterstützen, wird die `for/id`-Verknüpfung ignoriert und der Name für die Eingabe wird nur durch `aria-labelledby` bereitgestellt, gemäß der Accessible Name and Description Computation in den HTML Accessibility API Mappings 1.0.

Das Attribut `aria-labelledby` auf der Texteingabe verweist auf drei Elemente: (1) das `span`, das das native Label enthält, (2) die Texteingabe, die den Standardtext '20' enthält (denken Sie daran, dass diese Eingabe nicht mit dem `for/id`-assoziierten Labeltext beschriftet ist), und (3) die Zeichenkette 'minutes', die in einem `span` enthalten ist. Diese Elemente sollten verkettet werden, um den vollständigen Namen für die Texteingabe bereitzustellen.

```html
<div>
  <span id="timeout-label">
    <label for="timeout-duration">Extend time-out to</label>
  </span>
  <input type="text" size="3" id="timeout-duration" value="20" 
   aria-labelledby="timeout-label timeout-duration timeout-unit">
  <span id="timeout-unit"> minutes</span>
</div>
```

## Beispiel 2: Eine einfache Datentabelle mit Texteingaben
Eine einfache Datentabelle mit Texteingaben. Die Eingabelabels werden durch `aria-labelledby` referenziert und verketten die jeweiligen Spalten- und Zeilenüberschriften.


```html
<table>
  <tr>
    <td></td>
    <th id="tpayer">Taxpayer</th>
    <th id="sp">Spouse</th>
  </tr>
  <tr>
    <th id="gross">W2 Gross</th>
    <td><input type="text" size="20" aria-labelledby="tpayer gross"></td>
    <td><input type="text" size="20" aria-labelledby="sp gross"></td>
  </tr>
  <tr>
    <th id="divi">Dividends</th>
    <td><input type="text" size="20" aria-labelledby="tpayer divi"></td>
    <td><input type="text" size="20" aria-labelledby="sp divi"></td>
  </tr>
</table>
```