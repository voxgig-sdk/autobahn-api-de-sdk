# AutobahnApiDe TypeScript SDK



The TypeScript SDK for the AutobahnApiDe API — a type-safe, entity-oriented client with full async/await support.

> Other languages, the CLI, and MCP server live alongside this one — see
> the [top-level README](../README.md).


## Install
This package is not yet published to npm. Install it from the GitHub
release tag (`ts/vX.Y.Z`):

- Releases: [https://github.com/voxgig-sdk/autobahn-api-de-sdk/releases](https://github.com/voxgig-sdk/autobahn-api-de-sdk/releases)


## Tutorial: your first API call

This tutorial walks through creating a client, listing entities, and
loading a specific record.

### 1. Create a client

```ts
import { AutobahnApiDeSDK } from '@voxgig-sdk/autobahn-api-de'

const client = new AutobahnApiDeSDK()
```

### 2. List closure records

`list()` resolves to an array of Closure objects — iterate it directly:

```ts
const closures = await client.Closure().list()

for (const closure of closures) {
  console.log(closure)
}
```

### 3. Load a closure

`load()` returns the entity directly and throws on failure:

```ts
try {
  const closure = await client.Closure().load({ id: 'example_id' })
  console.log(closure)
} catch (err) {
  console.error('load failed:', err)
}
```


## How-to guides

### Make a direct HTTP request

For endpoints not covered by entity methods:

```ts
const result = await client.direct({
  path: '/api/resource/{id}',
  method: 'GET',
  params: { id: 'example' },
})

if (result instanceof Error) {
  throw result
}
if (result.ok) {
  console.log(result.status)  // 200
  console.log(result.data)    // response body
}
```

### Prepare a request without sending it

```ts
const fetchdef = await client.prepare({
  path: '/api/resource/{id}',
  method: 'DELETE',
  params: { id: 'example' },
})

// Inspect before sending
console.log(fetchdef.url)
console.log(fetchdef.method)
console.log(fetchdef.headers)
```

### Use test mode

Create a mock client for unit testing — no server required:

```ts
const client = AutobahnApiDeSDK.test()

const closure = await client.Closure().load({ id: 'test01' })
// closure is a bare entity populated with mock response data
console.log(closure)
```

You can also use the instance method:

```ts
const client = new AutobahnApiDeSDK()
const testClient = client.tester()
```

### Retain entity state across calls

Entity instances remember their last match and data:

```ts
const entity = client.Closure()

// First call sets internal match
await entity.load({ id: 'example' })

// Subsequent calls reuse the stored match
const data = entity.data()
console.log(data.id) // 'example'
```

### Add custom middleware

Pass features via the `extend` option:

```ts
const logger = {
  hooks: {
    PreRequest: (ctx: any) => {
      console.log('Requesting:', ctx.spec.method, ctx.spec.path)
    },
    PreResponse: (ctx: any) => {
      console.log('Status:', ctx.out.request?.status)
    },
  },
}

const client = new AutobahnApiDeSDK({
  extend: [logger],
})
```

### Run live tests

Create a `.env.local` file at the project root:

```
AUTOBAHN_API_DE_TEST_LIVE=TRUE
```

Then run:

```bash
cd ts && npm test
```


## Reference

### AutobahnApiDeSDK

#### Constructor

```ts
new AutobahnApiDeSDK(options?: {
  base?: string
  prefix?: string
  suffix?: string
  feature?: Record<string, { active: boolean }>
  extend?: Feature[]
})
```

| Option | Type | Description |
| --- | --- | --- |
| `base` | `string` | Base URL of the API server. |
| `prefix` | `string` | URL path prefix prepended to all requests. |
| `suffix` | `string` | URL path suffix appended to all requests. |
| `feature` | `object` | Feature activation flags (e.g. `{ test: { active: true } }`). |
| `extend` | `Feature[]` | Additional feature instances to load. |

#### Methods

| Method | Returns | Description |
| --- | --- | --- |
| `options()` | `object` | Deep copy of current SDK options. |
| `utility()` | `Utility` | Deep copy of the SDK utility object. |
| `prepare(fetchargs?)` | `Promise<FetchDef>` | Build an HTTP request definition without sending it. |
| `direct(fetchargs?)` | `Promise<DirectResult>` | Build and send an HTTP request. |
| `Closure(data?)` | `ClosureEntity` | Create a Closure entity instance. |
| `ElectricChargingStation(data?)` | `ElectricChargingStationEntity` | Create an ElectricChargingStation entity instance. |
| `ListAutobahnen(data?)` | `ListAutobahnenEntity` | Create a ListAutobahnen entity instance. |
| `ParkingLorry(data?)` | `ParkingLorryEntity` | Create a ParkingLorry entity instance. |
| `Roadwork(data?)` | `RoadworkEntity` | Create a Roadwork entity instance. |
| `Warning(data?)` | `WarningEntity` | Create a Warning entity instance. |
| `Webcam(data?)` | `WebcamEntity` | Create a Webcam entity instance. |
| `tester(testopts?, sdkopts?)` | `AutobahnApiDeSDK` | Create a test-mode client instance. |

#### Static methods

| Method | Returns | Description |
| --- | --- | --- |
| `AutobahnApiDeSDK.test(testopts?, sdkopts?)` | `AutobahnApiDeSDK` | Create a test-mode client. |

### Entity interface

All entities share the same interface.

#### Methods

| Method | Signature | Description |
| --- | --- | --- |
| `load` | `load(reqmatch?, ctrl?): Promise<Entity>` | Load a single entity by match criteria. |
| `list` | `list(reqmatch?, ctrl?): Promise<Entity[]>` | List entities matching the criteria. |
| `create` | `create(reqdata?, ctrl?): Promise<Entity>` | Create a new entity. |
| `update` | `update(reqdata?, ctrl?): Promise<Entity>` | Update an existing entity. |
| `remove` | `remove(reqmatch?, ctrl?): Promise<void>` | Remove an entity. |
| `data` | `data(data?): any` | Get or set entity data. |
| `match` | `match(match?): any` | Get or set entity match criteria. |
| `make` | `make(): Entity` | Create a new instance with the same options. |
| `client` | `client(): AutobahnApiDeSDK` | Return the parent SDK client. |
| `entopts` | `entopts(): object` | Return a copy of the entity options. |

#### Return values

Entity operations resolve to the entity data directly — there is no
result envelope:

- `load`, `create` and `update` resolve to a single entity object.
- `list` resolves to an **array** of entity objects (iterate it directly;
  there is no `.data` and no `.ok`).
- `remove` resolves to `void`.

On a failed request these methods **throw**, so wrap calls in
`try`/`catch` to handle errors. Only `direct()` returns the result
envelope described below.

### DirectResult shape

The `direct()` method returns:

```ts
{
  ok: boolean
  status: number
  headers: object
  data: any
}
```

On error, `ok` is `false` and an `err` property contains the error.

### FetchDef shape

The `prepare()` method returns:

```ts
{
  url: string
  method: string
  headers: Record<string, string>
  body?: any
}
```

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

Operations: list, load.

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

Operations: list, load.

API path: `/{roadId}/services/electric_charging_station`

#### ListAutobahnen

| Field | Description |
| --- | --- |
| `road` |  |

Operations: list.

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

Operations: list, load.

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

Operations: list, load.

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

Operations: list, load.

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

Operations: list, load.

API path: `/{roadId}/services/webcam`



## Entities


### Closure

Create an instance: `const closure = client.Closure()`

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
const closure = await client.Closure().load({ id: 'closure_id' })
```

#### Example: List

```ts
const closures = await client.Closure().list()
```


### ElectricChargingStation

Create an instance: `const electric_charging_station = client.ElectricChargingStation()`

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
const electric_charging_station = await client.ElectricChargingStation().load({ id: 'electric_charging_station_id' })
```

#### Example: List

```ts
const electric_charging_stations = await client.ElectricChargingStation().list()
```


### ListAutobahnen

Create an instance: `const list_autobahnen = client.ListAutobahnen()`

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
const list_autobahnens = await client.ListAutobahnen().list()
```


### ParkingLorry

Create an instance: `const parking_lorry = client.ParkingLorry()`

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
const parking_lorry = await client.ParkingLorry().load({ id: 'parking_lorry_id' })
```

#### Example: List

```ts
const parking_lorrys = await client.ParkingLorry().list()
```


### Roadwork

Create an instance: `const roadwork = client.Roadwork()`

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
const roadwork = await client.Roadwork().load({ id: 'roadwork_id' })
```

#### Example: List

```ts
const roadworks = await client.Roadwork().list()
```


### Warning

Create an instance: `const warning = client.Warning()`

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
const warning = await client.Warning().load({ id: 'warning_id' })
```

#### Example: List

```ts
const warnings = await client.Warning().list()
```


### Webcam

Create an instance: `const webcam = client.Webcam()`

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
const webcam = await client.Webcam().load({ id: 'webcam_id' })
```

#### Example: List

```ts
const webcams = await client.Webcam().list()
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
error is returned to the caller.

An unexpected exception triggers the `PreUnexpected` hook before
propagating.

### Features and hooks

Features are the extension mechanism. A feature is an object with a
`hooks` map. Each hook key is a pipeline stage name, and the value is
a function that receives the context.

The SDK ships with built-in features:

- **TestFeature**: In-memory mock transport for testing without a live server

Features are initialized in order. Hooks fire in the order features
were added, so later features can override earlier ones.

### Module structure

```
autobahn-api-de/
├── src/
│   ├── AutobahnApiDeSDK.ts        # Main SDK class
│   ├── entity/             # Entity implementations
│   ├── feature/            # Built-in features (Base, Test, Log)
│   └── utility/            # Utility functions
├── test/                   # Test suites
└── dist/                   # Compiled output
```

Import the SDK from the package root:

```ts
import { AutobahnApiDeSDK } from '@voxgig-sdk/autobahn-api-de'
```

### Entity state

Entity instances are stateful. After a successful `load`, the entity
stores the returned data and match criteria internally. Subsequent
calls on the same instance can rely on this state.

```ts
const closure = client.Closure()
await closure.load({ id: "example_id" })

// closure.data() now returns the loaded closure data
// closure.match() returns { id: "example_id" }
```

Call `make()` to create a fresh instance with the same configuration
but no stored state.

### Direct vs entity access

The entity interface handles URL construction, parameter placement,
and response parsing automatically. Use it for standard CRUD operations.

The `direct` method gives full control over the HTTP request. Use it
for non-standard endpoints, bulk operations, or any path not modelled
as an entity. The `prepare` method is useful for debugging — it
shows exactly what `direct` would send.


## Full Reference

See [REFERENCE.md](REFERENCE.md) for complete API reference
documentation including all method signatures, entity field schemas,
and detailed usage examples.
