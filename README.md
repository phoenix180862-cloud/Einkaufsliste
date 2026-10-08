# 🛒 Einkaufsliste

Gemeinsame Einkaufsliste für zwei (oder mehr) Handys – **Echtzeit-Abgleich** über Firebase.
Trägt einer etwas ein, erscheint es beim anderen sofort (gelbe „NEU“-Markierung, kurzes Vibrieren) –
auch wenn der andere schon im Laden steht.

## Funktionen
- **Liste:** alles, was noch fehlt, gruppiert nach Lebensmittel / Haushalt / Kleidung
- **Kataloge** (Lebensmittel, Haushalt, Kleidung): Artikel nach Kategorien – antippen = auf die Liste, nochmal = runter
- Freitext oben eintippen → **+** (mit Vorschlägen aus den Katalogen)
- In der Liste antippen = abhaken („Im Wagen“), ✕ = löschen (mit „Rückgängig“)
- „Erledigte entfernen“ räumt nach dem Einkauf auf
- Wer hat was wann eingetragen/abgehakt; grüner Punkt „live“ = verbunden
- Als App installierbar, Hell/Dunkel automatisch

## Auf dem Handy installieren
- **Android (Chrome):** Seite öffnen → Menü ⋮ → „App installieren“ / „Zum Startbildschirm hinzufügen“
- **iPhone (Safari):** Seite öffnen → Teilen-Symbol → „Zum Home-Bildschirm“

## Technik
- Firebase-Projekt `einkaufsliste-98199`, Realtime Database (europe-west1), anonyme Anmeldung
- Daten: `/liste/<id>` = `{ id, name, erledigt, typ }` (+ `von`, `ts`, `erledigtVon`, `erledigtTs`) – kompatibel zur bisherigen Liste
- Kataloge (nur lesend): `/lmData`, `/hhData`, `/klData` = `{ Kategorie: [Artikel, …] }`
- **Achtung:** Dieselbe Datenbank nutzt auch die TW Baustellen-App – Sicherheitsregeln nur mit Blick auf beide Apps ändern.
