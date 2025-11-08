---
sidebar: auto
---

# Gestaltung für Webzugänglichkeit

## Zusammenfassung

Diese Seite stellt einige grundlegende Überlegungen vor, die Ihnen helfen sollen, Ihre Benutzeroberflächengestaltung und visuelle Gestaltung für Menschen mit Behinderungen zugänglicher zu machen. Diese Tipps sind gute Praktiken, um Ihnen zu helfen, die Anforderungen der Web Content Accessibility Guidelines (WCAG) zu erfüllen. Folgen Sie den Links zu den entsprechenden WCAG-Anforderungen, detaillierten Hintergrundinformationen im „Understanding“-Dokument, Anleitungen aus Tutorials, Benutzererfahrungen und mehr.

### Seiteninhalt

- [ausreichenden Kontrast](#stellen-sie-ausreichenden-kontrast-zwischen-vordergrund-und-hintergrund-bereit)
- [nicht nur Farbe](#verwenden-sie-nicht-nur-farbe-um-informationen-zu-vermitteln)
- [interaktive Elemente leicht zu identifizieren sind](#stellen-sie-sicher-dass-interaktive-elemente-leicht-zu-identifizieren-sind)
- [klare und konsistente Navigationsoptionen](#bieten-sie-klare-und-konsistente-navigationsoptionen)
- [Formularelemente klar zugeordnet](#stellen-sie-sicher-dass-formularelemente-klar-zugeordnete-beschriftungen-enthalten)
- [leicht erkennbare Rückmeldungen](#bieten-sie-leicht-erkennbare-rückmeldungen)
- [Überschriften und Abstände gruppieren](#verwenden-sie-überschriften-und-abstände-um-verwandte-inhalte-zu-gruppieren)
- [Designs für verschiedene Ansichtsgrößen](#erstellen-sie-designs-für-verschiedene-ansichtsgrößen)
- [Bild- und Medienalternativen ins Design](#schließen-sie-bild-und-medienalternativen-in-ihr-design-ein)
- [Steuerungen für Inhalte](#bieten-sie-steuerungen-für-inhalte-die-automatisch-starten)

## stellen-sie-ausreichenden-kontrast-zwischen-vordergrund-und-hintergrund-berei

Vordergrundtext muss einen ausreichenden Kontrast zu Hintergrundfarben haben. Dies gilt für Text auf Bildern, Hintergrundverläufen, Schaltflächen und anderen Elementen. Dies gilt nicht für Logos oder beiläufigen Text, wie z. B. Text, der zufällig in einem Foto vorkommt. Die unten stehenden Links bieten weitere Informationen zum minimalen Kontrastverhältnis, wie es von den [WCAG gefordert](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#contrast-minimum) wird, und wie man den Kontrast überprüft. „Kontrastverhältnis“ ist eine Kurzform des technisch korrekteren Begriffs „Leuchtdichte-Kontrastverhältnis“.

---

#### Beispiel

#### Unzureichend :x:

<span style="opacity: 0.5 !important;">Einige Menschen können Text nicht lesen, wenn der Kontrast zwischen Text und Hintergrund nicht ausreichend ist. Für andere sind helle Farben (hohe Leuchtdichte) nicht lesbar; sie benötigen eine niedrige Leuchtdichte.</span>

#### Ausreichend :white_check_mark:

<span style="opacity: 1 !important;">Einige Menschen können Text nicht lesen, wenn der Kontrast zwischen Text und Hintergrund nicht ausreichend ist. Für andere sind helle Farben (hohe Leuchtdichte) nicht lesbar; sie benötigen eine niedrige Leuchtdichte.</span>

[WCAG Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#contrast-minimum)

[How to Check Contrast](https://www.w3.org/WAI/test-evaluate/preliminary/#contrast)

[Contrast Tools](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html#visual-audio-contrast-contrast-resources-head)

## Verwenden Sie nicht nur Farbe, um Informationen zu vermitteln

Während Farbe nützlich sein kann, um Informationen zu vermitteln, sollte Farbe nicht der einzige Weg sein, auf dem Informationen vermittelt werden. Wenn Sie Farbe verwenden, um Elemente zu unterscheiden, bieten Sie auch zusätzliche Kennzeichnungen, die nicht auf Farbwahrnehmung beruhen. Verwenden Sie beispielsweise ein Sternchen zusätzlich zur Farbe, um erforderliche Formularfelder anzuzeigen, und verwenden Sie Beschriftungen, um Bereiche in Diagrammen zu unterscheiden.

#### Beispiel: Verwendung von Farbe zur Bedeutungsvermittlung

**Nur Farbe** :x:

<form action="#" method="post">
    <p class="instruction"><span class="required" style="color: #992929;">Required fields are in red</span></p>
    <div class="row" style="margin-bottom: 10px">
        <label for="name1">Name</label> <input style="border: solid 1px #d8d8d8" type="text" id="name1" name="name">
    </div>
    <div class="row">
        <label class="required" style="color: #992929;" for="email1">Email</label> <input style="border: solid 1px #d8d8d8" type="text" id="email1" name="email">
    </div>
</form>

---

**Farbe und Symbol** :white_check_mark:

<form action="#" method="post">
    <p class="instruction"><span class="required" style="color: #992929;">Required fields are in red</span></p>
    <div class="row" style="margin-bottom: 10px">
        <label for="name1" style="width: 250px">Name</label> <input style="border: solid 1px #d8d8d8" type="text" id="name1" name="name">
    </div>
    <div class="row">
        <label class="required" style="color: #992929;" for="email1">Email *</label> <input style="border: solid 1px #d8d8d8" type="text" id="email1" name="email">
    </div>
</form>

[WCAG Benutzung von Farbe](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#use-of-color)

## Stellen Sie sicher, dass interaktive Elemente leicht zu identifizieren sind

Stellen Sie für interaktive Elemente wie Links und Schaltflächen eindeutige Stile bereit, damit sie leicht zu identifizieren sind. Ändern Sie beispielsweise das Erscheinungsbild von Links bei Mausüberfahrt, Tastaturfokus und Touchscreen-Aktivierung. Stellen Sie sicher, dass Stile und Bezeichnungen für interaktive Elemente auf der gesamten Website einheitlich verwendet werden.

**Style Links, um sich vom Text abzuheben** :white_check_mark:  
Einige Menschen können keine Maus verwenden <a href="/" style="text-decoration: underline;">und navigieren nur mit der Tastatur</a> durch Webseiten.

**Für jedes fokussierbare Element auf der Webseite** :white_check_mark:

- Setzen Sie den Fokus auf das Steuerelement
- Überprüfen Sie, ob der Benutzeragent das Steuerelement auf irgendeine Weise hervorgehoben hat

[WCAG Focus visible](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#focus-visible)

**Consistent Identification Level AA** :white_check_mark:  
Komponenten, die auf mehreren Webseiten dieselbe Funktionalität haben, werden einheitlich identifiziert.

[WCAG Consistent Identification](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=324#consistent-identification)

## Bieten Sie klare und konsistente Navigationsoptionen

Stellen Sie sicher, dass die Navigation auf den Seiten einer Website konsistente Benennungen, Stile und Positionierungen aufweist. Bieten Sie mehr als eine Methode zur Navigation auf der Website an, wie z. B. eine Site-Suche oder eine Sitemap. Helfen Sie den Benutzern zu verstehen, wo sie sich auf einer Website oder Seite befinden, indem Sie Orientierungshilfen wie Brotkrumen und klare Überschriften bereitstellen.

[WCAG Consistent Navigation](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=323#consistent-navigation)
[WCAG Multiple Ways](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=245#multiple-ways)

## Stellen Sie sicher, dass Formularelemente klar zugeordnete Beschriftungen enthalten

Stellen Sie sicher, dass alle Felder eine beschreibende Beschriftung haben, die sich in der Nähe des Feldes befindet. Für von links nach rechts lesende Sprachen werden Beschriftungen normalerweise links oder oberhalb des Feldes positioniert, außer bei Kontrollkästchen und Optionsfeldern, bei denen sie normalerweise rechts stehen. Vermeiden Sie zu viel Platz zwischen Beschriftungen und Feldern.

[Labels oder Instruktionen](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=332#labels-or-instructions)

## Bieten Sie leicht erkennbare Rückmeldungen

Bieten Sie Rückmeldungen für Interaktionen an, wie z. B. die Bestätigung der Formularübermittlung, das Warnen des Benutzers, wenn etwas schiefgeht, oder das Benachrichtigen des Benutzers über Änderungen auf der Seite. Anweisungen sollten leicht zu erkennen sein. Wichtige Rückmeldungen, die eine Benutzeraktion erfordern, sollten in einem auffälligen Stil präsentiert werden.

[Bieten Sie leicht erkennbare Rückmeldungen](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#error-identification)

[Labels oder Instruktionen](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=332#labels-or-instructions)

[Fehler Rückmeldungen](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#error-suggestion)

## Verwenden Sie Überschriften und Abstände, um verwandte Inhalte zu gruppieren

Verwenden Sie Leerraum und Nähe, um Beziehungen zwischen Inhalten deutlicher zu machen. Gestalten Sie Überschriften, um Inhalte zu gruppieren, Unordnung zu reduzieren und das Scannen und Verstehen zu erleichtern.

[WCAG Headings und Labels](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#headings-and-labels)

[WCAG Abschnittsüberschriften](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#section-headings)

## Erstellen Sie Designs für verschiedene Ansichtsgrößen

Berücksichtigen Sie, wie Seiteninformationen in unterschiedlich großen Ansichtsfenstern, wie z. B. Mobiltelefonen oder vergrößerten Browserfenstern, dargestellt werden. Die Position und Präsentation der Hauptelemente, wie Kopfzeile und Navigation, können geändert werden, um den verfügbaren Platz optimal zu nutzen. Stellen Sie sicher, dass die Textgröße und die Zeilenbreite so eingestellt sind, dass die Lesbarkeit und Verständlichkeit maximiert werden.

Die Anzeige in einem breiten Fenster mit kleinem Text verwendet mehrere Spalten für primäre Inhalte, sichtbare Navigationsoptionen und sichtbare sekundäre Informationen.

Die Anzeige in einem schmalen Fenster, wie z. B. einem Mobiltelefon, oder mit großem Text verwendet eine einzelne Spalte für primäre Inhalte, Navigationsoptionen werden über ein Symbol angezeigt, und sekundäre Informationen werden ebenfalls über ein Symbol angezeigt.

[Design für Mobile Geräte](https://www.w3.org/TR/mobile-accessibility-mapping/#h-small-screen-size)

## Schließen Sie Bild- und Medienalternativen in Ihr Design ein

Stellen Sie in Ihrem Design Platz für Alternativen zu Bildern und Medien bereit. Zum Beispiel könnten Sie benötigen:

Sichtbare Links zu Transkripten von Audiodateien
Sichtbare Links zu audiobeschriebenen Versionen von Videos
Text zusammen mit Symbolen und grafischen Schaltflächen
Beschriftungen und Beschreibungen für Tabellen oder komplexe Grafiken
Arbeiten Sie mit Inhaltsautoren und Entwicklern zusammen, um Alternativen für nicht-textliche Inhalte bereitzustellen.

[Non-text Content 1.1.1](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1&showtechniques=111#non-text-content)

## Bieten Sie Steuerungen für Inhalte, die automatisch starten

Stellen Sie sichtbare Steuerungen bereit, mit denen Benutzer Animationen oder automatisch abgespielte Sounds stoppen können. Dies gilt für Karussells, Bildslider, Hintergrundgeräusche und Videos.

[Audio Control](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#audio-control)

[Paus, Stop, Hide 2.2.2](https://www.w3.org/WAI/WCAG22/quickref/?versions=2.1#pause-stop-hide)

[Carousel Principles](https://www.w3.org/WAI/tutorials/carousels/)
