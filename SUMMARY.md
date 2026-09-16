# Autobahn App API

Was passiert auf Deutschlands Bundesstraßen? API für aktuelle Verwaltungsdaten zu Baustellen, Staus und Ladestationen. Außerdem Zugang zu Verkehrsüberwachungskameras und vielen weiteren Datensätzen.

## Start here

This guide introduces the API, the client libraries, and the companion tools in this repository. Start with the API capabilities, choose a client for your application, and use the linked reference when you need exact request and response details.

The selected API surface contains 7 entities and 13 HTTP routes. There are 6 SDK targets and 2 companion tools.

An entity groups related API operations. An operation can have several routes with different inputs or authentication requirements. The SDK exposes the entity and its operations using the conventions of the selected language.

## What the API provides

### Closure

Results: Success; Not found.

SDK operations: `list`, `load`.

### ElectricChargingStation

Results: Success; Not found.

SDK operations: `list`, `load`.

Key fields to recognise:

- `coordinate`: Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). Identisch zu Point, jedoch sind rundungsbedingte Abweichungen möglich.
- `extent`: Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.
- `icon`: Sinnbild, das die Art des Eintrags beschreibt. Größtenteils sind diese dem offiziellen Verkehrszeichenkatalog entnommen, teilweise allerdings mit abweichender Bedeutung und/oder nicht offiziellen Unternummern. Wo kein passendes Verkehrszeichen existiert, werden nicht-numerische Werte verwendet: &lt;ul&gt; &lt;li&gt;101: Gefahr&lt;/li&gt; &lt;li&gt;123: Bauarbeiten&lt;/li&gt; &lt;li&gt;250: Sperrung&lt;/li&gt; &lt;li&gt;262-2: Max. 3,5t&lt;/li&gt; &lt;li&gt;314-50: Park-/Rastplatz (Pkw/Lkw)&lt;/li&gt; &lt;li&gt;314-50-2: Park-/Rastplatz (nur Pkw)&lt;/li&gt; &lt;li&gt;448: Anschlussstelle gesperrt&lt;/li&gt; &lt;li&gt;charging_plug_strong: Schnellladestation für E-Fahrzeuge&lt;/li&gt; &lt;li&gt;warnkegel: Kurzzeitbaustelle&lt;/li&gt; &lt;/ul&gt;
- `point`: Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). Identisch zu Coordinate, jedoch sind rundungsbedingte Abweichungen möglich.

### ListAutobahnen

Results: Success.

SDK operations: `list`.

### ParkingLorry

Results: Success; Not found.

SDK operations: `list`, `load`.

Key fields to recognise:

- `coordinate`: Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). Identisch zu Point, jedoch sind rundungsbedingte Abweichungen möglich.
- `extent`: Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.
- `icon`: Sinnbild, das die Art des Eintrags beschreibt. Größtenteils sind diese dem offiziellen Verkehrszeichenkatalog entnommen, teilweise allerdings mit abweichender Bedeutung und/oder nicht offiziellen Unternummern. Wo kein passendes Verkehrszeichen existiert, werden nicht-numerische Werte verwendet: &lt;ul&gt; &lt;li&gt;101: Gefahr&lt;/li&gt; &lt;li&gt;123: Bauarbeiten&lt;/li&gt; &lt;li&gt;250: Sperrung&lt;/li&gt; &lt;li&gt;262-2: Max. 3,5t&lt;/li&gt; &lt;li&gt;314-50: Park-/Rastplatz (Pkw/Lkw)&lt;/li&gt; &lt;li&gt;314-50-2: Park-/Rastplatz (nur Pkw)&lt;/li&gt; &lt;li&gt;448: Anschlussstelle gesperrt&lt;/li&gt; &lt;li&gt;charging_plug_strong: Schnellladestation für E-Fahrzeuge&lt;/li&gt; &lt;li&gt;warnkegel: Kurzzeitbaustelle&lt;/li&gt; &lt;/ul&gt;
- `point`: Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). Identisch zu Coordinate, jedoch sind rundungsbedingte Abweichungen möglich.

### Roadwork

Results: Success; Not found.

SDK operations: `list`, `load`.

### Warning

Results: Success; Not found.

SDK operations: `list`, `load`.

### Webcam

Results: Success; Not found.

SDK operations: `list`, `load`.

Key fields to recognise:

- `coordinate`: Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). Identisch zu Point, jedoch sind rundungsbedingte Abweichungen möglich.
- `extent`: Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.
- `icon`: Sinnbild, das die Art des Eintrags beschreibt. Größtenteils sind diese dem offiziellen Verkehrszeichenkatalog entnommen, teilweise allerdings mit abweichender Bedeutung und/oder nicht offiziellen Unternummern. Wo kein passendes Verkehrszeichen existiert, werden nicht-numerische Werte verwendet: &lt;ul&gt; &lt;li&gt;101: Gefahr&lt;/li&gt; &lt;li&gt;123: Bauarbeiten&lt;/li&gt; &lt;li&gt;250: Sperrung&lt;/li&gt; &lt;li&gt;262-2: Max. 3,5t&lt;/li&gt; &lt;li&gt;314-50: Park-/Rastplatz (Pkw/Lkw)&lt;/li&gt; &lt;li&gt;314-50-2: Park-/Rastplatz (nur Pkw)&lt;/li&gt; &lt;li&gt;448: Anschlussstelle gesperrt&lt;/li&gt; &lt;li&gt;charging_plug_strong: Schnellladestation für E-Fahrzeuge&lt;/li&gt; &lt;li&gt;warnkegel: Kurzzeitbaustelle&lt;/li&gt; &lt;/ul&gt;
- `point`: Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). Identisch zu Coordinate, jedoch sind rundungsbedingte Abweichungen möglich.

