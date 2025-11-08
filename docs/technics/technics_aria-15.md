---
sidebar: auto
---

# Verwendung der aria-describedby-Eigenschaft zur Bereitstellung eines beschreibenden Labels für Benutzeroberflächensteuerungen

Das Ziel dieser Technik ist es, Beschreibungen von Bildern bereitzustellen, wenn ein kurzer Text nicht ausreicht, um die Funktion oder die bereitgestellten Informationen des Objekts angemessen zu vermitteln.

Ein Merkmal von WAI-ARIA ist die Möglichkeit, beschreibenden Text mit einem Abschnitt, einer Zeichnung, einem Formularelement, einem Bild usw. mithilfe der aria-describedby-Eigenschaft zu verknüpfen. Beschreibender Text, der mit aria-describedby bereitgestellt wird, ist getrennt von dem kurzen Namen, der mit dem alt-Attribut in HTML bereitgestellt wird. Ein Vorteil der Bereitstellung langer Beschreibungen mit Inhalten von derselben Seite wie das Bild besteht darin, dass die Alternative für alle verfügbar ist, einschließlich sehender Personen, die keine unterstützende Technologie verwenden.

Wie aria-labelledby kann aria-describedby mehrere IDs akzeptieren, um auf andere Bereiche der Seite mit einer durch Leerzeichen getrennten Liste zu verweisen. Es ist auch auf IDs beschränkt, um diese Sätze zu definieren.

**Example 1: Describing an image**
The following example shows how aria-describedby can be applied to an image to provide a long description, where that text description is on the same page as the image.

```html
<img src="ladymacbeth.jpg" alt="Lady MacBeth" aria-describedby="p1" />
<p id="p1">
  This painting dates back to 1889 and is oil on canvas. It was created by John
  Singer Sargent, and represents ...
</p>
```
