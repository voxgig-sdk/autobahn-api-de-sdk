# AutobahnApiDe PHP SDK Reference

Complete API reference for the AutobahnApiDe PHP SDK.


## AutobahnApiDeSDK

### Constructor

```php
require_once __DIR__ . '/autobahnapide_sdk.php';

$client = new AutobahnApiDeSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
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

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): AutobahnApiDeUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

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

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## ClosureEntity

```php
$closure = $client->Closure();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `array` | No |  |
| `description` | `array` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No |  |
| `footer` | `array` | No |  |
| `future` | `bool` | No |  |
| `icon` | `string` | No |  |
| `id` | `string` | No |  |
| `identifier` | `string` | No |  |
| `isBlocked` | `string` | No |  |
| `lorryParkingFeatureIcons` | `array` | No |  |
| `point` | `string` | No |  |
| `routeRecommendation` | `array` | No |  |
| `startTimestamp` | `string` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Closure()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Closure()->load(["id" => "closure_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ClosureEntity`

Create a new `ClosureEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ElectricChargingStationEntity

```php
$electric_charging_station = $client->ElectricChargingStation();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `array` | No | Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). |
| `description` | `array` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No | Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt. |
| `footer` | `array` | No |  |
| `future` | `bool` | No |  |
| `icon` | `string` | No | Sinnbild, das die Art des Eintrags beschreibt. |
| `id` | `string` | No |  |
| `identifier` | `string` | No |  |
| `isBlocked` | `string` | No |  |
| `lorryParkingFeatureIcons` | `array` | No |  |
| `point` | `string` | No | Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). |
| `routeRecommendation` | `array` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ElectricChargingStation()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ElectricChargingStation()->load(["id" => "electric_charging_station_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ElectricChargingStationEntity`

Create a new `ElectricChargingStationEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ListAutobahnenEntity

```php
$list_autobahnen = $client->ListAutobahnen();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `roads` | `array` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ListAutobahnen()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ListAutobahnenEntity`

Create a new `ListAutobahnenEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## ParkingLorryEntity

```php
$parking_lorry = $client->ParkingLorry();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `array` | No | Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). |
| `description` | `array` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No | Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt. |
| `footer` | `array` | No |  |
| `future` | `bool` | No |  |
| `icon` | `string` | No | Sinnbild, das die Art des Eintrags beschreibt. |
| `id` | `string` | No |  |
| `identifier` | `string` | No |  |
| `isBlocked` | `string` | No |  |
| `lorryParkingFeatureIcons` | `array` | No |  |
| `point` | `string` | No | Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). |
| `routeRecommendation` | `array` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->ParkingLorry()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->ParkingLorry()->load(["id" => "parking_lorry_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): ParkingLorryEntity`

Create a new `ParkingLorryEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## RoadworkEntity

```php
$roadwork = $client->Roadwork();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `array` | No |  |
| `description` | `array` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No |  |
| `footer` | `array` | No |  |
| `future` | `bool` | No |  |
| `icon` | `string` | No |  |
| `id` | `string` | No |  |
| `identifier` | `string` | No |  |
| `isBlocked` | `string` | No |  |
| `lorryParkingFeatureIcons` | `array` | No |  |
| `point` | `string` | No |  |
| `routeRecommendation` | `array` | No |  |
| `startTimestamp` | `string` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Roadwork()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Roadwork()->load(["id" => "roadwork_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): RoadworkEntity`

Create a new `RoadworkEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WarningEntity

```php
$warning = $client->Warning();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `array` | No |  |
| `description` | `array` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No |  |
| `footer` | `array` | No |  |
| `future` | `bool` | No |  |
| `icon` | `string` | No |  |
| `id` | `string` | No |  |
| `identifier` | `string` | No |  |
| `isBlocked` | `string` | No |  |
| `lorryParkingFeatureIcons` | `array` | No |  |
| `point` | `string` | No |  |
| `routeRecommendation` | `array` | No |  |
| `startTimestamp` | `string` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Warning()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Warning()->load(["id" => "warning_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WarningEntity`

Create a new `WarningEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## WebcamEntity

```php
$webcam = $client->Webcam();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `coordinate` | `array` | No | Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). |
| `description` | `array` | No |  |
| `display_type` | `string` | No |  |
| `extent` | `string` | No | Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt. |
| `footer` | `array` | No |  |
| `future` | `bool` | No |  |
| `icon` | `string` | No | Sinnbild, das die Art des Eintrags beschreibt. |
| `id` | `string` | No |  |
| `identifier` | `string` | No |  |
| `imageurl` | `string` | No |  |
| `isBlocked` | `string` | No |  |
| `linkurl` | `string` | No |  |
| `lorryParkingFeatureIcons` | `array` | No |  |
| `operator` | `string` | No |  |
| `point` | `string` | No | Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). |
| `routeRecommendation` | `array` | No |  |
| `subtitle` | `string` | No |  |
| `title` | `string` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Webcam()->list();
```

#### `load(array $reqmatch, ?array $ctrl = null): mixed`

Load a single entity matching the given criteria. Throws on error.

```php
$result = $client->Webcam()->load(["id" => "webcam_id"]);
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): WebcamEntity`

Create a new `WebcamEntity` instance with the same client and
options.

#### `get_name(): string`

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

```php
$client = new AutobahnApiDeSDK([
  "feature" => [
    "ratelimit" => ["active" => true],
    "retry" => ["active" => true],
    "test" => ["active" => true],
    "timeout" => ["active" => true],
  ],
]);
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

