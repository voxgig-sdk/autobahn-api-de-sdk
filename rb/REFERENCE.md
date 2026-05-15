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
| `options["apikey"]` | `String` | API key for authentication. |
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

#### `direct(fetchargs = {}) -> Hash, err`

Make a direct HTTP request to any API endpoint.

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

**Returns:** `Hash, err`

#### `prepare(fetchargs = {}) -> Hash, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Hash, err`


---

## ClosureEntity

```ruby
closure = client.Closure
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Closure.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Closure.load({ "id" => "closure_id" })
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
electric_charging_station = client.ElectricChargingStation
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.ElectricChargingStation.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.ElectricChargingStation.load({ "id" => "electric_charging_station_id" })
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
list_autobahnen = client.ListAutobahnen
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `road` | ``$ARRAY`` | No |  |

### Operations

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.ListAutobahnen.list(nil)
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
parking_lorry = client.ParkingLorry
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.ParkingLorry.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.ParkingLorry.load({ "id" => "parking_lorry_id" })
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
roadwork = client.Roadwork
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Roadwork.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Roadwork.load({ "id" => "roadwork_id" })
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
warning = client.Warning
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Warning.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Warning.load({ "id" => "warning_id" })
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
webcam = client.Webcam
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

#### `list(reqmatch, ctrl = nil) -> result, err`

List entities matching the given criteria. Returns an array.

```ruby
results, err = client.Webcam.list(nil)
```

#### `load(reqmatch, ctrl = nil) -> result, err`

Load a single entity matching the given criteria.

```ruby
result, err = client.Webcam.load({ "id" => "webcam_id" })
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

