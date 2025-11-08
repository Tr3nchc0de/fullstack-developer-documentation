---
sidebar: auto
---
# Verwendung von `aria-labelledby`, um eine Textalternative für nicht-textuelle Inhalte bereitzustellen
Der Zweck dieser Technik besteht darin, eine kurze Beschreibung für ein Element bereitzustellen, die von unterstützenden Technologien gelesen werden kann, indem das Attribut `aria-labelledby` verwendet wird. Das Attribut `aria-labelledby` verknüpft ein Element mit Text, der an anderer Stelle auf der Seite sichtbar ist, indem ein ID-Referenzwert verwendet wird, der mit dem ID-Attribut des beschriftenden Elements übereinstimmt. Unterstützende Technologien wie Bildschirmlesegeräte verwenden den Text des Elements, das durch den Wert des Attributs `aria-labelledby` identifiziert wird, als Textalternative für das Element mit dem Attribut.

## Beispiel 1: Bereitstellung einer kurzen Beschreibung für eine komplexe Grafik
Dieses Beispiel zeigt, wie das Attribut `aria-labelledby` verwendet wird, um eine kurze Textbeschreibung für eine schreibgeschützte komplexe Grafik eines Sternbewertungsmusters bereitzustellen; die Grafik besteht aus mehreren Bildelementen. Die Textalternative für die Grafik ist das Label, das auf der Seite unterhalb des Sternmusters sichtbar ist.


```html
<div role="img" aria-labelledby="star-id">
  <img src="fullstar.png" alt="">
  <img src="fullstar.png" alt="">
  <img src="fullstar.png" alt="">
  <img src="fullstar.png" alt="">
  <img src="emptystar.png" alt="">
</div>
<div id="star-id">4 of 5</div>
```


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