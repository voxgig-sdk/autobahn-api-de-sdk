# AutobahnApiDe Ruby SDK Reference

Complete API reference for the AutobahnApiDe Ruby SDK.


## AutobahnApiDeSDK

### Constructor

```ruby
require_relative 'autobahn-api-de_sdk'

client = AutobahnApiDeSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `AutobahnApiDeSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = AutobahnApiDeSDK.test
```


### Instance Methods

#### `Closure(data = nil)`

Create a new `Closure` entity instance. Pass `nil` for no initial data.

#### `ElectricChargingStation(data = nil)`

Create a new `ElectricChargingStation` entity instance. Pass `nil` for no initial data.

#### `ListAutobahnen(data = nil)`

Create a new `ListAutobahnen` entity instance. Pass `nil` for no initial data.

#### `ParkingLorry(data = nil)`

Create a new `ParkingLorry` entity instance. Pass `nil` for no initial data.

#### `Roadwork(data = nil)`

Create a new `Roadwork` entity instance. Pass `nil` for no initial data.

#### `Warning(data = nil)`

Create a new `Warning` entity instance. Pass `nil` for no initial data.

#### `Webcam(data = nil)`

Create a new `Webcam` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## ClosureEntity

```ruby
closure = client.closure
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | ``$OBJECT`` | No |  |
| `description` | ``$ARRAY`` | No |  |
| `display_type` | ``$STRING`` | No |  |
| `extent` | ``$STRING`` | No |  |
| `footer` | ``$ARRAY`` | No |  |
| `future` | ``$BOOLEAN`` | No |  |
| `icon` | ``$STRING`` | No |  |
| `identifier` | ``$STRING`` | No |  |
| `is_blocked` | ``$BOOLEAN`` | No |  |
| `lorry_parking_feature_icon` | ``$ARRAY`` | No |  |
| `point` | ``$STRING`` | No |  |
| `route_recommendation` | ``$ARRAY`` | No |  |
| `start_timestamp` | ``$STRING`` | No |  |
| `subtitle` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.closure.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.closure.load({ "id" => "closure_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ClosureEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ElectricChargingStationEntity

```ruby
electric_charging_station = client.electric_charging_station
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | ``$OBJECT`` | No |  |
| `description` | ``$ARRAY`` | No |  |
| `display_type` | ``$STRING`` | No |  |
| `extent` | ``$STRING`` | No |  |
| `footer` | ``$ARRAY`` | No |  |
| `future` | ``$BOOLEAN`` | No |  |
| `icon` | ``$STRING`` | No |  |
| `identifier` | ``$STRING`` | No |  |
| `is_blocked` | ``$BOOLEAN`` | No |  |
| `lorry_parking_feature_icon` | ``$ARRAY`` | No |  |
| `point` | ``$STRING`` | No |  |
| `route_recommendation` | ``$ARRAY`` | No |  |
| `subtitle` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.electric_charging_station.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.electric_charging_station.load({ "id" => "electric_charging_station_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ElectricChargingStationEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ListAutobahnenEntity

```ruby
list_autobahnen = client.list_autobahnen
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `road` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.list_autobahnen.list(nil)
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ListAutobahnenEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## ParkingLorryEntity

```ruby
parking_lorry = client.parking_lorry
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | ``$OBJECT`` | No |  |
| `description` | ``$ARRAY`` | No |  |
| `display_type` | ``$STRING`` | No |  |
| `extent` | ``$STRING`` | No |  |
| `footer` | ``$ARRAY`` | No |  |
| `future` | ``$BOOLEAN`` | No |  |
| `icon` | ``$STRING`` | No |  |
| `identifier` | ``$STRING`` | No |  |
| `is_blocked` | ``$BOOLEAN`` | No |  |
| `lorry_parking_feature_icon` | ``$ARRAY`` | No |  |
| `point` | ``$STRING`` | No |  |
| `route_recommendation` | ``$ARRAY`` | No |  |
| `subtitle` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.parking_lorry.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.parking_lorry.load({ "id" => "parking_lorry_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `ParkingLorryEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## RoadworkEntity

```ruby
roadwork = client.roadwork
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | ``$OBJECT`` | No |  |
| `description` | ``$ARRAY`` | No |  |
| `display_type` | ``$STRING`` | No |  |
| `extent` | ``$STRING`` | No |  |
| `footer` | ``$ARRAY`` | No |  |
| `future` | ``$BOOLEAN`` | No |  |
| `icon` | ``$STRING`` | No |  |
| `identifier` | ``$STRING`` | No |  |
| `is_blocked` | ``$BOOLEAN`` | No |  |
| `lorry_parking_feature_icon` | ``$ARRAY`` | No |  |
| `point` | ``$STRING`` | No |  |
| `route_recommendation` | ``$ARRAY`` | No |  |
| `start_timestamp` | ``$STRING`` | No |  |
| `subtitle` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.roadwork.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.roadwork.load({ "id" => "roadwork_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `RoadworkEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WarningEntity

```ruby
warning = client.warning
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | ``$OBJECT`` | No |  |
| `description` | ``$ARRAY`` | No |  |
| `display_type` | ``$STRING`` | No |  |
| `extent` | ``$STRING`` | No |  |
| `footer` | ``$ARRAY`` | No |  |
| `future` | ``$BOOLEAN`` | No |  |
| `icon` | ``$STRING`` | No |  |
| `identifier` | ``$STRING`` | No |  |
| `is_blocked` | ``$BOOLEAN`` | No |  |
| `lorry_parking_feature_icon` | ``$ARRAY`` | No |  |
| `point` | ``$STRING`` | No |  |
| `route_recommendation` | ``$ARRAY`` | No |  |
| `start_timestamp` | ``$STRING`` | No |  |
| `subtitle` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.warning.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.warning.load({ "id" => "warning_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WarningEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## WebcamEntity

```ruby
webcam = client.webcam
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | ``$OBJECT`` | No |  |
| `description` | ``$ARRAY`` | No |  |
| `display_type` | ``$STRING`` | No |  |
| `extent` | ``$STRING`` | No |  |
| `footer` | ``$ARRAY`` | No |  |
| `future` | ``$BOOLEAN`` | No |  |
| `icon` | ``$STRING`` | No |  |
| `identifier` | ``$STRING`` | No |  |
| `imageurl` | ``$STRING`` | No |  |
| `is_blocked` | ``$BOOLEAN`` | No |  |
| `linkurl` | ``$STRING`` | No |  |
| `lorry_parking_feature_icon` | ``$ARRAY`` | No |  |
| `operator` | ``$STRING`` | No |  |
| `point` | ``$STRING`` | No |  |
| `route_recommendation` | ``$ARRAY`` | No |  |
| `subtitle` | ``$STRING`` | No |  |
| `title` | ``$STRING`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> Array`

List entities matching the given criteria. Returns an array. Raises on error.

```ruby
results = client.webcam.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result`

Load a single entity matching the given criteria. Raises on error.

```ruby
result = client.webcam.load({ "id" => "webcam_id" })
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `WebcamEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = AutobahnApiDeSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```

