---
sidebar: auto
---

# Verwendung von ARIA-`aria-labelledby` zur Benennung von Regionen und Landmarken

## Über diese Technik
Diese Technik bezieht sich auf 1.3.1: Info und Beziehungen (ausreichend).

Diese Technik gilt für Technologien, die Accessible Rich Internet Applications (WAI-ARIA) unterstützen.

## Beschreibung
Der Zweck dieser Technik besteht darin, Namen für Bereiche einer Seite bereitzustellen, die von unterstützender Technologie gelesen werden können. Das Attribut `aria-labelledby` bietet eine Möglichkeit, einen Abschnitt der Seite, der als Region oder Landmarke markiert ist, mit Text auf der Seite zu verknüpfen, der ihn beschriftet.

Landmarkenrollen (oder "Landmarks") identifizieren programmatisch Abschnitte einer Seite. Landmarks helfen Benutzern von unterstützender Technologie (AT), sich auf einer Seite zu orientieren und erleichtern ihnen die Navigation zu verschiedenen Abschnitten einer Seite.

Wie `aria-describedby` kann `aria-labelledby` mehrere IDs akzeptieren, um auf andere Bereiche der Seite zu verweisen, indem eine durch Leerzeichen getrennte Liste verwendet wird. Es ist auch auf IDs beschränkt, um diese Sätze zu definieren.

## Beispiele

### Beispiel 1: Identifizieren einer Landmarke mit Text auf der Seite
Unten ist ein Beispiel für die Verwendung von `aria-labelledby` auf einer ergänzenden Landmarke. Der Bereich des Dokuments, auf den sich die Überschrift bezieht, könnte mit der Eigenschaft `aria-labelledby` markiert werden, die den Wert der ID für die Überschrift enthält.

```html
<div role="complementary" aria-labelledby="hdr1">
  <h1 id="hdr1">Top News Stories</h1>
  ...
</div>
```

### Beispiel 2: Identifizierung einer Anwendung-Landmarke
Der folgende Codeausschnitt zeigt eine Anwendung-Landmarke mit statischem Text. Wenn eine regionale Landmarke vom Typ Anwendung vorhanden ist und statischer beschreibender Text verfügbar ist, dann fügen Sie auf der Anwendung-Landmarke einen `aria-describedby`-Verweis hinzu, um die Anwendung und den statischen Text wie hier gezeigt zu verknüpfen:

```html
<div role="application" aria-labelledby="p123" aria-describedby="info">
   <h1 id="p123">Kalender</h1>
   <p id="info">Dieser Kalender zeigt den Spielplan der Boston Red Sox.</p>
   <div role="grid">
    ...
   </div>
</div>
```
