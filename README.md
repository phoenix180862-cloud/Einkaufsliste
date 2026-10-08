# 🛒 Einkaufsliste

Gemeinsame Einkaufsliste für zwei (oder mehr) Handys – **Echtzeit-Abgleich** über Firebase.
Trägt einer etwas ein, erscheint es beim anderen sofort (mit gelber „NEU“-Markierung und kurzem Vibrieren),
auch wenn der andere gerade schon im Laden steht.

## Funktionen
- Artikel eintippen → **+** (Vorschläge aus früheren Einkäufen)
- Antippen = abhaken („Im Wagen“), nochmal antippen = zurück
- ✕ = löschen (mit „Rückgängig“)
- „Erledigte entfernen“ räumt nach dem Einkauf auf
- Anzeige, wer was wann eingetragen/abgehakt hat
- Grüner Punkt „live“ = verbunden; „offline“ = Änderungen werden nachgereicht
- Als App installierbar (Startbildschirm), Hell/Dunkel automatisch

## Auf dem Handy installieren
- **Android (Chrome):** Seite öffnen → Menü ⋮ → „Zum Startbildschirm hinzufügen“ / „App installieren“
- **iPhone (Safari):** Seite öffnen → Teilen-Symbol → „Zum Home-Bildschirm“

## Einrichtung (einmalig)
1. In `firebase-config.js` den `apiKey` (und `appId`, `messagingSenderId`) eintragen –
   Firebase-Konsole → Projekt **einkaufsliste-98199** → Projekteinstellungen → Meine Apps → Web-App → Konfiguration.
2. Firebase-Konsole → **Authentication → Sign-in method → Anonym** aktivieren.
3. Firebase-Konsole → **Realtime Database → Regeln** → Inhalt von `database.rules.json` einfügen → Veröffentlichen.

Die Daten liegen in der Realtime Database unter `/liste/artikel` (Einträge) und `/liste/verlauf` (Vorschläge).
