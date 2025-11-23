# Array-Methoden

Arrays sind zentrale Datenstrukturen. Mit Methoden wie map, filter und reduce kann man sie effizient bearbeiten.

## Beispiele
```javascript
// map
const zahlen = [1, 2, 3].map(x => x * 2);

// filter
const gerade = [1, 2, 3, 4].filter(x => x % 2 === 0);

// reduce
const summe = [1, 2, 3].reduce((acc, x) => acc + x, 0);

// find
const gefunden = [1, 2, 3].find(x => x === 2);
```

### ForEach Mapping
```Javascript
// Using Map to store events by their ID for efficient access
function showEvents(events) {
    const eventMap = new Map();
    events.forEach(event => {
        eventMap.set(event.id, event);
    });
    const container = document.getElementById('events-container');
    eventMap.forEach((event) => {
        const eventDiv = document.createElement('div');
        eventDiv.className = 'event';
        eventDiv.innerHTML = `
            <div>Event ID: ${event.id}</div>
            <h2>Name: ${event.name}</h2>
            <div>Date: ${event.date}</div>
        `;
        container.appendChild(eventDiv);
    });
}
showEvents(events);
```


### ForEach Technics
``` Javascript

function renderEvents(events) {
    parsedEvents.forEach(event => {
            const EventContainer = document.getElementById('events-container');
            const eventDiv = document.createElement('div');
            eventDiv.className = 'event';
            eventDiv.innerHTML = `
                <div>Event ID: ${event.id}</div>
                <h2>Name: ${event.name}</h2>
                <div>Date: ${event.date}</div>
            `;
            EventContainer.appendChild(eventDiv);
            //console.log(`Event ID: ${event.id}, Name: ${event.name}, Date: ${event.date}`);
    });
}
renderEvents(parsedEvents);
```

