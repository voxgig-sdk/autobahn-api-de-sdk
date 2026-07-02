# AutobahnApiDe SDK

Autobahn App API client, generated from the OpenAPI spec.

> TypeScript, Python, PHP, Golang, Ruby, Lua SDKs, a CLI, an interactive REPL, and an MCP server for AI agents — all generated from one OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).

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

## Quickstart

### TypeScript

```ts
import { AutobahnApiDeSDK } from 'autobahn-api-de'

const client = new AutobahnApiDeSDK({
  apikey: process.env.AUTOBAHN-API-DE_APIKEY,
})

// List all closures
const closures = await client.Closure().list()
console.log(closures.data)
```

See the [TypeScript README](ts/README.md) for the full guide.

## Surfaces

| Surface | Path |
| --- | --- |
| **SDK** (TypeScript, Python, PHP, Golang, Ruby, Lua) | `ts/` `py/` `php/` `go/` `rb/` `lua/` |
| **CLI** | `go-cli/` |
| **MCP server** | `go-mcp/` |

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
| **Closure** |  | `/{roadId}/services/closure` |
| **ElectricChargingStation** |  | `/{roadId}/services/electric_charging_station` |
| **ListAutobahnen** |  | `/` |
| **ParkingLorry** |  | `/{roadId}/services/parking_lorry` |
| **Roadwork** |  | `/{roadId}/services/roadworks` |
| **Warning** |  | `/{roadId}/services/warning` |
| **Webcam** |  | `/{roadId}/services/webcam` |

Each entity supports the following operations where available: **load**,
**list**, **create**, **update**, and **remove**.

## Quickstart in other languages

### Python

```python
import os
from autobahnapide_sdk import AutobahnApiDeSDK

client = AutobahnApiDeSDK({
    "apikey": os.environ.get("AUTOBAHN-API-DE_APIKEY"),
})

# List all closures
closures, err = client.Closure().list()
print(closures)

# Load a specific closure
closure, err = client.Closure().load({"id": "example_id"})
print(closure)
```

### PHP

```php
<?php
require_once 'autobahnapide_sdk.php';

$client = new AutobahnApiDeSDK([
    "apikey" => getenv("AUTOBAHN-API-DE_APIKEY"),
]);

// List all closures
[$closures, $err] = $client->Closure()->list();
print_r($closures);

// Load a specific closure
[$closure, $err] = $client->Closure()->load(["id" => "example_id"]);
print_r($closure);
```

### Golang

```go
import sdk "github.com/voxgig-sdk/autobahn-api-de-sdk/go"

client := sdk.NewAutobahnApiDeSDK(map[string]any{
    "apikey": os.Getenv("AUTOBAHN-API-DE_APIKEY"),
})

// List all closures
closures, err := client.Closure(nil).List(nil, nil)
fmt.Println(closures)
```

### Ruby

```ruby
require_relative "AutobahnApiDe_sdk"

client = AutobahnApiDeSDK.new({
  "apikey" => ENV["AUTOBAHN-API-DE_APIKEY"],
})

# List all closures
closures, err = client.Closure().list
puts closures

# Load a specific closure
closure, err = client.Closure().load({ "id" => "example_id" })
puts closure
```

### Lua

```lua
local sdk = require("autobahn-api-de_sdk")

local client = sdk.new({
  apikey = os.getenv("AUTOBAHN-API-DE_APIKEY"),
})

-- List all closures
local closures, err = client:Closure():list()
print(closures)

-- Load a specific closure
local closure, err = client:Closure():load({ id = "example_id" })
print(closure)
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
client = AutobahnApiDeSDK.test()
result, err = client.Closure().load({"id": "test01"})
```

### PHP

```php
$client = AutobahnApiDeSDK::test();
[$result, $err] = $client->Closure()->load(["id" => "test01"]);
```

### Golang

```go
client := sdk.Test()
result, err := client.Closure(nil).Load(
    map[string]any{"id": "test01"}, nil,
)
```

### Ruby

```ruby
client = AutobahnApiDeSDK.test
result, err = client.Closure().load({ "id" => "test01" })
```

### Lua

```lua
local client = sdk.test()
local result, err = client:Closure():load({ id = "test01" })
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

---

Generated from the Autobahn App API OpenAPI spec by [@voxgig/sdkgen](https://github.com/voxgig/sdkgen).
