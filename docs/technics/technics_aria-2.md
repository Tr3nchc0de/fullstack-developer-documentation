---
sidebar: auto
---

# Kennzeichnung eines Pflichtfeldes mit der `aria-required`-Eigenschaft

Das Ziel dieser Technik ist es, eine programmatische Angabe zu liefern, dass ein Formularfeld (das durch die Darstellung als erforderlich angezeigt wird) für die erfolgreiche Einreichung eines Formulars obligatorisch ist.

Die Tatsache, dass das Element erforderlich ist, wird oft visuell dargestellt (durch ein Text- oder Nicht-Text-Symbol oder Text, der angibt, dass die Eingabe erforderlich ist, oder durch Farbe/Stil), aber dies ist programmatisch nicht als Teil des Feldnamens bestimmbar.

Die WAI-ARIA `aria-required`-Eigenschaft gibt an, dass Benutzereingaben vor der Einreichung erforderlich sind. Die aria-required-Eigenschaft kann die Werte `true` oder `false` haben. Zum Beispiel, wenn ein Benutzer ein Adressfeld ausfüllen muss, dann wird `aria-required` auf true gesetzt.

:::tip
Die Verwendung von `aria-required="true"` kann vorteilhaft sein, selbst wenn ein Sternchen oder ein anderes Textsymbol programmatisch mit dem Feld verknüpft ist, da es die erforderliche Eigenschaft für einige Benutzer von unterstützenden Technologien verstärken kann.

Die Tatsache, dass das Element erforderlich ist, wird oft visuell dargestellt (wie ein Zeichen oder Symbol nach der Steuerung). Die Verwendung der `aria-required`-Eigenschaft zusätzlich zur visuellen Darstellung macht es für Benutzeragenten viel einfacher, diese wichtige Information auf benutzerspezifische Weise an den Benutzer weiterzugeben. Weitere Informationen zur Bereitstellung von WAI-ARIA-Zuständen und -Eigenschaften mit HTML finden Sie unter ARIA in HTML. WAI-ARIA-Zustände und -Eigenschaften sind auch mit anderen Sprachen kompatibel; siehe die Dokumentation in diesen Sprachen.
:::

## Beispiel 1: Die `required` Eigenschaft wird durch ein Sternchen im label-Element angezeigt

```html
<form>
  <p>Hinweis: * kennzeichnet ein Pflichtfeld</p>
  <div>
    <label for="usrename">Login-Name *:</label>
    <input
      aria-required="true"
      autocomplete="username"
      id="usrname"
      type="text"
    />
  </div>
  <div>
    <label for="pwd">Passwort *:</label>
    <input
      aria-required="true"
      autocomplete="current-password"
      id="pwd"
      type="password"
    />
  </div>
  <div>
    <input type="submit" value="Login" />
  </div>
</form>
```

## Beispiel 2: Die `required` Eigenschaft wird durch das Wort `required` neben dem `label`-Element angezeigt

```html
<form>
  <div>
    <label for="fname">Vorname:</label> <span>(required)</span>
    <input
      aria-required="true"
      autocomplete="given-name"
      id="fname"
      type="text"
    />
  </div>
  <div>
    <label for="mname">Zweiter Vorname:</label> <span>(required)</span>
    <input autocomplete="additional-name" id="mname" type="text" />
  </div>
  <div>
    <label for="lname">Nachname:</label> <span>(required)</span>
    <input
      aria-required="true"
      autocomplete="family-name"
      id="lname"
      type="text"
    />
  </div>
  <div>
    <label for="email">E-Mail-Adresse:</label> <span>(erforderlich)</span>
    <input aria-required="true" autocomplete="email" id="email" type="text" />
  </div>
  <div>
    <label for="zip_post">Postleitzahl:</label> <span>(erforderlich)</span>
    <input
      aria-required="true"
      autocomplete="postal-code"
      id="zip_post"
      type="text"
    />
  </div>
  <div>
    <input type="submit" value="Nächster Schritt" />
  </div>
</form>
```

## Beispiel 3: Pflichtfelder werden durch einen roten Rand um die Felder und ein Sternchen-Symbol angezeigt, das über CSS mit ::after gerendert wird

Dieses Beispiel verwendet benutzerdefinierte Optionsfelder mit `role=radio`. Die CSS-Eigenschaften sind unter dem Formular verfügbar.

```html
<form>
  <label data-required="true" for="acctnum">Kontonummer</label>
  <input aria-required="true" id="acctnum" type="text" class="required-field" />

  <p data-required="true" id="radio_label">
    Bitte senden Sie eine Benachrichtigung, wenn der Kontostand $3.000
    übersteigt.
  </p>

  <ul aria-required="true" aria-labelledby="radio_label" role="radiogroup">
    <li aria-checked="false" id="rb1" role="radio" tabindex="0">Ja</li>
    <li aria-checked="false" id="rb2" role="radio" tabindex="-1">Nein</li>
  </ul>
</form>

<style>
  .required-field {
    border: 2px solid red;
  }
  [data-required="true"]::after {
    content: "*";
    color: red;
    margin-left: 5px;
  }
</style>
```
