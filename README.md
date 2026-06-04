# AutobahnApiDe SDK

Live data on Germany's federal motorways: roadworks, closures, traffic warnings, lorry parking, EV charging and webcams

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

## About Autobahn App API

The Autobahn App API is the public data feed behind the [Autobahn App](https://verkehr.autobahn.de/o/autobahn) operated by [Autobahn GmbH des Bundes](https://www.autobahn.de/), the company that runs Germany's federal motorway network (Bundesautobahnen).

It exposes the same live status information that powers the official app, organised per motorway designation (A1 through A995). For each motorway you can query:

- the list of all Bundesautobahnen currently covered
- current roadworks (Baustellen)
- closures (Sperrungen)
- traffic warnings (Verkehrsmeldungen)
- lorry parking areas (Lkw-Parkplätze)
- electric charging stations along the route
- live traffic webcams

The service is unauthenticated and CORS-enabled, so it can be called directly from browser-based clients. No rate limits are documented in the OpenAPI spec; data is published in German.

## Try it

**TypeScript**
```bash
npm install autobahn-api-de
```

**Python**
```bash
pip install autobahn-api-de-sdk
```

**PHP**
```bash
composer require voxgig/autobahn-api-de-sdk
```

**Golang**
```bash
go get github.com/voxgig-sdk/autobahn-api-de-sdk/go
```

**Ruby**
```bash
gem install autobahn-api-de-sdk
```

**Lua**
```bash
luarocks install autobahn-api-de-sdk
```

## 30-second quickstart

### TypeScript

```ts
import { AutobahnApiDeSDK } from 'autobahn-api-de'

const client = new AutobahnApiDeSDK({})

// List all closures
const closures = await client.Closure().list()
```

See the [TypeScript README](ts/README.md) for the
full guide, or scroll down for the same example in other languages.

## What's in the box

| Surface | Use it for | Path |
| --- | --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | App integration | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | Scripts, CI, ops, one-off API calls | `go-cli/` |
| **MCP server** | AI agents (Claude, Cursor, Cline) | `go-mcp/` |

## Use it from an AI agent (MCP)

The generated MCP server exposes every operation in this SDK as an
[MCP](https://modelcontextprotocol.io) tool that Claude, Cursor or Cline
can call directly. Build and register it:

```bash
cd go-mcp && go build -o autobahn-api-de-mcp .
```

Then add it to your agent's MCP config (Claude Desktop, Cursor, etc.):

```json
{
  "mcpServers": {
    "autobahn-api-de": {
      "command": "/abs/path/to/autobahn-api-de-mcp"
    }
  }
}
```

## Entities

The API exposes 7 entities:

| Entity | Description | API path |
| --- | --- | --- |
| **Closure** | Current full or partial road closures (Sperrungen) on a given Bundesautobahn. | `/{roadId}/services/closure` |
| **ElectricChargingStation** | EV charging stations located on or near the selected motorway, surfaced under the API's `/services/electric_charging_station` grouping. | `/{roadId}/services/electric_charging_station` |
| **ListAutobahnen** | Index of all Bundesautobahnen covered by the API (designations like `A1`, `A2`, ... `A995`), used as the parent identifier for every other entity. | `/` |
| **ParkingLorry** | Lorry / truck parking areas (Lkw-Parkplätze) along the selected motorway. | `/{roadId}/services/parking_lorry` |
| **Roadwork** | Active construction sites (Baustellen) on the selected motorway, including location and status information. | `/{roadId}/services/roadworks` |
| **Warning** | Traffic warnings and incident messages (Verkehrsmeldungen) for the selected motorway. | `/{roadId}/services/warning` |
| **Webcam** | Live traffic webcams positioned along the selected motorway. | `/{roadId}/services/webcam` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
from autobahnapide_sdk import AutobahnApiDeSDK

client = AutobahnApiDeSDK({})

# List all closures
closures, err = client.Closure(None).list(None, None)

# Load a specific closure
closure, err = client.Closure(None).load(
    {"id": "example_id"}, None
)
```

### PHP

```php
<?php
require_once 'autobahnapide_sdk.php';

$client = new AutobahnApiDeSDK([]);

// List all closures
[$closures, $err] = $client->Closure(null)->list(null, null);

// Load a specific closure
[$closure, $err] = $client->Closure(null)->load(
    ["id" => "example_id"], null
);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/autobahn-api-de-sdk/go"

client := sdk.NewAutobahnApiDeSDK(map[string]any{})

// List all closures
closures, err := client.Closure(nil).List(nil, nil)
```

### Ruby

```ruby
require_relative "AutobahnApiDe_sdk"

client = AutobahnApiDeSDK.new({})

# List all closures
closures, err = client.Closure(nil).list(nil, nil)

# Load a specific closure
closure, err = client.Closure(nil).load(
  { "id" => "example_id" }, nil
)
```

### Lua

```lua
local sdk = require("autobahn-api-de_sdk")

local client = sdk.new({})

-- List all closures
local closures, err = client:Closure(nil):list(nil, nil)

-- Load a specific closure
local closure, err = client:Closure(nil):load(
  { id = "example_id" }, nil
)
```

## Unit testing in offline mode

Every SDK ships a test mode that swaps the HTTP transport for an
in-memory mock, so unit tests run offline.

### TypeScript

```ts
const client = AutobahnApiDeSDK.test()
const result = await client.Closure().load({ id: 'test01' })
// result.ok === true, result.data contains mock data
```

### Python

```python
client = AutobahnApiDeSDK.test(None, None)
result, err = client.Closure(None).load(
    {"id": "test01"}, None
)
```

### PHP

```php
$client = AutobahnApiDeSDK::test(null, null);
[$result, $err] = $client->Closure(null)->load(
    ["id" => "test01"], null
);
```

### Golang

```go
client := sdk.TestSDK(nil, nil)
result, err := client.Closure(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = AutobahnApiDeSDK.test(nil, nil)
result, err = client.Closure(nil).load(
  { "id" => "test01" }, nil
)
```

### Lua

```lua
local client = sdk.test(nil, nil)
local result, err = client:Closure(nil):load(
  { id = "test01" }, nil
)
```

## How it works

Every SDK call runs the same five-stage pipeline:

1. **Point** — resolve the API endpoint from the operation definition.
2. **Spec** — build the HTTP specification (URL, method, headers, body).
3. **Request** — send the HTTP request.
4. **Response** — receive and parse the response.
5. **Result** — extract the result data for the caller.

A feature hook fires at each stage (e.g. `PrePoint`, `PreSpec`,
`PreRequest`), so features can inspect or modify the pipeline without
forking the SDK.

### Features

| Feature | Purpose |
| --- | --- |
| **TestFeature** | In-memory mock transport for testing without a live server |

Pass custom features via the `extend` option at construction time.

### Direct and Prepare

For endpoints the entity model doesn't cover, use the low-level methods:

- **`direct(fetchargs)`** — build and send an HTTP request in one step.
- **`prepare(fetchargs)`** — build the request without sending it.

Both accept a map with `path`, `method`, `params`, `query`,
`headers`, and `body`. See the [How-to guides](#how-to-guides) below.

## How-to guides

### Make a direct API call

When the entity interface does not cover an endpoint, use `direct`:

**TypeScript:**
```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})
console.log(result.data)
```

**Python:**
```python
result, err = client.direct({
    "path": "/api/resource/{id}",
    "method": "GET",
    "params": {"id": "example"},
})
```

**PHP:**
```php
[$result, $err] = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);
```

**Go:**
```go
result, err := client.Direct(map[string]any{
    "path":   "/api/resource/{id}",
    "method": "GET",
    "params": map[string]any{"id": "example"},
})
```

**Ruby:**
```ruby
result, err = client.direct({
  "path" => "/api/resource/{id}",
  "method" => "GET",
  "params" => { "id" => "example" },
})
```

**Lua:**
```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
```

## Per-language documentation

- [TypeScript](ts/README.md)
- [Python](py/README.md)
- [PHP](php/README.md)
- [Golang](go/README.md)
- [Ruby](rb/README.md)
- [Lua](lua/README.md)

## Using the Autobahn App API

- Upstream: [https://verkehr.autobahn.de/o/autobahn](https://verkehr.autobahn.de/o/autobahn)
- API docs: [https://autobahn.api.bund.dev/](https://autobahn.api.bund.dev/)

- The API is operated by Autobahn GmbH des Bundes, the German federal motorway company.
- No explicit licence is published in the OpenAPI documentation; treat the data as official public-sector information and check Autobahn GmbH's terms before redistribution.
- Attribution to Autobahn GmbH is a sensible default when reusing the data.

---

Generated from the Autobahn App API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
