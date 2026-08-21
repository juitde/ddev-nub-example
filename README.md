# ddev-nub-example

Ein schlankes Beispielprojekt zu [ddev-nub](https://github.com/MetaSyntactical/ddev-nub) --
zum Nachvollziehen, nicht zum Nachbauen. Die Befehle hier entsprechen 1:1 denen aus dem
Blogbeitrag ["Node.js in ddev nicht mehr so zäh: nub und das neue Add-on ddev-nub"](https://www.juit.de/blog/technologie/ddev-nub/).

## Was hier passiert

Zwei kleine, aber echte Node-Jobs für nub:

- Ein winziges Vite-Frontend (`index.html`, `src/main.ts`) -- gebaut über `ddev nubx vite build`.
- Ein TypeScript-Modul mit `enum`, `namespace` und einer Parameter Property
  (`src/demo.ts`) -- Dinge, die Node beim direkten Ausführen einer `.ts`-Datei ablehnt,
  nub aber ohne separaten Transpilationsschritt versteht. `test/demo.test.ts` prüft es
  über `ddev nub run test`.

## Voraussetzungen

- [ddev](https://ddev.com/) ist installiert und läuft.

Das [ddev-nub](https://github.com/MetaSyntactical/ddev-nub)-Add-on ist bereits Teil dieses
Projekts (siehe `.ddev/web-build/Dockerfile.nub`, `.ddev/docker-compose.nub.yaml` und
`.ddev/commands/web/{nub,nubx}`) -- ein eigener `ddev add-on get`-Schritt ist nicht nötig.

## Schnellstart

```bash
git clone <this-repo-url>
cd ddev-nub-example
ddev start
ddev nub install
```

Danach stehen `ddev nub` und `ddev nubx` bereit.

## Die Befehle im Detail

**Build** -- `nubx` als `npx`-Ersatz führt das lokale `vite`-Binary direkt aus `node_modules/.bin` aus:

```bash
ddev nubx vite build
```

**Test** -- der Script-Runner führt den `test`-Eintrag aus `package.json` aus, der wiederum
den Datei-Runner auf `test/demo.test.ts` ansetzt:

```bash
ddev nub run test
```

**Datei-Runner direkt** -- ganz ohne `package.json`-Umweg, die Datei mit `enum`/`namespace`/
Parameter Property wird direkt ausgeführt:

```bash
ddev nub src/demo.ts
```

## Node-Versionsverwaltung

Die Datei [`.node-version`](.node-version) legt die Node-Version fest, mit der nub die obigen
Befehle ausführt -- ganz ohne `nvm` oder manuellen Umweg. `.nvmrc` oder ein `engines`-Feld in
`package.json` funktionieren genauso; nub übernimmt die passende Version bei Bedarf automatisch.

## nub-Version pinnen

Dieses Repository pinnt die nub-Version über [`.ddev/.env.nub`](.ddev/.env.nub), damit ein
Klon in einem Jahr noch genauso baut wie heute. Zum Aktualisieren:

```bash
ddev dotenv set .ddev/.env.nub --nub-version=<version>
ddev restart
```

## Eigene Zeitvergleiche fahren

Die im Blogbeitrag zitierten Beschleunigungsfaktoren sind Herstellerangaben von nub selbst --
mit der üblichen Vorsicht zu genießen, die man Benchmarks des jeweiligen Werkzeugs entgegenbringt.
Ein grober eigener Vergleich braucht nur `time`:

```bash
time ddev nub run test
```

Wer zusätzlich einen Paketmanager wie pnpm im Container installiert (z. B. per `corepack`),
kann denselben Skript-Aufruf darüber gegenrechnen:

```bash
time ddev exec pnpm run test
```

Aussagekräftig wird das erst im eigenen Projekt, mit dessen tatsächlicher Paketanzahl und
CI-Hardware -- hier lässt sich nur das Prinzip zeigen, keine belastbare Zahl.

## Lizenz

[Apache License 2.0](LICENSE)

## Siehe auch

- [ddev-nub](https://github.com/MetaSyntactical/ddev-nub) -- das Add-on, das nub in den
  ddev-Webcontainer bringt.
- [nub](https://nubjs.com/) -- das CLI-Werkzeug selbst.
