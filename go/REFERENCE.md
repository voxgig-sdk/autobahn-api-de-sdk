# AutobahnApiDe Golang SDK Reference

Complete API reference for the AutobahnApiDe Golang SDK.


## AutobahnApiDeSDK

### Constructor

```go
func NewAutobahnApiDeSDK(options map[string]any) *AutobahnApiDeSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *AutobahnApiDeSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *AutobahnApiDeSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Closure(data map[string]any) AutobahnApiDeEntity`

Create a new `Closure` entity instance. Pass `nil` for no initial data.

#### `ElectricChargingStation(data map[string]any) AutobahnApiDeEntity`

Create a new `ElectricChargingStation` entity instance. Pass `nil` for no initial data.

#### `ListAutobahnen(data map[string]any) AutobahnApiDeEntity`

Create a new `ListAutobahnen` entity instance. Pass `nil` for no initial data.

#### `ParkingLorry(data map[string]any) AutobahnApiDeEntity`

Create a new `ParkingLorry` entity instance. Pass `nil` for no initial data.

#### `Roadwork(data map[string]any) AutobahnApiDeEntity`

Create a new `Roadwork` entity instance. Pass `nil` for no initial data.

#### `Warning(data map[string]any) AutobahnApiDeEntity`

Create a new `Warning` entity instance. Pass `nil` for no initial data.

#### `Webcam(data map[string]any) AutobahnApiDeEntity`

Create a new `Webcam` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## ClosureEntity

```go
closure := client.Closure(nil)
fmt.Println(closure.GetName()) // "closure"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `map[string]any` | No |  |
| `description` | `[]any` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No |  |
| `footer` | `[]any` | No |  |
| `future` | `bool` | No |  |
| `icon` | `string` | No |  |
| `identifier` | `string` | No |  |
| `is_blocked` | `bool` | No |  |
| `lorry_parking_feature_icon` | `[]any` | No |  |
| `point` | `string` | No |  |
| `route_recommendation` | `[]any` | No |  |
| `start_timestamp` | `string` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Closure(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Closure(nil).Load(map[string]any{"id": "closure_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ClosureEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ElectricChargingStationEntity

```go
electricChargingStation := client.ElectricChargingStation(nil)
fmt.Println(electricChargingStation.GetName()) // "electric_charging_station"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `map[string]any` | No |  |
| `description` | `[]any` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No |  |
| `footer` | `[]any` | No |  |
| `future` | `bool` | No |  |
| `icon` | `string` | No |  |
| `identifier` | `string` | No |  |
| `is_blocked` | `bool` | No |  |
| `lorry_parking_feature_icon` | `[]any` | No |  |
| `point` | `string` | No |  |
| `route_recommendation` | `[]any` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ElectricChargingStation(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ElectricChargingStation(nil).Load(map[string]any{"id": "electric_charging_station_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ElectricChargingStationEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ListAutobahnenEntity

```go
listAutobahnen := client.ListAutobahnen(nil)
fmt.Println(listAutobahnen.GetName()) // "list_autobahnen"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `road` | `[]any` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ListAutobahnen(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ListAutobahnenEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## ParkingLorryEntity

```go
parkingLorry := client.ParkingLorry(nil)
fmt.Println(parkingLorry.GetName()) // "parking_lorry"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `map[string]any` | No |  |
| `description` | `[]any` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No |  |
| `footer` | `[]any` | No |  |
| `future` | `bool` | No |  |
| `icon` | `string` | No |  |
| `identifier` | `string` | No |  |
| `is_blocked` | `bool` | No |  |
| `lorry_parking_feature_icon` | `[]any` | No |  |
| `point` | `string` | No |  |
| `route_recommendation` | `[]any` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.ParkingLorry(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.ParkingLorry(nil).Load(map[string]any{"id": "parking_lorry_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `ParkingLorryEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## RoadworkEntity

```go
roadwork := client.Roadwork(nil)
fmt.Println(roadwork.GetName()) // "roadwork"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `map[string]any` | No |  |
| `description` | `[]any` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No |  |
| `footer` | `[]any` | No |  |
| `future` | `bool` | No |  |
| `icon` | `string` | No |  |
| `identifier` | `string` | No |  |
| `is_blocked` | `bool` | No |  |
| `lorry_parking_feature_icon` | `[]any` | No |  |
| `point` | `string` | No |  |
| `route_recommendation` | `[]any` | No |  |
| `start_timestamp` | `string` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Roadwork(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Roadwork(nil).Load(map[string]any{"id": "roadwork_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `RoadworkEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WarningEntity

```go
warning := client.Warning(nil)
fmt.Println(warning.GetName()) // "warning"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `map[string]any` | No |  |
| `description` | `[]any` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No |  |
| `footer` | `[]any` | No |  |
| `future` | `bool` | No |  |
| `icon` | `string` | No |  |
| `identifier` | `string` | No |  |
| `is_blocked` | `bool` | No |  |
| `lorry_parking_feature_icon` | `[]any` | No |  |
| `point` | `string` | No |  |
| `route_recommendation` | `[]any` | No |  |
| `start_timestamp` | `string` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Warning(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Warning(nil).Load(map[string]any{"id": "warning_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WarningEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## WebcamEntity

```go
webcam := client.Webcam(nil)
fmt.Println(webcam.GetName()) // "webcam"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `map[string]any` | No |  |
| `description` | `[]any` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No |  |
| `footer` | `[]any` | No |  |
| `future` | `bool` | No |  |
| `icon` | `string` | No |  |
| `identifier` | `string` | No |  |
| `imageurl` | `string` | No |  |
| `is_blocked` | `bool` | No |  |
| `linkurl` | `string` | No |  |
| `lorry_parking_feature_icon` | `[]any` | No |  |
| `operator` | `string` | No |  |
| `point` | `string` | No |  |
| `route_recommendation` | `[]any` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Webcam(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
```

#### `Load(reqmatch, ctrl map[string]any) (any, error)`

Load a single entity matching the given criteria.

```go
result, err := client.Webcam(nil).Load(map[string]any{"id": "webcam_id"}, nil)
if err != nil {
    panic(err)
}
fmt.Println(result)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `WebcamEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewAutobahnApiDeSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

