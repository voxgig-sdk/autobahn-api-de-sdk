# AutobahnApiDe PHP SDK



The PHP SDK for the AutobahnApiDe API — an entity-oriented client using PHP conventions.

The SDK exposes the API as capitalised, semantic **Entities** — for example `$client->Closure()` — with named operations (`list`/`load`) instead of raw URL paths and query strings. Working with resources and verbs keeps call sites self-describing and reduces cognitive load.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to Packagist. Install it from the
GitHub release tag (`php/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/autobahn-api-de-sdk/releases](https://github.com/voxgig-sdk/autobahn-api-de-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```php
<?php
require_once 'autobahnapide_sdk.php';

$client = new AutobahnApiDeSDK();
```

### 2. List closure records

```php
try {
    // list() returns an array of Closure records — iterate directly.
    $closures = $client->Closure()->list();
    foreach ($closures as $item) {
        echo $item["coordinate"] . "\n";
    }
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load a closure

```php
try {
    // load() returns the bare Closure record (throws on error).
    $closure = $client->Closure()->load(["id" => "example_id"]);
    print_r($closure);
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```


## Error handling

Entity operations throw a `\Throwable` on failure, so wrap them in
`try` / `catch`:

```php
try {
    $closures = $client->Closure()->list();
} catch (\Throwable $err) {
    echo "Error: " . $err->getMessage();
}
```

`direct()` does **not** throw — it returns the result array. Branch on
`ok`; on failure `status` holds the HTTP status (for error responses) and
`err` holds a transport error, so read both defensively:

```php
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example_id"],
]);

if (! $result["ok"]) {
    $err = $result["err"] ?? null;
    echo "request failed: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```php
// direct() is the raw-HTTP escape hatch: it returns a result array
// (it does not throw). Branch on $result["ok"].
$result = $client->direct([
    "path" => "/api/resource/{id}",
    "method" => "GET",
    "params" => ["id" => "example"],
]);

if ($result["ok"]) {
    echo $result["status"];  // 200
    print_r($result["data"]);  // response body
} else {
    // On an HTTP error status there is no err (only a transport failure sets
    // it), so fall back to the status code.
    $err = $result["err"] ?? null;
    echo "Error: " . ($err ? $err->getMessage() : "HTTP " . $result["status"]);
}
```

### Prepare a request without sending it

```php
// prepare() throws on error and returns the fetch definition.
$fetchdef = $client->prepare([
    "path" => "/api/resource/{id}",
    "method" => "DELETE",
    "params" => ["id" => "example"],
]);

echo $fetchdef["url"];
echo $fetchdef["method"];
print_r($fetchdef["headers"]);
```

### Use test mode

Create a mock client for unit testing — no server required. Seed fixture
data via the `entity` option so offline calls resolve without a live server:

```php
$client = AutobahnApiDeSDK::test([
    "entity" => ["closure" => ["test01" => ["id" => "test01"]]],
]);

// Entity ops return the bare mock record (throws on error).
$closure = $client->Closure()->list();
print_r($closure);
```

### Use a custom fetch function

Replace the HTTP transport with your own function:

```php
$mock_fetch = function ($url, $init) {
    return [
        [
            "status" => 200,
            "statusText" => "OK",
            "headers" => [],
            "json" => function () { return ["id" => "mock01"]; },
        ],
        null,
    ];
};

$client = new AutobahnApiDeSDK([
    "base" => "http://localhost:8080",
    "system" => [
        "fetch" => $mock_fetch,
    ],
]);
```

### Run live tests

Create a `.env.local` file at the project root:

```
AUTOBAHN_API_DE_TEST_LIVE=TRUE
```

Then run:

```bash
cd php && ./vendor/bin/phpunit test/
```


## Reference

### AutobahnApiDeSDK

```php
require_once 'autobahnapide_sdk.php';
$client = new AutobahnApiDeSDK($options);
```

Creates a new SDK client.

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `array` | Feature activation flags. |
| `extend` | `array` | Additional Feature instances to load. |
| `system` | `array` | System overrides (e.g. custom `fetch` callable). |

### test

```php
$client = AutobahnApiDeSDK::test($testopts, $sdkopts);
```

Creates a test-mode client with mock transport. Both arguments may be `null`.

### AutobahnApiDeSDK methods

| Method | Signature | Description |
| --- | --- | --- |
| `options_map` | `(): array` | Deep copy of current SDK options. |
| `get_utility` | `(): Utility` | Copy of the SDK utility object. |
| `prepare` | `(array $fetchargs): array` | Build an HTTP request definition without sending. |
| `direct` | `(array $fetchargs): array` | Build and send an HTTP request. |
| `Closure` | `($data): ClosureEntity` | Create a Closure entity instance. |
| `ElectricChargingStation` | `($data): ElectricChargingStationEntity` | Create an ElectricChargingStation entity instance. |
| `ListAutobahnen` | `($data): ListAutobahnenEntity` | Create a ListAutobahnen entity instance. |
| `ParkingLorry` | `($data): ParkingLorryEntity` | Create a ParkingLorry entity instance. |
| `Roadwork` | `($data): RoadworkEntity` | Create a Roadwork entity instance. |
| `Warning` | `($data): WarningEntity` | Create a Warning entity instance. |
| `Webcam` | `($data): WebcamEntity` | Create a Webcam entity instance. |

### Entity interface

All entities share the same interface.

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `($reqmatch, $ctrl): array` | Load a single entity by match criteria. |
| `list` | `(?array $reqmatch = null, $ctrl): array` | List entities matching the criteria (call with no argument to list all). |
| `data_get` | `(): array` | Get entity data. |
| `data_set` | `($data): void` | Set entity data. |
| `match_get` | `(): array` | Get entity match criteria. |
| `match_set` | `($match): void` | Set entity match criteria. |
| `make` | `(): Entity` | Create a new instance with the same options. |
| `get_name` | `(): string` | Return the entity name. |

### Result shape

Entity operations return the bare result data (an `array` for single-entity
ops, a `list` for `list`) and throw on error. Wrap calls in
`try`/`catch` to handle failures.

The `direct()` escape hatch never throws — it returns a result `array`
you branch on via `$result["ok"]`:

| Key | Type | Description |
| --- | --- | --- |
| `ok` | `bool` | `true` if the HTTP status is 2xx. |
| `status` | `int` | HTTP status code. |
| `headers` | `array` | Response headers. |
| `data` | `mixed` | Parsed JSON response body. |

On error, `ok` is `false` and `$err` contains the error value.

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

Create an instance: `$closure = $client->Closure();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coordinate` | `array` |  |
| `description` | `array` |  |
| `display_type` | `string` |  |
| `extent` | `string` |  |
| `footer` | `array` |  |
| `future` | `bool` |  |
| `icon` | `string` |  |
| `identifier` | `string` |  |
| `is_blocked` | `bool` |  |
| `lorry_parking_feature_icon` | `array` |  |
| `point` | `string` |  |
| `route_recommendation` | `array` |  |
| `start_timestamp` | `string` |  |
| `subtitle` | `string` |  |
| `title` | `string` |  |

#### Example: Load

```php
// load() returns the bare Closure record (throws on error).
$closure = $client->Closure()->load(["id" => "closure_id"]);
```

#### Example: List

```php
// list() returns an array of Closure records (throws on error).
$closures = $client->Closure()->list();
```


### ElectricChargingStation

Create an instance: `$electric_charging_station = $client->ElectricChargingStation();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coordinate` | `array` |  |
| `description` | `array` |  |
| `display_type` | `string` |  |
| `extent` | `string` |  |
| `footer` | `array` |  |
| `future` | `bool` |  |
| `icon` | `string` |  |
| `identifier` | `string` |  |
| `is_blocked` | `bool` |  |
| `lorry_parking_feature_icon` | `array` |  |
| `point` | `string` |  |
| `route_recommendation` | `array` |  |
| `subtitle` | `string` |  |
| `title` | `string` |  |

#### Example: Load

```php
// load() returns the bare ElectricChargingStation record (throws on error).
$electric_charging_station = $client->ElectricChargingStation()->load(["id" => "electric_charging_station_id"]);
```

#### Example: List

```php
// list() returns an array of ElectricChargingStation records (throws on error).
$electric_charging_stations = $client->ElectricChargingStation()->list();
```


### ListAutobahnen

Create an instance: `$list_autobahnen = $client->ListAutobahnen();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `road` | `array` |  |

#### Example: List

```php
// list() returns an array of ListAutobahnen records (throws on error).
$list_autobahnens = $client->ListAutobahnen()->list();
```


### ParkingLorry

Create an instance: `$parking_lorry = $client->ParkingLorry();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coordinate` | `array` |  |
| `description` | `array` |  |
| `display_type` | `string` |  |
| `extent` | `string` |  |
| `footer` | `array` |  |
| `future` | `bool` |  |
| `icon` | `string` |  |
| `identifier` | `string` |  |
| `is_blocked` | `bool` |  |
| `lorry_parking_feature_icon` | `array` |  |
| `point` | `string` |  |
| `route_recommendation` | `array` |  |
| `subtitle` | `string` |  |
| `title` | `string` |  |

#### Example: Load

```php
// load() returns the bare ParkingLorry record (throws on error).
$parking_lorry = $client->ParkingLorry()->load(["id" => "parking_lorry_id"]);
```

#### Example: List

```php
// list() returns an array of ParkingLorry records (throws on error).
$parking_lorrys = $client->ParkingLorry()->list();
```


### Roadwork

Create an instance: `$roadwork = $client->Roadwork();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coordinate` | `array` |  |
| `description` | `array` |  |
| `display_type` | `string` |  |
| `extent` | `string` |  |
| `footer` | `array` |  |
| `future` | `bool` |  |
| `icon` | `string` |  |
| `identifier` | `string` |  |
| `is_blocked` | `bool` |  |
| `lorry_parking_feature_icon` | `array` |  |
| `point` | `string` |  |
| `route_recommendation` | `array` |  |
| `start_timestamp` | `string` |  |
| `subtitle` | `string` |  |
| `title` | `string` |  |

#### Example: Load

```php
// load() returns the bare Roadwork record (throws on error).
$roadwork = $client->Roadwork()->load(["id" => "roadwork_id"]);
```

#### Example: List

```php
// list() returns an array of Roadwork records (throws on error).
$roadworks = $client->Roadwork()->list();
```


### Warning

Create an instance: `$warning = $client->Warning();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coordinate` | `array` |  |
| `description` | `array` |  |
| `display_type` | `string` |  |
| `extent` | `string` |  |
| `footer` | `array` |  |
| `future` | `bool` |  |
| `icon` | `string` |  |
| `identifier` | `string` |  |
| `is_blocked` | `bool` |  |
| `lorry_parking_feature_icon` | `array` |  |
| `point` | `string` |  |
| `route_recommendation` | `array` |  |
| `start_timestamp` | `string` |  |
| `subtitle` | `string` |  |
| `title` | `string` |  |

#### Example: Load

```php
// load() returns the bare Warning record (throws on error).
$warning = $client->Warning()->load(["id" => "warning_id"]);
```

#### Example: List

```php
// list() returns an array of Warning records (throws on error).
$warnings = $client->Warning()->list();
```


### Webcam

Create an instance: `$webcam = $client->Webcam();`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |
| `load(match)` | Load a single entity by match criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `coordinate` | `array` |  |
| `description` | `array` |  |
| `display_type` | `string` |  |
| `extent` | `string` |  |
| `footer` | `array` |  |
| `future` | `bool` |  |
| `icon` | `string` |  |
| `identifier` | `string` |  |
| `imageurl` | `string` |  |
| `is_blocked` | `bool` |  |
| `linkurl` | `string` |  |
| `lorry_parking_feature_icon` | `array` |  |
| `operator` | `string` |  |
| `point` | `string` |  |
| `route_recommendation` | `array` |  |
| `subtitle` | `string` |  |
| `title` | `string` |  |

#### Example: Load

```php
// load() returns the bare Webcam record (throws on error).
$webcam = $client->Webcam()->load(["id" => "webcam_id"]);
```

#### Example: List

```php
// list() returns an array of Webcam records (throws on error).
$webcams = $client->Webcam()->list();
```


## Advanced

> The sections above cover everyday use. The material below explains the
> SDK's internals — useful when extending it with custom features, but not
> needed for normal use.

### The operation pipeline

Every entity operation follows a six-stage pipeline. Each stage fires a
feature hook before executing:

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

If any stage errors, the pipeline short-circuits and the error surfaces
to the caller — see [Error handling](#error-handling) for how that looks
in this language.

### Features and hooks

Features are the extension mechanism. A feature is a PHP class
with hook methods named after pipeline stages (e.g. `PrePoint`,
`PreSpec`). Each method receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Data as arrays

The PHP SDK uses plain PHP associative arrays throughout rather than typed
objects. This mirrors the dynamic nature of the API and keeps the
SDK flexible — no code generation is needed when the API schema
changes.

Use `Helpers::to_map()` to safely validate that a value is an array.

### Directory structure

```
php/
├── autobahnapide_sdk.php          -- Main SDK class
├── config.php                     -- Configuration
├── features.php                   -- Feature factory
├── core/                          -- Core types and context
├── entity/                        -- Entity implementations
├── feature/                       -- Built-in features (Base, Test, Log)
├── utility/                       -- Utility functions and struct library
└── test/                          -- Test suites
```

The main class (`autobahnapide_sdk.php`) exports the SDK class
and test helper. Import entity or utility modules directly only
when needed.

### Entity state

Entity instances are stateful. After a successful `list`, the entity
stores the returned data and match criteria internally.

```php
$closure = $client->Closure();
$closure->list();

// $closure->data_get() now returns the closure data from the last list
// $closure->match_get() returns the last match criteria
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
