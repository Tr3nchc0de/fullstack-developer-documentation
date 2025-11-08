---
sidebar: auto
---
# Verwendung von ARIA-`landmarks` zur Identifizierung von Bereichen einer Seite
Der Zweck dieser Technik besteht darin, programmatischen Zugriff auf Abschnitte einer Webseite zu ermöglichen. Landmarkenrollen (oder `landmarks`) identifizieren programmatisch Abschnitte einer Seite. Landmarks helfen Benutzern von unterstützender Technologie (AT), sich auf einer Seite zu orientieren und erleichtern ihnen die Navigation zu verschiedenen Abschnitten einer Seite.

Sie bieten auch eine einfache Möglichkeit für Benutzer von unterstützender Technologie, über wiederholte Inhaltsblöcke auf mehreren Seiten hinweg zu springen und sie über die programmatische Struktur einer Seite zu informieren. Zum Beispiel, wenn es ein gemeinsames Navigationsmenü gibt, das auf jeder Seite zu finden ist, können Landmarkenrollen (oder `landmarks`) verwendet werden, um darüber hinwegzuspringen und von Abschnitt zu Abschnitt zu navigieren. Dies erspart Benutzern von unterstützender Technologie und Tastaturbenutzern die Mühe und Zeit, durch eine große Menge an Inhalten zu tabben, um das zu finden, wonach sie wirklich suchen, ähnlich wie bei einem traditionellen "Skip Links"-Mechanismus. (Siehe Benutzeragenten-Hinweise oben für spezifische AT-Unterstützung). Ein blinder Benutzer, der mit dem Menü einer Nachrichten-Website vertraut ist und nur daran interessiert ist, zur Top-Story zu gelangen, könnte leicht zum `main-landmark` navigieren und dutzende Menülings überspringen. In einem anderen Fall möchte ein blinder Benutzer möglicherweise schnell ein Navigationsmenü finden und kann dies tun, indem er zum `navigation`-Landmark springt.

`landmarks` können auch sehbehinderten Tastaturbenutzern helfen, mithilfe eines Browser-Plugins zu Abschnitten einer Seite zu navigieren.

`landmarks` werden in die Seite eingefügt, indem das `role`-Attribut auf ein Element gesetzt wird, das den Abschnitt markiert. Der Wert des Attributs ist der Name der Landmarke. Diese Rollenwerte sind unten aufgeführt. Für HTML-Zuordnungen von Landmarkenrollen siehe die Tabelle "Regeln zur Verwendung von ARIA-Attributen nach HTML-Element" in der Empfehlung "ARIA in HTML".

- `banner`: Ein Bereich, der die Hauptüberschrift oder den internen Titel einer Seite enthält.
- `navigation`: Ein Bereich, der Navigationslinks zu anderen Seiten oder verschiedenen Teilen derselben Seite enthält.
- `main`: Ein Bereich, der den Hauptinhalt einer Seite enthält.
- `region`: Ein Bereich, der einen wahrnehmbaren Abschnitt der Seite enthält, der Inhalte enthält, die für Benutzer ausreichend wichtig sind, um zu diesem Abschnitt navigieren zu können. 
- `region`-Landmark wird nicht als Landmarkenbereich angezeigt, es sei denn, er hat einen zugänglichen Namen.
- `form`: Ein Bereich des Dokuments, der eine Sammlung von formularbezogenen Elementen darstellt, von denen einige bearbeitbare Werte darstellen können, die zur Verarbeitung an einen Server gesendet werden können.
- `search`: Ein Bereich der Seite, der Suchfunktionen enthält.
- `complementary`: Jeder Abschnitt des Dokuments, der den Hauptinhalt unterstützt, aber dennoch eigenständig und bedeutungsvoll ist.
- `contentinfo`: Ein Bereich, der Informationen über das übergeordnete Dokument wie Urheberrechte und Links zu Datenschutzerklärungen enthält.

