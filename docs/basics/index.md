---
sidebar: auto
---

# Grundlegende HTML-Syntax

Diese deutsche Übersetzung von MDN ist Teil eines Experiments.

## Übersicht: Strukturierung von Inhalten mit HTML

In diesem Artikel behandeln wir die absoluten Grundlagen von HTML. Um Ihnen den Einstieg zu erleichtern, definiert dieser Artikel Elemente, Attribute und alle anderen wichtigen Begriffe, die Sie vielleicht gehört haben. Er erklärt auch, wo diese in HTML passen. Sie werden lernen, wie HTML-Elemente strukturiert sind, wie eine typische HTML-Seite strukturiert ist und andere wichtige grundlegende Sprachfunktionen. Unterwegs gibt es auch die Möglichkeit, mit HTML zu experimentieren!

HTML (HyperText Markup Language) ist eine Auszeichnungssprache, die Webbrowsern mitteilt, wie die von Ihnen besuchten Webseiten strukturiert werden sollen. Es kann so kompliziert oder einfach sein, wie der Webentwickler es möchte. HTML besteht aus einer Reihe von Elementen, die Sie verwenden, um verschiedene Teile des Inhalts einzuschließen, zu umschließen oder auszuzeichnen, um sie in einer bestimmten Weise erscheinen oder agieren zu lassen. Die umschließenden Tags können Inhalte in einen Hyperlink verwandeln, um zu einer anderen Seite zu verbinden, oder Wörter kursiv darstellen, und so weiter. Betrachten Sie zum Beispiel die folgende Textzeile:

```html
<p>My cat is very grumpy</p>
```

::: tip
Hinweis: Tags in HTML sind nicht case-sensitiv. Das bedeutet, sie können in Groß- oder Kleinschreibung geschrieben werden. Zum Beispiel könnte ein `<title>` Tag als `<title>, <TITLE>, <Title>, <TiTlE>` usw. geschrieben werden und es würde funktionieren. Allerdings ist es am besten, alle Tags aus Gründen der Konsistenz und Lesbarkeit in Kleinschreibung zu schreiben.
:::

## Anatomie eines HTML-Elements

Lassen Sie uns unser Absatz-Element aus dem vorherigen Abschnitt näher betrachten:

Die Anatomie unseres Elements ist:

- Der öffnende Tag: Dieser besteht aus dem Namen des Elements (in diesem Beispiel p für paragraph), eingeschlossen in öffnende und schließende spitze Klammern. Dieser öffnende Tag markiert, wo das Element beginnt oder zu wirken beginnt. In diesem Beispiel geht es dem Anfang des Absatztextes voraus.
- Der Inhalt: Dies ist der Inhalt des Elements. In diesem Beispiel ist es der Absatztext.
- Der schließende Tag: Dies ist dasselbe wie der öffnende Tag, außer dass es einen Schrägstrich vor dem Elementnamen enthält. Dies markiert, wo das Element endet. Das Fehlen eines schließenden Tags ist ein häufiger Anfängerfehler, der seltsame Ergebnisse hervorrufen kann.
- Das Element besteht aus dem öffnenden Tag, gefolgt von Inhalt, gefolgt von dem schließenden Tag.

## Verschachtelung von Elementen

Elemente können innerhalb anderer Elemente platziert werden. Dies wird als Verschachtelung bezeichnet. Wenn wir sagen wollten, dass unser Kater sehr grummelig ist, könnten wir das Wort sehr in ein `<strong>`-Element einschließen, was bedeutet, dass das Wort eine stärkere Textformatierung haben soll:

```html
<p>My cat is <strong>very</strong> grumpy.</p>
```

## Leere Elemente

Nicht alle Elemente folgen dem Muster eines öffnenden Tags, Inhalts und eines schließenden Tags. Einige Elemente bestehen aus einem einzigen Tag, der typischerweise verwendet wird, um etwas in das Dokument einzufügen/einzubetten. Solche Elemente werden leere Elemente genannt. Zum Beispiel bettet das `<img>`-Element eine Bilddatei auf einer Seite ein:

```html
<img
  src="https://raw.githubusercontent.com/mdn/beginner-html-site/gh-pages/images/firefox-icon.png"
  alt="Firefox icon"
/>
```

## Boolesche Attribute

Manchmal sehen Sie Attribute ohne Werte. Das ist völlig akzeptabel. Sie werden boolesche Attribute genannt. Wenn ein boolesches Attribut ohne Wert, oder mit irgendeinem Wert, sogar wie "false" geschrieben wird, ist das boolesche Attribut immer wahr. Andernfalls, wenn das Attribut nicht in einem HTML-Tag geschrieben ist, ist das Attribut falsch. Die Spezifikation erfordert, dass der Wert des Attributs entweder die leere Zeichenfolge (einschließlich wenn das Attribut keinen explizit angegebenen Wert hat) oder derselbe wie der Attributname ist, aber andere Werte funktionieren genauso. Zum Beispiel betrachten Sie das disabled-Attribut, das Sie Formulareingabeelementen zuweisen können. (Sie verwenden dies, um die Formulareingabeelemente zu deaktivieren, sodass der Benutzer keine Eingaben machen kann. Die deaktivierten Elemente haben typischerweise ein ausgegrautes Erscheinungsbild.) Zum Beispiel:

