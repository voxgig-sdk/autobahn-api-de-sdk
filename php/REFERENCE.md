# AutobahnApiDe PHP SDK Reference

Complete API reference for the AutobahnApiDe PHP SDK.


## AutobahnApiDeSDK

### Constructor

```php
require_once __DIR__ . '/autobahn-api-de_sdk.php';

$client = new AutobahnApiDeSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["apikey"]` | `string` | API key for authentication. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `AutobahnApiDeSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = AutobahnApiDeSDK::test();
```


### Instance Methods

#### `Closure($data = null)`

Create a new `ClosureEntity` instance. Pass `null` for no initial data.

#### `ElectricChargingStation($data = null)`

Create a new `ElectricChargingStationEntity` instance. Pass `null` for no initial data.

#### `ListAutobahnen($data = null)`

Create a new `ListAutobahnenEntity` instance. Pass `null` for no initial data.

#### `ParkingLorry($data = null)`

Create a new `ParkingLorryEntity` instance. Pass `null` for no initial data.

#### `Roadwork($data = null)`

Create a new `RoadworkEntity` instance. Pass `null` for no initial data.

#### `Warning($data = null)`

Create a new `WarningEntity` instance. Pass `null` for no initial data.

#### `Webcam($data = null)`

Create a new `WebcamEntity` instance. Pass `null` for no initial data.

#### `optionsMap(): array`

Return a deep copy of the current SDK options.

#### `getUtility(): ProjectNameUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. Returns `[$result, $err]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array [$result, $err]`

#### `prepare(array $fetchargs = []): array`

Prepare a fetch definition without sending the request. Returns `[$fetchdef, $err]`.


---

## ClosureEntity

```php
$closure = $client->Closure();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Closure()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Closure()->load(["id" => "closure_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ClosureEntity`

Create a new `ClosureEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ElectricChargingStationEntity

```php
$electric_charging_station = $client->ElectricChargingStation();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->ElectricChargingStation()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->ElectricChargingStation()->load(["id" => "electric_charging_station_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ElectricChargingStationEntity`

Create a new `ElectricChargingStationEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ListAutobahnenEntity

```php
$list_autobahnen = $client->ListAutobahnen();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `road` | ``$ARRAY`` | No |  |

### Operations

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->ListAutobahnen()->list([]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ListAutobahnenEntity`

Create a new `ListAutobahnenEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## ParkingLorryEntity

```php
$parking_lorry = $client->ParkingLorry();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->ParkingLorry()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->ParkingLorry()->load(["id" => "parking_lorry_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): ParkingLorryEntity`

Create a new `ParkingLorryEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## RoadworkEntity

```php
$roadwork = $client->Roadwork();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Roadwork()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Roadwork()->load(["id" => "roadwork_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): RoadworkEntity`

Create a new `RoadworkEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## WarningEntity

```php
$warning = $client->Warning();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Warning()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Warning()->load(["id" => "warning_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): WarningEntity`

Create a new `WarningEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## WebcamEntity

```php
$webcam = $client->Webcam();
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

#### `list(array $reqmatch, ?array $ctrl = null): array`

List entities matching the given criteria. Returns an array.

```php
[$results, $err] = $client->Webcam()->list([]);
```

#### `load(array $reqmatch, ?array $ctrl = null): array`

Load a single entity matching the given criteria.

```php
[$result, $err] = $client->Webcam()->load(["id" => "webcam_id"]);
```

### Common Methods

#### `dataGet(): array`

Get the entity data. Returns a copy of the current data.

#### `dataSet($data): void`

Set the entity data.

#### `matchGet(): array`

Get the entity match criteria.

#### `matchSet($match): void`

Set the entity match criteria.

#### `make(): WebcamEntity`

Create a new `WebcamEntity` instance with the same client and
options.

#### `getName(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new AutobahnApiDeSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