Es gibt Fälle, in denen eine bestimmte Landmarkenrolle mehrmals auf einer Seite verwendet werden könnte, z. B. bei primären und sekundären Navigationsblöcken. In diesen Fällen sollten identische Rollen mit einer gültigen Technik zur Beschriftung von Regionen gekennzeichnet werden.

Landmarken sollten die native semantische Markup wie HTML-Überschriften, Listen und andere Strukturmarkups ergänzen. Landmarken sind für WAI-ARIA-fähige unterstützende Technologien interpretierbar und werden von Browsern nicht direkt an Benutzer weitergegeben.

Es ist eine bewährte Praxis, alle Inhalte auf der Seite in Landmarken einzuschließen, damit Bildschirmleser-Benutzer, die sich auf sie verlassen, um von Abschnitt zu Abschnitt zu navigieren, den Inhalt nicht aus den Augen verlieren.

## Beispiele

### Beispiel 1: Einfache `landmarks`
Das folgende Beispiel zeigt, wie Landmarken zu einem HTML-Dokument hinzugefügt werden können:

```html
<div role="banner">site logo and name, etc. here</div>
<div role="search">search functionality here</div>
<div role="navigation">a list of navigation links here</div>
<div role="form">a sign-up form here</div>
<div role="main">the page's main content here</div>
<div role="region">a sponsor's promotion here</div>
<div role="complementary">sidebar content here</div>
<div role="contentinfo"> site contact details, copyright information, etc. here </div>
```

### Beispiel 2: Mehrere `landmarks` desselben Typs und `aria-labelledby`
Das folgende Beispiel zeigt eine bewährte Methode, wie Landmarken zu einem HTML-Dokument hinzugefügt werden können, wenn es zwei oder mehr Landmarken desselben Typs auf derselben Seite gibt. Wenn beispielsweise eine `navigation`-Rolle mehrmals auf einer Seite verwendet wird, kann jede Instanz ein eindeutiges Label haben, das mit `aria-labelledby` angegeben wird:

```html
<div aria-labelledby="site-nav-heading" role="navigation">
  <h2 id="site-nav-heading">Site</h2>
    <ul>
      <li><a href="...">nav link 1</a></li>  
      <li><a href="...">nav link 2</a></li>
      <li><a href="...">nav link 3</a></li>
   </ul>
</div>
<div aria-labelledby="related-nav-heading" role="navigation">
  <h2 id="related-nav-heading">Related Topics</h2>
    <ul>
      <li><a href="...">topic link 1</a></li>
      <li><a href="...">topic link 2</a></li>
      <li><a href="...">topic link 3</a></li>
    </ul>
</div>
```

## Beispiel 3: Mehrere Landmarken desselben Typs und `aria-label`
Das folgende Beispiel zeigt eine bewährte Methode, wie Landmarken zu einem HTML-Dokument hinzugefügt werden können, wenn es zwei oder mehr Landmarken desselben Typs auf derselben Seite gibt und es keinen vorhandenen Text auf der Seite gibt, der als Label referenziert werden kann:

```html
<div aria-label="Site" role="navigation">
   <ul>
      <li><a href="...">nav link 1</a></li>
      <li><a href="...">nav link 2</a></li>
      <li><a href="...">nav link 3</a></li>
   </ul>
</div>
<div aria-label="Tags" role="navigation">
   <ul>
      <li><a href="...">tag link 1</a></li>
      <li><a href="...">tag link 2</a></li>
      <li><a href="...">tag link 3</a></li>
   </ul>
</div>
```

## Beispiel 4: Suchformular
Das folgende Beispiel zeigt ein Suchformular mit einer "search"-Landmarke. Die `search`-Rolle wird typischerweise auf das `form`-Element oder ein umgebendes `div` gesetzt:

```html
<form role="search">
   <label for="product-search" id="search-label">Search</label>
   <input id="product-search" placeholder="title, author, or ISBN" type="text">
   <button type="submit">Find Books</button>
</form>
```
