# AutobahnApiDe TypeScript SDK Reference

Complete API reference for the AutobahnApiDe TypeScript SDK.


## AutobahnApiDeSDK

### Constructor

```ts
new AutobahnApiDeSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `AutobahnApiDeSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = AutobahnApiDeSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `AutobahnApiDeSDK` instance in test mode.


### Instance Methods

#### `Closure(data?: object)`

Create a new `Closure` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ClosureEntity` instance.

#### `ElectricChargingStation(data?: object)`

Create a new `ElectricChargingStation` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ElectricChargingStationEntity` instance.

#### `ListAutobahnen(data?: object)`

Create a new `ListAutobahnen` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ListAutobahnenEntity` instance.

#### `ParkingLorry(data?: object)`

Create a new `ParkingLorry` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `ParkingLorryEntity` instance.

#### `Roadwork(data?: object)`

Create a new `Roadwork` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `RoadworkEntity` instance.

#### `Warning(data?: object)`

Create a new `Warning` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WarningEntity` instance.

#### `Webcam(data?: object)`

Create a new `Webcam` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `WebcamEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `AutobahnApiDeSDK.test()`.

**Returns:** `AutobahnApiDeSDK` instance in test mode.


---

## ClosureEntity

```ts
const closure = client.closure
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.closure.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.closure.load({ id: 'closure_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ClosureEntity` instance with the same client and
options.

#### `client()`

Return the parent `AutobahnApiDeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ElectricChargingStationEntity

```ts
const electric_charging_station = client.electric_charging_station
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.electric_charging_station.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.electric_charging_station.load({ id: 'electric_charging_station_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ElectricChargingStationEntity` instance with the same client and
options.

#### `client()`

Return the parent `AutobahnApiDeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ListAutobahnenEntity

```ts
const list_autobahnen = client.list_autobahnen
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `road` | ``$ARRAY`` | No |  |

### Operations

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.list_autobahnen.list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ListAutobahnenEntity` instance with the same client and
options.

#### `client()`

Return the parent `AutobahnApiDeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## ParkingLorryEntity

```ts
const parking_lorry = client.parking_lorry
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.parking_lorry.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.parking_lorry.load({ id: 'parking_lorry_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `ParkingLorryEntity` instance with the same client and
options.

#### `client()`

Return the parent `AutobahnApiDeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## RoadworkEntity

```ts
const roadwork = client.roadwork
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.roadwork.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.roadwork.load({ id: 'roadwork_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `RoadworkEntity` instance with the same client and
options.

#### `client()`

Return the parent `AutobahnApiDeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WarningEntity

```ts
const warning = client.warning
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.warning.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.warning.load({ id: 'warning_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WarningEntity` instance with the same client and
options.

#### `client()`

Return the parent `AutobahnApiDeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## WebcamEntity

```ts
const webcam = client.webcam
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.webcam.list()
```

#### `load(match: object, ctrl?: object)`

Load a single entity matching the given criteria.

```ts
const result = await client.webcam.load({ id: 'webcam_id' })
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `WebcamEntity` instance with the same client and
options.

#### `client()`

Return the parent `AutobahnApiDeSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new AutobahnApiDeSDK({
  feature: {
    test: { active: true },
  }
})
```

