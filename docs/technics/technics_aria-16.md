---
sidebar: auto
---

# Verwendung von ARIA-`aria-labelledby` zur Bereitstellung eines Namens für Benutzeroberflächensteuerungen

## Über diese Technik
Diese Technik bezieht sich auf:

- 1.3.1: Info und Beziehungen (ausreichend)
- 4.1.2: Name, Rolle, Wert (ausreichend)
- 4.1.2: Name, Rolle, Wert (ausreichend, wenn verwendet, um Namen und Rollen offenzulegen, benutzerdefinierbare Eigenschaften direkt einzustellen und Benachrichtigungen über Änderungen bereitzustellen)
- 4.1.2: Name, Rolle, Wert (ausreichend, wenn verwendet mit G10: Erstellen von Komponenten mit einer Technologie, die die Barrierefreiheit unterstützt, um Benachrichtigungen über Änderungen bereitzustellen)

Diese Technik gilt für Technologien, die Accessible Rich Internet Applications (WAI-ARIA) unterstützen.

## Beschreibung
Der Zweck dieser Technik besteht darin, Namen für Benutzeroberflächensteuerungen bereitzustellen, die von unterstützender Technologie gelesen werden können. WAI-ARIA bietet eine Möglichkeit, Text mit einem Abschnitt, einer Zeichnung, einem Formularelement, einem Bild usw. mithilfe der Eigenschaft `aria-labelledby` zu verknüpfen. Diese Technik verwendet das Attribut `aria-labelledby`, um eine Benutzeroberflächensteuerung, wie ein Formularfeld, mit Text auf der Seite zu verknüpfen, der es beschriftet.

Wie `aria-describedby` kann `aria-labelledby` mehrere IDs akzeptieren, um auf andere Elemente der Seite mit einer durch Leerzeichen getrennten Liste zu verweisen. Diese Fähigkeit macht `aria-labelledby` besonders nützlich in Situationen, in denen sehende Benutzer Informationen aus dem umgebenden Kontext verwenden, um eine Steuerung zu identifizieren. Die Verwendung von `aria-labelledby`, um ein Label aus mehreren Textknoten zu verketten, enthält weitere Beispiele für Situationen, in denen Namen aus mehreren anderen Textelementen auf der Seite erstellt werden.

Während die Funktion von `aria-labelledby` der des nativen HTML-Label-Elements ähnlich erscheint, gibt es einige Unterschiede:

- `aria-labelledby` kann auf mehr als ein Textelement verweisen; `label` kann nur auf eines verweisen.
- `aria-labelledby` kann für eine Vielzahl von Elementen verwendet werden, während das `label`-Element nur für Formularelemente verwendet werden kann.
- Ein Klick auf ein `label` fokussiert das zugehörige Formularfeld. Dies geschieht nicht mit `aria-labelledby`. Wenn dieses Verhalten erforderlich ist, verwenden Sie `label` oder implementieren Sie diese Funktionalität mithilfe von Skripten.

## Beispiele

### Beispiel 1: Beschriftung eines einfachen Textfeldes
Das folgende Beispiel zeigt die Verwendung von `aria-labelledby` auf einem einfachen Textfeld, um ein Label bereitzustellen, wenn kein Text für ein dediziertes Label verfügbar ist, aber anderer Text auf der Seite vorhanden ist, der die Steuerung genau beschriften kann.

```html
<input name="searchtxt" type="text" aria-labelledby="searchbtn">
<input name="searchbtn" id="searchbtn" type="submit" value="Search">
```

### Beispiel 2: Beschriftung eines Schiebereglers
Das folgende Beispiel zeigt die Verwendung von `aria-labelledby`, um ein Label für eine Schieberegler-Steuerung bereitzustellen. In diesem Fall wird der Label-Text aus einem längeren angrenzenden Textstring ausgewählt. Bitte beachten Sie, dass dieses Beispiel vereinfacht ist, um nur die Beschriftungsbeziehung zu zeigen; Autoren, die benutzerdefinierte Steuerungen implementieren, müssen auch sicherstellen, dass die Steuerungen andere Erfolgskriterien erfüllen.

```html
<p>Bitte wählen Sie die <span id="mysldr-lbl">Anzahl der Tage für Ihre Reise</span></p>
<div id="mysldr" role="slider" aria-labelledby="mysldr-lbl"></div>
```

### Beispiel 3: Ein Label aus mehreren Quellen
Das folgende Beispiel von `aria-labelledby` mit mehreren Referenzen verwendet das `label`-Element. Für zusätzliche Details zum Verketten mehrerer Informationsquellen in ein Label mit `aria-labelledby` lesen Sie bitte die Technik "Verwendung von ARIA labelledby, um ein Label aus mehreren Textknoten zu verketten".

```html
<label id="l1" for="f3">Benachrichtigen Sie mich</label>
<select name="amt" id="f3" aria-labelledby="l1 f3 l2">
  <option value="1">1</option>
  <option value="2">2</option>
</select>
<span id="l2">Tage im Voraus</span>
```

:::tip
Die Verwendung des `label`-Elements ist aus mehreren Gründen enthalten. Wenn der Benutzer auf den Text des `label`-Elements klickt, erhält das entsprechende Formularfeld den Fokus, was das Klicken für Personen mit Geschicklichkeitsproblemen erleichtert. Außerdem wird das `label`-Element immer über die Zugänglichkeits-API verfügbar gemacht. Ein `span` hätte verwendet werden können. Ein `span` würde jedoch den Vorteil des größeren anklickbaren Bereichs verlieren.
:::