---
sidebar: auto
---

# Verwendung von WAI-ARIA Zustands- und Eigenschaftenattributen zur Darstellung des Zustands einer Benutzeroberflächenkomponente

Das Ziel dieser Technik ist es, WAI-ARIA Zustands- und Eigenschaftenattribute zu verwenden, um den Zustand, die Eigenschaften und Werte einer Benutzeroberflächenkomponente darzustellen, sodass sie von unterstützenden Technologien gelesen und gesetzt werden können und diese Technologien über Änderungen dieser Werte informiert werden. Die WAI-ARIA-Spezifikation bietet eine normative Beschreibung jedes Attributs und der Rolle der unterstützten Benutzeroberflächenelemente. Wenn Rich-Internet-Anwendungen neue Benutzeroberflächen-Widgets definieren, ermöglicht die Darstellung der Zustands- und Eigenschaftenattribute den Benutzern, das Widget zu verstehen und zu wissen, wie sie damit interagieren können.

## Beispiel 1: Eine Umschalttaste

Ein Widget mit der Rolle `button` fungiert als Umschalttaste, wenn es das Attribut `aria-pressed` implementiert. Wenn `aria-pressed` auf `true` gesetzt ist, befindet sich die Taste im "gedrückten" Zustand. Wenn `aria-pressed` auf `false` gesetzt ist, ist sie nicht gedrückt. Wenn das Attribut nicht vorhanden ist, handelt es sich bei der Taste um eine einfache Befehlsschaltfläche.

Der folgende Ausschnitt aus den Beispielen des ARIA Authoring Practices Guide (APG) für Schaltflächen zeigt das WAI-ARIA Markup für eine Umschalttaste zum Stummschalten/Wiedereinschalten von Audio:

```html
<a tabindex="0"
  role="button"
  id="toggle"
  aria-pressed="false">
  Mute
  ...
</a>
```
Das `a`-Element hat eine `role="button"` und ein `aria-pressed` Attribut. Der folgende Auszug aus dem Javascript für dieses Beispiel aktualisiert den Wert des `aria-pressed` Attributs:

## Beispiel 2: Ein Schieberegler

Ein Widget mit der Rolle `slider` ermöglicht es einem Benutzer, einen Wert aus einem vorgegebenen Bereich auszuwählen. Der Schieberegler stellt den aktuellen Wert und den Bereich der möglichen Werte durch die Größe des Schiebereglers und die Position des Griffs dar. Diese Eigenschaften des Schiebereglers werden durch die Attribute `aria-valuemin`, `aria-valuemax` und `aria-valuenow` repräsentiert.

Der folgende Ausschnitt aus dem ARIA Authoring Practices Guide (APG) Farbbetrachter-Schieberegler-Beispiel zeigt WAI-ARIA Markup für einen der Schieberegler:

```html
<div id="id-red" class="color-slider-label">Red</div>
<div class="color-slider red"
  role="slider"
  tabindex="0"
  aria-valuemin="0"
  aria-valuenow="128"
  aria-valuemax="255"
  aria-labelledby="id-red">
   ...
</div>
```
