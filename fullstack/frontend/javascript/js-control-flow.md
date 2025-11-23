# Control Flow

Mit Kontrollstrukturen steuert man den Ablauf eines Programms. Sie sind essenziell für Logik und Entscheidungsfindung.

## Beispiele
```javascript
// if/else
if (true) {
  console.log("Wahr");
} else {
  console.log("Falsch");
}

// switch
let tag = "Montag";
switch (tag) {
  case "Montag":
    console.log("Wochenstart");
    break;
  default:
    console.log("Anderer Tag");
}

// for-Schleife
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// while-Schleife
let n = 0;
while (n < 3) {
  n++;
}
```
