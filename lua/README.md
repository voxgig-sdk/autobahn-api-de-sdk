# AutobahnApiDe Lua SDK



The Lua SDK for the AutobahnApiDe API — an entity-oriented client using Lua conventions.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to LuaRocks. Install it from the
GitHub release tag (`lua/vX.Y.Z`, see [Releases](https://github.com/voxgig-sdk/autobahn-api-de-sdk/releases)),
or add the source directory to your `LUA_PATH`:

```bash
export LUA_PATH="path/to/lua/?.lua;path/to/lua/?/init.lua;;"
```


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```lua
local sdk = require("autobahn-api-de_sdk")

local client = sdk.new()
```

### 2. List closure records

Entity operations return `(value, err)`. For `list`, `value` is the
array of records itself — iterate it directly (there is no wrapper).

```lua
local closures, err = client:Closure():list()
if err then error(err) end

for _, item in ipairs(closures) do
  print(item["id"], item["name"])
end
```

### 3. Load a closure

```lua
local closure, err = client:Closure():load({ id = "example_id" })
if err then error(err) end
print(closure)
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```lua
local result, err = client:direct({
  path = "/api/resource/{id}",
  method = "GET",
  params = { id = "example" },
})
if err then error(err) end

if result["ok"] then
  print(result["status"])  -- 200
  print(result["data"])    -- response body
end
```

### Prepare a request without sending it

```lua
local fetchdef, err = client:prepare({
  path = "/api/resource/{id}",
  method = "DELETE",
  params = { id = "example" },
})
if err then error(err) end

print(fetchdef["url"])
print(fetchdef["method"])
print(fetchdef["headers"])
```

### Use test mode

Create a mock client for unit testing — no server required:

```lua
local client = sdk.test()

local result, err = client:Closure():load({ id = "test01" })
-- result is the loaded data; err is set on failure
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```lua
local function mock_fetch(url, init)
  return {
    status = 200,
    statusText = "OK",
    headers = {},
    json = function()
      return { id = "mock01" }
    end,
  }, nil
end

local client = sdk.new({
  base = "http://localhost:8080",
  system = {
    fetch = mock_fetch,
  },
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
AUTOBAHN_API_DE_TEST_LIVE=TRUE
```

Then run:

```bash
cd lua && busted test/
```


## Reference

### AutobahnApiDeSDK

```lua
local sdk = require("autobahn-api-de_sdk")
local client = sdk.new(options)
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `table` | Feature activation flags. |
| `extend` | `table` | Additional Feature instances to load. |
| `system` | `table` | System overrides (e.g. custom `fetch` function). |

### test

```lua
local client = sdk.test(testopts, sdkopts)
```

Creates a test-mode client with mock transport. Both arguments may be `nil`.

### AutobahnApiDeSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `() -> table` | Deep copy of current SDK options. |
| `get_utility` | `() -> Utility` | Copy of the SDK utility object. |
| `prepare` | `(fetchargs) -> table, err` | Build an HTTP request definition without sending. |
| `direct` | `(fetchargs) -> table, err` | Build and send an HTTP request. |
| `Closure` | `(data) -> ClosureEntity` | Create a Closure entity instance. |
| `ElectricChargingStation` | `(data) -> ElectricChargingStationEntity` | Create an ElectricChargingStation entity instance. |
| `ListAutobahnen` | `(data) -> ListAutobahnenEntity` | Create a ListAutobahnen entity instance. |
| `ParkingLorry` | `(data) -> ParkingLorryEntity` | Create a ParkingLorry entity instance. |
| `Roadwork` | `(data) -> RoadworkEntity` | Create a Roadwork entity instance. |
| `Warning` | `(data) -> WarningEntity` | Create a Warning entity instance. |
| `Webcam` | `(data) -> WebcamEntity` | Create a Webcam entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `(reqmatch, ctrl) -> any, err` | Load a single entity by match criteria. |
| `list` | `(reqmatch, ctrl) -> any, err` | List entities matching the criteria. |
| `create` | `(reqdata, ctrl) -> any, err` | Create a new entity. |
| `update` | `(reqdata, ctrl) -> any, err` | Update an existing entity. |
| `remove` | `(reqmatch, ctrl) -> any, err` | Remove an entity. |
| `data_get` | `() -> table` | Get entity data. |
| `data_set` | `(data)` | Set entity data. |
| `match_get` | `() -> table` | Get entity match criteria. |
| `match_set` | `(match)` | Set entity match criteria. |
| `make` | `() -> Entity` | Create a new instance with the same options. |
| `get_name` | `() -> string` | Return the entity name. |

### Result shape

Entity operations return `(value, err)`. The `value` is the operation's
data **directly** — there is no wrapper:

| Operation | `value` |
| --- | --- |
| `load` / `create` / `update` / `remove` | the entity record (a `table`) |
| `list` | an array (`table`) of entity records |

Check `err` first (it is non-`nil` on failure), then use `value`:

    local closure, err = client:Closure():load({ id = "example_id" })
    if err then error(err) end
    -- closure is the loaded record

Only `direct()` returns a response envelope — a `table` with `ok`,
`status`, `headers`, and `data` keys.

### Entities

#### Closure

| Field | Description |
| --- | --- |
| `coordinate` |  |
| `description` |  |
| `display_type` |  |
| `extent` |  |
| `footer` |  |
| `future` |  |
| `icon` |  |
| `identifier` |  |
| `is_blocked` |  |
| `lorry_parking_feature_icon` |  |
| `point` |  |
| `route_recommendation` |  |
| `start_timestamp` |  |
| `subtitle` |  |
| `title` |  |

Operations: List, Load.

API path: `/{roadId}/services/closure`

#### ElectricChargingStation

| Field | Description |
| --- | --- |
| `coordinate` |  |
| `description` |  |
| `display_type` |  |
| `extent` |  |
| `footer` |  |
| `future` |  |
| `icon` |  |
| `identifier` |  |
| `is_blocked` |  |
| `lorry_parking_feature_icon` |  |
| `point` |  |
| `route_recommendation` |  |
| `subtitle` |  |
| `title` |  |

Operations: List, Load.

API path: `/{roadId}/services/electric_charging_station`

#### ListAutobahnen

| Field | Description |
| --- | --- |
| `road` |  |

Operations: List.

API path: `/`

#### ParkingLorry

| Field | Description |
| --- | --- |
| `coordinate` |  |
| `description` |  |
| `display_type` |  |
| `extent` |  |
| `footer` |  |
| `future` |  |
| `icon` |  |
| `identifier` |  |
| `is_blocked` |  |
| `lorry_parking_feature_icon` |  |
| `point` |  |
| `route_recommendation` |  |
| `subtitle` |  |
| `title` |  |

Operations: List, Load.

API path: `/{roadId}/services/parking_lorry`

#### Roadwork

| Field | Description |
| --- | --- |
| `coordinate` |  |
| `description` |  |
| `display_type` |  |
| `extent` |  |
| `footer` |  |
| `future` |  |
| `icon` |  |
| `identifier` |  |
| `is_blocked` |  |
| `lorry_parking_feature_icon` |  |
| `point` |  |
| `route_recommendation` |  |
| `start_timestamp` |  |
| `subtitle` |  |
| `title` |  |

Operations: List, Load.

API path: `/{roadId}/services/roadworks`

#### Warning

| Field | Description |
| --- | --- |
| `coordinate` |  |
| `description` |  |
| `display_type` |  |
| `extent` |  |
| `footer` |  |
| `future` |  |
| `icon` |  |
| `identifier` |  |
| `is_blocked` |  |
| `lorry_parking_feature_icon` |  |
| `point` |  |
| `route_recommendation` |  |
| `start_timestamp` |  |
| `subtitle` |  |
| `title` |  |

Operations: List, Load.

API path: `/{roadId}/services/warning`

#### Webcam

| Field | Description |
| --- | --- |
| `coordinate` |  |
| `description` |  |
| `display_type` |  |
| `extent` |  |
| `footer` |  |
| `future` |  |
| `icon` |  |
| `identifier` |  |
| `imageurl` |  |
| `is_blocked` |  |
| `linkurl` |  |
| `lorry_parking_feature_icon` |  |
| `operator` |  |
| `point` |  |
| `route_recommendation` |  |
| `subtitle` |  |
| `title` |  |

Operations: List, Load.

API path: `/{roadId}/services/webcam`



## Entities


### Closure

Create an instance: `local closure = client:Closure(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coordinate` | ``$OBJECT`` |  |
| `description` | ``$ARRAY`` |  |
| `display_type` | ``$STRING`` |  |
| `extent` | ``$STRING`` |  |
| `footer` | ``$ARRAY`` |  |
| `future` | ``$BOOLEAN`` |  |
| `icon` | ``$STRING`` |  |
| `identifier` | ``$STRING`` |  |
| `is_blocked` | ``$BOOLEAN`` |  |
| `lorry_parking_feature_icon` | ``$ARRAY`` |  |
| `point` | ``$STRING`` |  |
| `route_recommendation` | ``$ARRAY`` |  |
| `start_timestamp` | ``$STRING`` |  |
| `subtitle` | ``$STRING`` |  |
| `title` | ``$STRING`` |  |

#### Example: Load

```lua
local closure, err = client:Closure():load({ id = "closure_id" })
```

#### Example: List

```lua
local closures, err = client:Closure():list()
```


### ElectricChargingStation

Create an instance: `local electric_charging_station = client:ElectricChargingStation(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coordinate` | ``$OBJECT`` |  |
| `description` | ``$ARRAY`` |  |
| `display_type` | ``$STRING`` |  |
| `extent` | ``$STRING`` |  |
| `footer` | ``$ARRAY`` |  |
| `future` | ``$BOOLEAN`` |  |
| `icon` | ``$STRING`` |  |
| `identifier` | ``$STRING`` |  |
| `is_blocked` | ``$BOOLEAN`` |  |
| `lorry_parking_feature_icon` | ``$ARRAY`` |  |
| `point` | ``$STRING`` |  |
| `route_recommendation` | ``$ARRAY`` |  |
| `subtitle` | ``$STRING`` |  |
| `title` | ``$STRING`` |  |

#### Example: Load

```lua
local electric_charging_station, err = client:ElectricChargingStation():load({ id = "electric_charging_station_id" })
```

#### Example: List

```lua
local electric_charging_stations, err = client:ElectricChargingStation():list()
```


### ListAutobahnen

Create an instance: `local list_autobahnen = client:ListAutobahnen(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `road` | ``$ARRAY`` |  |

#### Example: List

```lua
local list_autobahnens, err = client:ListAutobahnen():list()
```


### ParkingLorry

Create an instance: `local parking_lorry = client:ParkingLorry(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coordinate` | ``$OBJECT`` |  |
| `description` | ``$ARRAY`` |  |
| `display_type` | ``$STRING`` |  |
| `extent` | ``$STRING`` |  |
| `footer` | ``$ARRAY`` |  |
| `future` | ``$BOOLEAN`` |  |
| `icon` | ``$STRING`` |  |
| `identifier` | ``$STRING`` |  |
| `is_blocked` | ``$BOOLEAN`` |  |
| `lorry_parking_feature_icon` | ``$ARRAY`` |  |
| `point` | ``$STRING`` |  |
| `route_recommendation` | ``$ARRAY`` |  |
| `subtitle` | ``$STRING`` |  |
| `title` | ``$STRING`` |  |

#### Example: Load

```lua
local parking_lorry, err = client:ParkingLorry():load({ id = "parking_lorry_id" })
```

#### Example: List

```lua
local parking_lorrys, err = client:ParkingLorry():list()
```


### Roadwork

Create an instance: `local roadwork = client:Roadwork(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coordinate` | ``$OBJECT`` |  |
| `description` | ``$ARRAY`` |  |
| `display_type` | ``$STRING`` |  |
| `extent` | ``$STRING`` |  |
| `footer` | ``$ARRAY`` |  |
| `future` | ``$BOOLEAN`` |  |
| `icon` | ``$STRING`` |  |
| `identifier` | ``$STRING`` |  |
| `is_blocked` | ``$BOOLEAN`` |  |
| `lorry_parking_feature_icon` | ``$ARRAY`` |  |
| `point` | ``$STRING`` |  |
| `route_recommendation` | ``$ARRAY`` |  |
| `start_timestamp` | ``$STRING`` |  |
| `subtitle` | ``$STRING`` |  |
| `title` | ``$STRING`` |  |

#### Example: Load

```lua
local roadwork, err = client:Roadwork():load({ id = "roadwork_id" })
```

#### Example: List

```lua
local roadworks, err = client:Roadwork():list()
```


### Warning

Create an instance: `local warning = client:Warning(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coordinate` | ``$OBJECT`` |  |
| `description` | ``$ARRAY`` |  |
| `display_type` | ``$STRING`` |  |
| `extent` | ``$STRING`` |  |
| `footer` | ``$ARRAY`` |  |
| `future` | ``$BOOLEAN`` |  |
| `icon` | ``$STRING`` |  |
| `identifier` | ``$STRING`` |  |
| `is_blocked` | ``$BOOLEAN`` |  |
| `lorry_parking_feature_icon` | ``$ARRAY`` |  |
| `point` | ``$STRING`` |  |
| `route_recommendation` | ``$ARRAY`` |  |
| `start_timestamp` | ``$STRING`` |  |
| `subtitle` | ``$STRING`` |  |
| `title` | ``$STRING`` |  |

#### Example: Load

```lua
local warning, err = client:Warning():load({ id = "warning_id" })
```

#### Example: List

```lua
local warnings, err = client:Warning():list()
```


### Webcam

Create an instance: `local webcam = client:Webcam(nil)`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coordinate` | ``$OBJECT`` |  |
| `description` | ``$ARRAY`` |  |
| `display_type` | ``$STRING`` |  |
| `extent` | ``$STRING`` |  |
| `footer` | ``$ARRAY`` |  |
| `future` | ``$BOOLEAN`` |  |
| `icon` | ``$STRING`` |  |
| `identifier` | ``$STRING`` |  |
| `imageurl` | ``$STRING`` |  |
| `is_blocked` | ``$BOOLEAN`` |  |
| `linkurl` | ``$STRING`` |  |
| `lorry_parking_feature_icon` | ``$ARRAY`` |  |
| `operator` | ``$STRING`` |  |
| `point` | ``$STRING`` |  |
| `route_recommendation` | ``$ARRAY`` |  |
| `subtitle` | ``$STRING`` |  |
| `title` | ``$STRING`` |  |

#### Example: Load

```lua
local webcam, err = client:Webcam():load({ id = "webcam_id" })
```

#### Example: List

```lua
local webcams, err = client:Webcam():list()
```


## Explanation

### The operation pipeline

Every entity operation (load, list, create, update, remove) follows a
six-stage pipeline. Each stage fires a feature hook before executing:

```
PrePoint → PreSpec → PreRequest → PreResponse → PreResult → PreDone
```

- **PrePoint**: Resolves which API endpoint to call based on the
  operation name and entity configuration.
- **PreSpec**: Builds the HTTP spec — URL, method, headers, body —
  from the resolved point and the caller's parameters.
- **PreRequest**: Sends the HTTP request. Features can intercept here
  to replace the transport (as TestFeature does with mocks).
- **PreResponse**: Parses the raw HTTP response.
- **PreResult**: Extracts the business data from the parsed response.
- **PreDone**: Final stage before returning to the caller. Entity
  state (match, data) is updated here.

If any stage returns an error, the pipeline short-circuits and the
error is returned to the caller as a second return value.

### Features and hooks

Features are the extension mechanism. A feature is a Lua table
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as tables

The Lua SDK uses plain Lua tables throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `helpers.to_map()` to safely validate that a value is a table.

### Module structure

```
lua/
├── autobahn-api-de_sdk.lua    -- Main SDK module
├── config.lua               -- Configuration
├── features.lua             -- Feature factory
├── core/                    -- Core types and context
├── entity/                  -- Entity implementations
├── feature/                 -- Built-in features (Base, Test, Log)
├── utility/                 -- Utility functions and struct library
└── test/                    -- Test suites
```

The main module (`autobahn-api-de_sdk`) exports the SDK constructor
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```lua
local closure = client:Closure()
closure:load({ id = "example_id" })

-- closure:data_get() now returns the loaded closure data
-- closure:match_get() returns the last match criteria
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

`direct()` gives full control over the HTTP request. Use it for
non-standard endpoints, bulk operations, or any path not modelled as
an entity. `prepare()` builds the request without sending it — useful
for debugging or custom transport.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
