# AutobahnApiDe PHP SDK



The PHP SDK for the AutobahnApiDe API — an entity-oriented client using PHP conventions.

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

### 2. List closures

```php
try {
    $result = $client->closure()->list();
    if (is_array($result)) {
        foreach ($result as $item) {
            $d = $item->data_get();
            echo $d["id"] . " " . $d["name"] . "\n";
        }
    }
} catch (\Exception $err) {
    echo "Error: " . $err->getMessage();
}
```

### 3. Load a closure

```php
try {
    $result = $client->closure()->load(["id" => "example_id"]);
    print_r($result);
} catch (\Exception $err) {
    echo "Error: " . $err->getMessage();
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
    echo "Error: " . $result["err"]->getMessage();
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

Create a mock client for unit testing — no server required:

```php
$client = AutobahnApiDeSDK::test();

$result = $client->closure()->load(["id" => "test01"]);
// $result contains mock response data
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
| `ElectricChargingStation` | `($data): ElectricChargingStationEntity` | Create a ElectricChargingStation entity instance. |
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
| `list` | `($reqmatch, $ctrl): array` | List entities matching the criteria. |
| `create` | `($reqdata, $ctrl): array` | Create a new entity. |
| `update` | `($reqdata, $ctrl): array` | Update an existing entity. |
| `remove` | `($reqmatch, $ctrl): array` | Remove an entity. |
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

Create an instance: `const closure = client.closure`

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

```ts
const closure = await client.closure.load({ id: 'closure_id' })
```

#### Example: List

```ts
const closures = await client.closure.list()
```


### ElectricChargingStation

Create an instance: `const electric_charging_station = client.electric_charging_station`

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

```ts
const electric_charging_station = await client.electric_charging_station.load({ id: 'electric_charging_station_id' })
```

#### Example: List

```ts
const electric_charging_stations = await client.electric_charging_station.list()
```


### ListAutobahnen

Create an instance: `const list_autobahnen = client.list_autobahnen`

#### Operations

| Method | Description |
| --- | --- |
| `list(match)` | List entities matching the criteria. |

#### Fields

| Field | Type | Description |
| --- | --- | --- |
| `road` | ``$ARRAY`` |  |

#### Example: List

```ts
const list_autobahnens = await client.list_autobahnen.list()
```


### ParkingLorry

Create an instance: `const parking_lorry = client.parking_lorry`

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

```ts
const parking_lorry = await client.parking_lorry.load({ id: 'parking_lorry_id' })
```

#### Example: List

```ts
const parking_lorrys = await client.parking_lorry.list()
```


### Roadwork

Create an instance: `const roadwork = client.roadwork`

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

```ts
const roadwork = await client.roadwork.load({ id: 'roadwork_id' })
```

#### Example: List

```ts
const roadworks = await client.roadwork.list()
```


### Warning

Create an instance: `const warning = client.warning`

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

```ts
const warning = await client.warning.load({ id: 'warning_id' })
```

#### Example: List

```ts
const warnings = await client.warning.list()
```


### Webcam

Create an instance: `const webcam = client.webcam`

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

```ts
const webcam = await client.webcam.load({ id: 'webcam_id' })
```

#### Example: List

```ts
const webcams = await client.webcam.list()
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
error is returned to the caller as the second element in the return array.

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

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally.

```php
$closure = $client->closure();
$closure->load(["id" => "example_id"]);

// $closure->dataGet() now returns the loaded closure data
// $closure->matchGet() returns the last match criteria
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