```html
<input type="text" disabled="disabled" />
```

## Einzel- oder doppelte Anführungszeichen?

In diesem Artikel werden Sie auch feststellen, dass die Attribute in doppelte Anführungszeichen eingeschlossen sind. Sie könnten jedoch in einigen HTML-Codes einzelne Anführungszeichen sehen. Dies ist eine Frage des Stils. Sie können wählen, welche Sie bevorzugen. Beide dieser Zeilen sind gleichwertig:

```html
<a href="https://www.example.com">A link to my example.</a>

<a href="https://www.example.com">A link to my example.</a>
```

## Anatomie eines HTML-Dokuments

Individuelle HTML-Elemente sind alleine nicht sehr nützlich. Als nächstes werfen wir einen Blick darauf, wie einzelne Elemente kombiniert werden, um eine gesamte HTML-Seite zu bilden:

```html
<!DOCTYPE html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

Hier haben wir:

<!doctype html>: Der Doctype. Als HTML jung war (1991-1992), sollten Doctypes als Links zu einer Reihe von Regeln fungieren, denen die HTML-Seite folgen musste, um als gutes HTML zu gelten. Doctypes sahen früher etwa so aus:

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
```

In jüngerer Zeit ist der Doctype ein historisches Relikt, das enthalten sein muss, damit alles andere richtig funktioniert. `<!doctype html>` ist die kürzeste Zeichenkette, die als gültiger Doctype zählt. Das ist alles, was Sie wissen müssen!

`<html></html>`: Das `<html>`-Element. Dieses Element umschließt den gesamten Inhalt auf der Seite. Es wird manchmal als Wurzelelement bezeichnet.

`<head></head>`: Das `<head>`-Element. Dieses Element fungiert als Container für alles, was Sie auf der HTML-Seite aufnehmen möchten, was nicht der Inhalt ist, den die Seite den Betrachtern zeigt. Dazu gehören Schlüsselwörter und eine Seitenbeschreibung, die in Suchergebnissen erscheinen würde, CSS zur Stilisierung der Inhalte, Zeichensatzdeklarationen und mehr. Sie lernen mehr darüber im nächsten Artikel der Serie.

`<meta charset="utf-8">`: Das `<meta>`-Element. Dieses Element stellt Metadaten dar, die nicht durch andere HTML-Meta-bezogene Elemente wie `<base>`, `<link>`, `<script>`, `<style>` oder `<title>` dargestellt werden können. Das charset-Attribut spezifiziert die Zeichenkodierung für Ihr Dokument als UTF-8, das die meisten Zeichen aus dem überwiegenden Teil der von Menschen geschriebenen Sprachen umfasst. Mit dieser Einstellung kann die Seite jetzt jeden Textinhalt verarbeiten, den sie möglicherweise enthält. Es gibt keinen Grund, dies nicht zu setzen, und es kann helfen, einige Probleme später zu vermeiden.

`<title></title>`: Das `<title>`-Element. Dies setzt den Titel der Seite, was der Titel ist, der im Browser-Tab erscheint, in dem die Seite geladen ist. Der Seitentitel wird auch verwendet, um die Seite zu beschreiben, wenn sie als Lesezeichen gesetzt wird.

`<body></body>`: Das `<body>`-Element. Dies enthält alle Inhalte, die auf der Seite angezeigt werden, einschließlich Text, Bilder, Videos, Spiele, abspielbare Audiospuren oder was auch immer.

## Zeichenreferenzen: Einschließen von Sonderzeichen in HTML

In HTML sind die Zeichen <, >, ", ', und & Sonderzeichen. Sie sind Teile der HTML-Syntax selbst. Wie fügt man also eines dieser Sonderzeichen in Ihren Text ein? Beispielsweise, wenn Sie ein Kaufmanns-Und-Zeichen oder ein Kleiner-als-Zeichen verwenden wollen, ohne das es als Code interpretiert wird.

Sie machen dies mit Zeichenreferenzen. Dies sind spezielle Codes, die Zeichen darstellen sollen, die genau in diesen Situationen verwendet werden sollen. Jede Zeichenreferenz beginnt mit einem Ampersand (&) und endet mit einem Semikolon `;` .

<figure class="table-container"><table>
<thead>
<tr>
<th>Literalzeichen</th>
<th>Entsprechende Zeichenreferenz</th>
</tr>
</thead>
<tbody>
<tr>
<td>&lt;</td>
<td><code>&amp;lt;</code></td>
</tr>
<tr>
<td>&gt;</td>
<td><code>&amp;gt;</code></td>
</tr>
<tr>
<td>"</td>
<td><code>&amp;quot;</code></td>
</tr>
<tr>
<td>'</td>
<td><code>&amp;apos;</code></td>
</tr>
<tr>
<td>&amp;</td>
<td><code>&amp;amp;</code></td>
</tr>
</tbody>
</table></figure>
