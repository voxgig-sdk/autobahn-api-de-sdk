# AutobahnApiDe Python SDK Reference

Complete API reference for the AutobahnApiDe Python SDK.


## AutobahnApiDeSDK

### Constructor

```python
from autobahnapide_sdk import AutobahnApiDeSDK

client = AutobahnApiDeSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `AutobahnApiDeSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = AutobahnApiDeSDK.test()
```


### Instance Methods

#### `Closure(data=None)`

Create a new `ClosureEntity` instance. Pass `None` for no initial data.

#### `ElectricChargingStation(data=None)`

Create a new `ElectricChargingStationEntity` instance. Pass `None` for no initial data.

#### `ListAutobahnen(data=None)`

Create a new `ListAutobahnenEntity` instance. Pass `None` for no initial data.

#### `ParkingLorry(data=None)`

Create a new `ParkingLorryEntity` instance. Pass `None` for no initial data.

#### `Roadwork(data=None)`

Create a new `RoadworkEntity` instance. Pass `None` for no initial data.

#### `Warning(data=None)`

Create a new `WarningEntity` instance. Pass `None` for no initial data.

#### `Webcam(data=None)`

Create a new `WebcamEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## ClosureEntity

```python
closure = client.Closure()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `dict` | No |  |
| `description` | `list` | No |  |
| `display_type` | `str` | No |  |
| `extent` | `str` | No |  |
| `footer` | `list` | No |  |
| `future` | `bool` | No |  |
| `icon` | `str` | No |  |
| `identifier` | `str` | No |  |
| `isBlocked` | `str` | No |  |
| `lorryParkingFeatureIcons` | `list` | No |  |
| `point` | `str` | No |  |
| `routeRecommendation` | `list` | No |  |
| `startTimestamp` | `str` | No |  |
| `subtitle` | `str` | No |  |
| `title` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Closure().list({"road_id": "example"})
for closure in results:
    print(closure)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Closure().load({"id": "closure_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ClosureEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ElectricChargingStationEntity

```python
electric_charging_station = client.ElectricChargingStation()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `dict` | No | Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). |
| `description` | `list` | No |  |
| `display_type` | `str` | No |  |
| `extent` | `str` | No | Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt. |
| `footer` | `list` | No |  |
| `future` | `bool` | No |  |
| `icon` | `str` | No | Sinnbild, das die Art des Eintrags beschreibt. |
| `identifier` | `str` | No |  |
| `isBlocked` | `str` | No |  |
| `lorryParkingFeatureIcons` | `list` | No |  |
| `point` | `str` | No | Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). |
| `routeRecommendation` | `list` | No |  |
| `subtitle` | `str` | No |  |
| `title` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ElectricChargingStation().list({"road_id": "example"})
for electric_charging_station in results:
    print(electric_charging_station)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ElectricChargingStation().load({"id": "electric_charging_station_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ElectricChargingStationEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ListAutobahnenEntity

```python
list_autobahnen = client.ListAutobahnen()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roads` | `list` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ListAutobahnen().list()
for list_autobahnen in results:
    print(list_autobahnen)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ListAutobahnenEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## ParkingLorryEntity

```python
parking_lorry = client.ParkingLorry()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `dict` | No | Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). |
| `description` | `list` | No |  |
| `display_type` | `str` | No |  |
| `extent` | `str` | No | Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt. |
| `footer` | `list` | No |  |
| `future` | `bool` | No |  |
| `icon` | `str` | No | Sinnbild, das die Art des Eintrags beschreibt. |
| `identifier` | `str` | No |  |
| `isBlocked` | `str` | No |  |
| `lorryParkingFeatureIcons` | `list` | No |  |
| `point` | `str` | No | Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). |
| `routeRecommendation` | `list` | No |  |
| `subtitle` | `str` | No |  |
| `title` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.ParkingLorry().list({"road_id": "example"})
for parking_lorry in results:
    print(parking_lorry)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.ParkingLorry().load({"id": "parking_lorry_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `ParkingLorryEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## RoadworkEntity

```python
roadwork = client.Roadwork()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `dict` | No |  |
| `description` | `list` | No |  |
| `display_type` | `str` | No |  |
| `extent` | `str` | No |  |
| `footer` | `list` | No |  |
| `future` | `bool` | No |  |
| `icon` | `str` | No |  |
| `identifier` | `str` | No |  |
| `isBlocked` | `str` | No |  |
| `lorryParkingFeatureIcons` | `list` | No |  |
| `point` | `str` | No |  |
| `routeRecommendation` | `list` | No |  |
| `startTimestamp` | `str` | No |  |
| `subtitle` | `str` | No |  |
| `title` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Roadwork().list({"road_id": "example"})
for roadwork in results:
    print(roadwork)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Roadwork().load({"id": "roadwork_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `RoadworkEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WarningEntity

```python
warning = client.Warning()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `dict` | No |  |
| `description` | `list` | No |  |
| `display_type` | `str` | No |  |
| `extent` | `str` | No |  |
| `footer` | `list` | No |  |
| `future` | `bool` | No |  |
| `icon` | `str` | No |  |
| `identifier` | `str` | No |  |
| `isBlocked` | `str` | No |  |
| `lorryParkingFeatureIcons` | `list` | No |  |
| `point` | `str` | No |  |
| `routeRecommendation` | `list` | No |  |
| `startTimestamp` | `str` | No |  |
| `subtitle` | `str` | No |  |
| `title` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Warning().list({"road_id": "example"})
for warning in results:
    print(warning)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Warning().load({"id": "warning_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WarningEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## WebcamEntity

```python
webcam = client.Webcam()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `dict` | No | Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). |
| `description` | `list` | No |  |
| `display_type` | `str` | No |  |
| `extent` | `str` | No | Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt. |
| `footer` | `list` | No |  |
| `future` | `bool` | No |  |
| `icon` | `str` | No | Sinnbild, das die Art des Eintrags beschreibt. |
| `identifier` | `str` | No |  |
| `imageurl` | `str` | No |  |
| `isBlocked` | `str` | No |  |
| `linkurl` | `str` | No |  |
| `lorryParkingFeatureIcons` | `list` | No |  |
| `operator` | `str` | No |  |
| `point` | `str` | No | Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). |
| `routeRecommendation` | `list` | No |  |
| `subtitle` | `str` | No |  |
| `title` | `str` | No |  |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Webcam().list({"road_id": "example"})
for webcam in results:
    print(webcam)
```

#### `load(reqmatch, ctrl=None) -> dict`

Load a single entity matching the given criteria. Returns the entity data and raises on error.

```python
result = client.Webcam().load({"id": "webcam_id"})
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `WebcamEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = AutobahnApiDeSDK({
    "feature": {
        "test": {"active": True},
    },
})
```

