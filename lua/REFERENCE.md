# AutobahnApiDe Lua SDK Reference

Complete API reference for the AutobahnApiDe Lua SDK.


## AutobahnApiDeSDK

### Constructor

```lua
local sdk = require("autobahn-api-de_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
```


### Instance Methods

#### `Closure(data)`

Create a new `Closure` entity instance. Pass `nil` for no initial data.

#### `ElectricChargingStation(data)`

Create a new `ElectricChargingStation` entity instance. Pass `nil` for no initial data.

#### `ListAutobahnen(data)`

Create a new `ListAutobahnen` entity instance. Pass `nil` for no initial data.

#### `ParkingLorry(data)`

Create a new `ParkingLorry` entity instance. Pass `nil` for no initial data.

#### `Roadwork(data)`

Create a new `Roadwork` entity instance. Pass `nil` for no initial data.

#### `Warning(data)`

Create a new `Warning` entity instance. Pass `nil` for no initial data.

#### `Webcam(data)`

Create a new `Webcam` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## ClosureEntity

```lua
local closure = client:Closure(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `table` | No |  |
| `description` | `table` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No |  |
| `footer` | `table` | No |  |
| `future` | `boolean` | No |  |
| `icon` | `string` | No |  |
| `id` | `string` | No |  |
| `identifier` | `string` | No |  |
| `isBlocked` | `string` | No |  |
| `lorryParkingFeatureIcons` | `table` | No |  |
| `point` | `string` | No |  |
| `routeRecommendation` | `table` | No |  |
| `startTimestamp` | `string` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Closure():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Closure():load({ id = "closure_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClosureEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ElectricChargingStationEntity

```lua
local electric_charging_station = client:ElectricChargingStation(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `table` | No | Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). |
| `description` | `table` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No | Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt. |
| `footer` | `table` | No |  |
| `future` | `boolean` | No |  |
| `icon` | `string` | No | Sinnbild, das die Art des Eintrags beschreibt. |
| `id` | `string` | No |  |
| `identifier` | `string` | No |  |
| `isBlocked` | `string` | No |  |
| `lorryParkingFeatureIcons` | `table` | No |  |
| `point` | `string` | No | Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). |
| `routeRecommendation` | `table` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ElectricChargingStation():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ElectricChargingStation():load({ id = "electric_charging_station_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ElectricChargingStationEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ListAutobahnenEntity

```lua
local list_autobahnen = client:ListAutobahnen(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roads` | `table` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ListAutobahnen():list()
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListAutobahnenEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## ParkingLorryEntity

```lua
local parking_lorry = client:ParkingLorry(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `table` | No | Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). |
| `description` | `table` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No | Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt. |
| `footer` | `table` | No |  |
| `future` | `boolean` | No |  |
| `icon` | `string` | No | Sinnbild, das die Art des Eintrags beschreibt. |
| `id` | `string` | No |  |
| `identifier` | `string` | No |  |
| `isBlocked` | `string` | No |  |
| `lorryParkingFeatureIcons` | `table` | No |  |
| `point` | `string` | No | Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). |
| `routeRecommendation` | `table` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:ParkingLorry():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:ParkingLorry():load({ id = "parking_lorry_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ParkingLorryEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## RoadworkEntity

```lua
local roadwork = client:Roadwork(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `table` | No |  |
| `description` | `table` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No |  |
| `footer` | `table` | No |  |
| `future` | `boolean` | No |  |
| `icon` | `string` | No |  |
| `id` | `string` | No |  |
| `identifier` | `string` | No |  |
| `isBlocked` | `string` | No |  |
| `lorryParkingFeatureIcons` | `table` | No |  |
| `point` | `string` | No |  |
| `routeRecommendation` | `table` | No |  |
| `startTimestamp` | `string` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Roadwork():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Roadwork():load({ id = "roadwork_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RoadworkEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WarningEntity

```lua
local warning = client:Warning(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `table` | No |  |
| `description` | `table` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No |  |
| `footer` | `table` | No |  |
| `future` | `boolean` | No |  |
| `icon` | `string` | No |  |
| `id` | `string` | No |  |
| `identifier` | `string` | No |  |
| `isBlocked` | `string` | No |  |
| `lorryParkingFeatureIcons` | `table` | No |  |
| `point` | `string` | No |  |
| `routeRecommendation` | `table` | No |  |
| `startTimestamp` | `string` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Warning():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Warning():load({ id = "warning_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WarningEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## WebcamEntity

```lua
local webcam = client:Webcam(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `table` | No | Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). |
| `description` | `table` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No | Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt. |
| `footer` | `table` | No |  |
| `future` | `boolean` | No |  |
| `icon` | `string` | No | Sinnbild, das die Art des Eintrags beschreibt. |
| `id` | `string` | No |  |
| `identifier` | `string` | No |  |
| `imageurl` | `string` | No |  |
| `isBlocked` | `string` | No |  |
| `linkurl` | `string` | No |  |
| `lorryParkingFeatureIcons` | `table` | No |  |
| `operator` | `string` | No |  |
| `point` | `string` | No | Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). |
| `routeRecommendation` | `table` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Webcam():list()
```

#### `load(reqmatch, ctrl) -> any, err`

Load a single entity matching the given criteria.

```lua
local result, err = client:Webcam():load({ id = "webcam_id" })
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebcamEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `ratelimit` | 0.0.1 | Client-side rate limiting via a token bucket |
| `retry` | 0.0.1 | Automatic retry of transient failures with exponential backoff |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |
| `timeout` | 0.0.1 | Per-request timeout with transport abort |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    ratelimit = { active = true },
    retry = { active = true },
    test = { active = true },
    timeout = { active = true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### Ordering

`ratelimit`, `retry`, `timeout` wrap the transport. Each
wraps whatever is already installed, so **activation order is nesting order**:
a feature activated later sits OUTSIDE one activated earlier, and sees the call
first.

That decides behaviour, not just sequence: a feature that short-circuits the
call, such as a cache serving a hit, stops every feature nested inside it from
ever seeing that call.

`test` attach to pipeline hooks
rather than the transport, so their order does not affect what they observe.

#### `ratelimit`

Client-side rate limiting via a token bucket.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `burst` | `5` |
| `rate` | `5` |

| Option | Type |
|---|---|
| `now` | function |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.ratelimit.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `retry`

Automatic retry of transient failures with exponential backoff.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `factor` | `2` |
| `maxDelay` | `2000` |
| `minDelay` | `50` |
| `retries` | `2` |
| `statuses` | `[408, 425, 429, 500, 502, 503, 504]` |

| Option | Type |
|---|---|
| `jitter` | boolean |
| `sleep` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.retry.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

| Option | Type |
|---|---|
| `entity` | map |
| `net` | map |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

#### `timeout`

Per-request timeout with transport abort.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |
| `ms` | `30000` |

| Option | Type |
|---|---|
| `clearTimer` | function |
| `setTimer` | function |

These take no default: the feature behaves one way when you supply them and
another when you do not.

**Usage**

Set `feature.timeout.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Wraps the transport: its place in the activation order decides what it
  sees. See [Ordering](#ordering) above.
- Inactive by default: leaving it out costs nothing at runtime.

