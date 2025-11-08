---
sidebar: auto
---

# Verwendung von `aria-labelledby` für den Zweck von Links

Mit dem Attribut `aria-labelledby` können Autoren ein sichtbares Textelement auf der Seite als Beschriftung für ein fokussierbares Element (ein Formularsteuerelement oder einen Link) verwenden. Zum Beispiel könnte ein "mehr lesen..."-Link mit dem Text der Überschrift des vorhergehenden Abschnitts verknüpft werden, um den Zweck des Links eindeutig zu machen (siehe Beispiel 1).

Wenn Text mit Hilfe von aria-labelledby einem fokussierbaren Element zugeordnet wird, erhält das Zieltextelement eine ID, die im Wert des `aria-labelledby` -Attributs des fokussierbaren Elements referenziert wird.

Es ist auch möglich, mehrere Textelemente auf der Seite als Beschriftung für ein fokussierbares Element zu verwenden. Jedes der verwendeten Textelemente muss eine eindeutige ID erhalten, die als Zeichenkette von IDs (IDREF) im Wert des `aria-labelledby`-Attributs referenziert wird. Der Beschriftungstext sollte dann in der Reihenfolge der IDs im Wert des `aria-labelledby`-Attributs verkettet werden.

Bei Links kann `aria-labelledby` verwendet werden, um den Zweck eines Links zu identifizieren, der für sehende Benutzer offensichtlich, aber für Bildschirmleserbenutzer weniger offensichtlich sein kann.

Das spezifizierte Verhalten von aria-labelledby ist, dass der zugeordnete Beschriftungstext anstelle des Linktexts angekündigt wird (nicht zusätzlich zum Linktext). Wenn der Linktext selbst in den Beschriftungstext aufgenommen werden soll, sollte die ID des Links ebenfalls in der Zeichenkette der IDs referenziert werden, die den Wert des `aria-labelledby`-Attributs bilden.
Für weitere Informationen zur Benennungshierarchie konsultieren Sie bitte die Berechnung des zugänglichen Namens und der Beschreibung.

## Beispiel 1: Bereitstellung zusätzlicher Informationen für Links
Dieses Beispiel bedeutet, dass der auf dem Bildschirm angezeigte Linktext dann als Anfang des zugänglichen Namens für den Link verwendet wird. Bildschirmleser werden dies als "Mehr lesen ... Stürme treffen die Ostküste" ankündigen und denselben Text in der Linkliste anzeigen, was für Bildschirmleserbenutzer sehr nützlich ist, die möglicherweise nach Links durchsuchen.


```html
<h2 id="headline">Storms hit east coast</h2>
<p>Torrential rain and gale force winds have struck the east coast, 
   causing flooding in many coastal towns.
  <a id="p123" href="news.html" aria-labelledby="p123 headline">Read more...</a>
</p>
```


## Beispiel 2: Verketten von Linktexten aus mehreren Quellen
Es kann Fälle geben, in denen ein Autor ein Tag um einen Abschnitt von Code platziert, der referenziert wird.

```html
<p>Download <span id="report-title">Verkaufsbericht</span>:
  <a aria-labelledby="report-title pdf" href="#" id="pdf">PDF</a> |
  <a aria-labelledby="report-title doc" href="#" id="doc">Word</a> |
  <a aria-labelledby="report-title ppt" href="#" id="ppt">PowerPoint</a>
</p>
```


