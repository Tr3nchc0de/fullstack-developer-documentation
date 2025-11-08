---
sidebar: auto
---

# Verwendung von `aria-label` für den Zweck eines Links

Das Ziel dieser Technik ist es, den Zweck eines Links mithilfe des `aria-label`-Attributs zu beschreiben. Das `aria-label`-Attribut bietet eine Möglichkeit, ein beschreibendes Textlabel auf ein Objekt, wie z.B. einen Link, zu setzen, wenn auf der Seite keine sichtbaren Elemente vorhanden sind, die das Objekt beschreiben. Wenn beschreibende Elemente auf der Seite sichtbar sind, sollte stattdessen das `aria-labelledby`-Attribut verwendet werden. Das Bereitstellen eines beschreibenden Textlabels ermöglicht es einem Benutzer, den Link von anderen Links auf der Webseite zu unterscheiden, die zu anderen Zielen führen, und hilft dem Benutzer zu entscheiden, ob er dem Link folgen soll. In einigen unterstützenden Technologien wird der Wert von `aria-label` in der Liste der Links anstelle des tatsächlichen Linktexts angezeigt.

Gemäß der Accessible Name and Description Computation und der Accessible Name and Description Computation in den HTML Accessibility API Mappings 1.0 wird der `aria-label`-Text den innerhalb des Links bereitgestellten Text überschreiben. Daher wird der bereitgestellte Text von unterstützender Technologie anstelle des Linktexts verwendet. Aus diesem Grund wird empfohlen, den im `aria-label` verwendeten Text mit dem im Link verwendeten Text zu beginnen. Dies ermöglicht eine konsistente Kommunikation zwischen den Benutzern.

## Beispiel 1: Beschreibung des Zwecks eines Links in HTML mit `aria-label`.
In einigen Situationen können Designer wählen, das visuelle Erscheinungsbild von Links auf einer Seite zu verringern, indem sie kürzere, wiederholte Linktexte wie "mehr lesen" verwenden. Diese Situationen bieten einen guten Anwendungsfall für `aria-label`, da der einfachere, nicht beschreibende Text "mehr lesen" auf der Seite durch ein beschreibenderes Label des Links ersetzt werden kann. Die Wörter 'mehr lesen' werden im `aria-label` wiederholt (das den ursprünglichen Ankertext von "[Read more...]" ersetzt), um eine konsistente Kommunikation zwischen den Benutzern zu ermöglichen.

```html
<h4>Neighborhood News</h4>
<p>Seminole tax hike: Seminole city managers are proposing a 75% increase in 
  property taxes for the coming fiscal year.
  <a href="taxhike.html" aria-label="Read more about Seminole tax hike">
   [Read more...]</a>
</p> 
  
<p>Baby Mayor: Seminole voters elect the city's youngest mayor ever by voting
   in 3 year old Willy "Dusty" Williams in yesterday's mayoral election.
   <a href="babymayor.html" aria-label="Read more about Seminole's new baby mayor">
    [Read more...]</a>
</p>
```