### Route map

Use this map to locate a capability. Consult the entity reference before supplying request data; routes for the same operation can require different fields.

| Entity | SDK operation | HTTP route | Authentication |
| --- | --- | --- | --- |
| Closure | `list` | `GET /{roadId}/services/closure` | See reference |
| Closure | `load` | `GET /details/closure/{closureId}` | See reference |
| ElectricChargingStation | `list` | `GET /{roadId}/services/electric_charging_station` | See reference |
| ElectricChargingStation | `load` | `GET /details/electric_charging_station/{stationId}` | See reference |
| ListAutobahnen | `list` | `GET /` | See reference |
| ParkingLorry | `list` | `GET /{roadId}/services/parking_lorry` | See reference |
| ParkingLorry | `load` | `GET /details/parking_lorry/{lorryId}` | See reference |
| Roadwork | `list` | `GET /{roadId}/services/roadworks` | See reference |
| Roadwork | `load` | `GET /details/roadworks/{roadworkId}` | See reference |
| Warning | `list` | `GET /{roadId}/services/warning` | See reference |
| Warning | `load` | `GET /details/warning/{warningId}` | See reference |
| Webcam | `list` | `GET /{roadId}/services/webcam` | See reference |
| Webcam | `load` | `GET /details/webcam/{webcamId}` | See reference |

## Connect to the API

- API server: `https://verkehr.autobahn.de/o/autobahn`

Check authentication for the route you plan to call. A route that declares no authentication can be used without credentials; this does not change the requirements of other routes. Keep credentials in environment variables or a configured secret provider, and keep them out of source control and logs.

## Make a first request

1. Choose the API server and an operation that matches your task.
2. Check the operation’s required input and authentication. Use values valid for your account and environment.
3. Send one request and inspect the returned data before adding retries, concurrency, or a larger batch.

For an SDK call, install or build the chosen client, create a client instance with its documented configuration, and call the required entity operation. Language references describe the argument shape, asynchronous behaviour, and returned values.

## Choose an SDK

Choose the language already used by your application or service. The clients represent the same API model, while package setup, naming, and return types follow each language. Check the selected client’s reference and tests before integrating it into an existing application.

| Client | Repository directory | Distribution |
| --- | --- | --- |
| Golang | `go/` | Build from source |
| Lua | `lua/` | Build from source |
| PHP | `php/` | Build from source |
| Python | `py/` | Build from source |
| Ruby | `rb/` | Build from source |
| TypeScript | `ts/` | Build from source |

Build-from-source entries are not marked as published in the project model. Follow the build instructions in that target’s README, then consume the resulting package using your language’s local dependency mechanism. Published entries give the installation command recorded for that client.

## Companion tools

These targets provide another way to use the API. Their available commands or tools can cover a smaller set of operations than the client libraries.

### Go CLI

Use the command-line interface for shell-based tasks and scripts.

Repository directory: `go-cli/`. Not published. Build from the go-cli directory.


### Go MCP server

Use the MCP server to expose supported API operations to an MCP client.

Repository directory: `go-mcp/`. Not published. Build from the go-mcp directory.

- `autobahn-api-de_list`: List records for an entity. Supported entities: `closure`, `electric_charging_station`, `list_autobahnen`, `parking_lorry`, `roadwork`, `warning`, `webcam`.
- `autobahn-api-de_load`: Load one record for an entity. Supported entities: `closure`, `electric_charging_station`, `parking_lorry`, `roadwork`, `warning`, `webcam`.

## Operational features

Features supply behaviour around API calls, such as request handling, diagnostics, or local testing. Inclusion in this project does not mean a feature is enabled at runtime. Check the selected SDK’s supported features and configuration defaults, then enable the behaviour your application needs.

- `ratelimit`: Client-side rate limiting via a token bucket
- `retry`: Automatic retry of transient failures with exponential backoff
- `test`: In-memory mock transport for testing without a live server
- `timeout`: Per-request timeout with transport abort

Start with the default client configuration. Add request limits and diagnostics as needed, test error paths, and review retry behaviour before using operations that change data. A retry can repeat an operation unless the API provides a suitable guarantee.

## Continue with the documentation

- Follow the first-call guide for the setup sequence.
- Read the authentication guide before using protected routes.
- Use the API reference for request schemas, response formats, and status codes.
- Check the chosen SDK or companion tool reference for its configuration and supported operations.

