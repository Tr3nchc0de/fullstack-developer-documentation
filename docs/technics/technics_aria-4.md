---
sidebar: auto
---

# Verwendung einer WAI-ARIA-Rolle zur Offenlegung der Rolle einer Benutzeroberflächenkomponente

Das Ziel dieser Technik ist es, die Rolle eines Elements mithilfe des Attributs "role" mit einem der nicht-abstrakten Werte zu definieren, die in der WAI-ARIA-Definition der Rollen festgelegt sind. Die WAI-ARIA-Spezifikation bietet eine informative Beschreibung jeder Rolle, wie sie sich auf andere Rollen bezieht und die Zustände und Eigenschaften jeder Rolle. Wenn Rich-Internet-Anwendungen neue Benutzeroberflächen-Widgets definieren, ermöglicht das Offenlegen der Rollen den Benutzern, das Widget zu verstehen und zu wissen, wie sie damit interagieren können.

## Beispiel 1: Eine einfache Werkzeugleiste

Eine Werkzeugleiste mit drei Schaltflächen. Das div-Element hat die Rolle "toolbar", und die img-Elemente haben die Rolle "button":

```html
<div
  role="toolbar"
  tabindex="0"
  id="customToolbar"
  onkeydown="return optionKeyEvent(event);"
  onkeypress="return optionKeyEvent(event);"
  onclick="return optionClickEvent(event);"
  onblur="hideFocus()"
  onfocus="showFocus()"
>
  <img
    src="img/btn1.gif"
    role="button"
    tabindex="-1"
    alt="Home"
    id="b1"
    title="Home"
  />
  <img
    src="img/btn2.gif"
    role="button"
    tabindex="-1"
    alt="Refresh"
    id="b2"
    title="Refresh"
  />
  <img
    src="img/btn3.gif"
    role="button"
    tabindex="-1"
    alt="Help"
    id="b3"
    title="Help"
  />
</div>
```

## Beispiel 2: Ein Baum-Widget

Ein einfaches Baum-Widget. Beachten Sie die Verwendung der Rollen "tree", "treeitem" und "group", um den Baum und seine Struktur zu identifizieren. Hier ist ein vereinfachter Auszug aus dem Code:

```html
<ul role="tree" tabindex="0">
  <li role="treeitem">Birds</li>
  <li role="treeitem">
    Cats
    <ul role="group">
      <li role="treeitem">Siamese</li>
      <li role="treeitem">Tabby</li>
    </ul>
  </li>
  <li role="treeitem">
    Dogs
    <ul role="group">
      <li role="treeitem">
        Small Breeds
        <ul role="group">
          <li role="treeitem">Chihuahua</li>
          <li role="treeitem">Italian Greyhound</li>
          <li role="treeitem">Japanese Chin</li>
        </ul>
      </li>
      <li role="treeitem">
        Medium Breeds
        <ul role="group">
          <li role="treeitem">Beagle</li>
          <li role="treeitem">Cocker Spaniel</li>
          <li role="treeitem">Pit Bull</li>
        </ul>
      </li>
      <li role="treeitem">
        Large Breeds
        <ul role="group">
          <li role="treeitem">Afghan</li>
          <li role="treeitem">Great Dane</li>
          <li role="treeitem">Mastiff</li>
        </ul>
      </li>
    </ul>
  </li>
</ul>
```
