
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'AutobahnApiDe',
        slug: "autobahn-api-de",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://verkehr.autobahn.de/o/autobahn",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        closure: {
        },
  
        electric_charging_station: {
        },
  
        list_autobahnen: {
        },
  
        parking_lorry: {
        },
  
        roadwork: {
        },
  
        warning: {
        },
  
        webcam: {
        },
  
    }
  }


  entity = {
    "closure": {
      "fields": [
        {
          "name": "coordinate",
          "type": "`$OBJECT`"
        },
        {
          "name": "description",
          "type": "`$ARRAY`"
        },
        {
          "name": "display_type",
          "type": "`$STRING`"
        },
        {
          "name": "extent",
          "type": "`$STRING`"
        },
        {
          "name": "footer",
          "type": "`$ARRAY`"
        },
        {
          "name": "future",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "icon",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "identifier",
          "type": "`$STRING`"
        },
        {
          "name": "isBlocked",
          "type": "`$STRING`"
        },
        {
          "name": "lorryParkingFeatureIcons",
          "type": "`$ARRAY`"
        },
        {
          "name": "point",
          "type": "`$STRING`"
        },
        {
          "name": "routeRecommendation",
          "type": "`$ARRAY`"
        },
        {
          "name": "startTimestamp",
          "type": "`$STRING`"
        },
        {
          "name": "subtitle",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "closure",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "A1",
                    "kind": "param",
                    "name": "road_id",
                    "orig": "road_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{roadId}/services/closure",
              "rename": {
                "param": {
                  "roadId": "road_id"
                }
              },
              "segments": [
                {
                  "var": "road_id"
                },
                {
                  "lit": "services"
                },
                {
                  "lit": "closure"
                }
              ],
              "select": {
                "exist": [
                  "road_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.closure`"
              },
              "parts": [
                "{road_id}",
                "services",
                "closure"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "Q0xPU1VSRV9fbWRtLnZpel9fTE1TLU5XL3JfVElDLU5SV0JMSy8zOS9OUldCTEsvMTAgMzUgMjEgRCAwOTI0Mi0wMV9EICBOVyBMTVMtTlcuMA==",
                    "kind": "param",
                    "name": "id",
                    "orig": "closure_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/details/closure/{closureId}",
              "rename": {
                "param": {
                  "closureId": "id"
                }
              },
              "segments": [
                {
                  "lit": "details"
                },
                {
                  "lit": "closure"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "details",
                "closure",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "electric_charging_station": {
      "fields": [
        {
          "name": "coordinate",
          "short": "Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84).",
          "type": "`$OBJECT`"
        },
        {
          "name": "description",
          "type": "`$ARRAY`"
        },
        {
          "name": "display_type",
          "type": "`$STRING`"
        },
        {
          "name": "extent",
          "short": "Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.",
          "type": "`$STRING`"
        },
        {
          "name": "footer",
          "type": "`$ARRAY`"
        },
        {
          "name": "future",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "icon",
          "short": "Sinnbild, das die Art des Eintrags beschreibt.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "format": "byte",
          "name": "identifier",
          "type": "`$STRING`"
        },
        {
          "name": "isBlocked",
          "type": "`$STRING`"
        },
        {
          "name": "lorryParkingFeatureIcons",
          "type": "`$ARRAY`"
        },
        {
          "name": "point",
          "short": "Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84).",
          "type": "`$STRING`"
        },
        {
          "name": "routeRecommendation",
          "type": "`$ARRAY`"
        },
        {
          "name": "subtitle",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "electric_charging_station",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "A1",
                    "kind": "param",
                    "name": "road_id",
                    "orig": "road_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{roadId}/services/electric_charging_station",
              "rename": {
                "param": {
                  "roadId": "road_id"
                }
              },
              "segments": [
                {
                  "var": "road_id"
                },
                {
                  "lit": "services"
                },
                {
                  "lit": "electric_charging_station"
                }
              ],
              "select": {
                "exist": [
                  "road_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.electric_charging_station`"
              },
              "parts": [
                "{road_id}",
                "services",
                "electric_charging_station"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "RUxFQ1RSSUNfQ0hBUkdJTkdfU1RBVElPTl9fMTczMzM=",
                    "kind": "param",
                    "name": "id",
                    "orig": "station_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/details/electric_charging_station/{stationId}",
              "rename": {
                "param": {
                  "stationId": "id"
                }
              },
              "segments": [
                {
                  "lit": "details"
                },
                {
                  "lit": "electric_charging_station"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "details",
                "electric_charging_station",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "list_autobahnen": {
      "fields": [
        {
          "name": "roads",
          "type": "`$ARRAY`"
        }
      ],
      "name": "list_autobahnen",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {},
              "kind": "http",
              "method": "GET",
              "orig": "/",
              "segments": [],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.roads`"
              },
              "parts": []
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "parking_lorry": {
      "fields": [
        {
          "name": "coordinate",
          "short": "Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84).",
          "type": "`$OBJECT`"
        },
        {
          "name": "description",
          "type": "`$ARRAY`"
        },
        {
          "name": "display_type",
          "type": "`$STRING`"
        },
        {
          "name": "extent",
          "short": "Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.",
          "type": "`$STRING`"
        },
        {
          "name": "footer",
          "type": "`$ARRAY`"
        },
        {
          "name": "future",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "icon",
          "short": "Sinnbild, das die Art des Eintrags beschreibt.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "format": "byte",
          "name": "identifier",
          "type": "`$STRING`"
        },
        {
          "name": "isBlocked",
          "type": "`$STRING`"
        },
        {
          "name": "lorryParkingFeatureIcons",
          "type": "`$ARRAY`"
        },
        {
          "name": "point",
          "short": "Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84).",
          "type": "`$STRING`"
        },
        {
          "name": "routeRecommendation",
          "type": "`$ARRAY`"
        },
        {
          "name": "subtitle",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "parking_lorry",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "A1",
                    "kind": "param",
                    "name": "road_id",
                    "orig": "road_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{roadId}/services/parking_lorry",
              "rename": {
                "param": {
                  "roadId": "road_id"
                }
              },
              "segments": [
                {
                  "var": "road_id"
                },
                {
                  "lit": "services"
                },
                {
                  "lit": "parking_lorry"
                }
              ],
              "select": {
                "exist": [
                  "road_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.parking_lorry`"
              },
              "parts": [
                "{road_id}",
                "services",
                "parking_lorry"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "UEFSS0lOR19fbWRtLmxvcnJ5LnBhcmtpbmdfX0RFLVNILTAwMTEwOA==",
                    "kind": "param",
                    "name": "id",
                    "orig": "lorry_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/details/parking_lorry/{lorryId}",
              "rename": {
                "param": {
                  "lorryId": "id"
                }
              },
              "segments": [
                {
                  "lit": "details"
                },
                {
                  "lit": "parking_lorry"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "details",
                "parking_lorry",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "roadwork": {
      "fields": [
        {
          "name": "coordinate",
          "type": "`$OBJECT`"
        },
        {
          "name": "description",
          "type": "`$ARRAY`"
        },
        {
          "name": "display_type",
          "type": "`$STRING`"
        },
        {
          "name": "extent",
          "type": "`$STRING`"
        },
        {
          "name": "footer",
          "type": "`$ARRAY`"
        },
        {
          "name": "future",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "icon",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "identifier",
          "type": "`$STRING`"
        },
        {
          "name": "isBlocked",
          "type": "`$STRING`"
        },
        {
          "name": "lorryParkingFeatureIcons",
          "type": "`$ARRAY`"
        },
        {
          "name": "point",
          "type": "`$STRING`"
        },
        {
          "name": "routeRecommendation",
          "type": "`$ARRAY`"
        },
        {
          "name": "startTimestamp",
          "type": "`$STRING`"
        },
        {
          "name": "subtitle",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "roadwork",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "A1",
                    "kind": "param",
                    "name": "road_id",
                    "orig": "road_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{roadId}/services/roadworks",
              "rename": {
                "param": {
                  "roadId": "road_id"
                }
              },
              "segments": [
                {
                  "var": "road_id"
                },
                {
                  "lit": "services"
                },
                {
                  "lit": "roadworks"
                }
              ],
              "select": {
                "exist": [
                  "road_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.roadworks`"
              },
              "parts": [
                "{road_id}",
                "services",
                "roadworks"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "Uk9BRFdPUktTX19tZG0ubndfXzAyLTgwMDAwIEQgNzEgMTkgMDkvS0xCV1JO",
                    "kind": "param",
                    "name": "id",
                    "orig": "roadwork_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/details/roadworks/{roadworkId}",
              "rename": {
                "param": {
                  "roadworkId": "id"
                }
              },
              "segments": [
                {
                  "lit": "details"
                },
                {
                  "lit": "roadworks"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "details",
                "roadworks",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "warning": {
      "fields": [
        {
          "name": "coordinate",
          "type": "`$OBJECT`"
        },
        {
          "name": "description",
          "type": "`$ARRAY`"
        },
        {
          "name": "display_type",
          "type": "`$STRING`"
        },
        {
          "name": "extent",
          "type": "`$STRING`"
        },
        {
          "name": "footer",
          "type": "`$ARRAY`"
        },
        {
          "name": "future",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "icon",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "name": "identifier",
          "type": "`$STRING`"
        },
        {
          "name": "isBlocked",
          "type": "`$STRING`"
        },
        {
          "name": "lorryParkingFeatureIcons",
          "type": "`$ARRAY`"
        },
        {
          "name": "point",
          "type": "`$STRING`"
        },
        {
          "name": "routeRecommendation",
          "type": "`$ARRAY`"
        },
        {
          "name": "startTimestamp",
          "type": "`$STRING`"
        },
        {
          "name": "subtitle",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "warning",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "A1",
                    "kind": "param",
                    "name": "road_id",
                    "orig": "road_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{roadId}/services/warning",
              "rename": {
                "param": {
                  "roadId": "road_id"
                }
              },
              "segments": [
                {
                  "var": "road_id"
                },
                {
                  "lit": "services"
                },
                {
                  "lit": "warning"
                }
              ],
              "select": {
                "exist": [
                  "road_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.warning`"
              },
              "parts": [
                "{road_id}",
                "services",
                "warning"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "V0FSTklOR19fbWRtLnZpel9fTE1TLU5XL3JfTE1TLU5XLzMyNDE3OV9EICBOVyBMTVMtTlcuMA==",
                    "kind": "param",
                    "name": "id",
                    "orig": "warning_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/details/warning/{warningId}",
              "rename": {
                "param": {
                  "warningId": "id"
                }
              },
              "segments": [
                {
                  "lit": "details"
                },
                {
                  "lit": "warning"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "details",
                "warning",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "webcam": {
      "fields": [
        {
          "name": "coordinate",
          "short": "Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84).",
          "type": "`$OBJECT`"
        },
        {
          "name": "description",
          "type": "`$ARRAY`"
        },
        {
          "name": "display_type",
          "type": "`$STRING`"
        },
        {
          "name": "extent",
          "short": "Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.",
          "type": "`$STRING`"
        },
        {
          "name": "footer",
          "type": "`$ARRAY`"
        },
        {
          "name": "future",
          "type": "`$BOOLEAN`"
        },
        {
          "name": "icon",
          "short": "Sinnbild, das die Art des Eintrags beschreibt.",
          "type": "`$STRING`"
        },
        {
          "name": "id",
          "type": "`$STRING`"
        },
        {
          "format": "byte",
          "name": "identifier",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "imageurl",
          "type": "`$STRING`"
        },
        {
          "name": "isBlocked",
          "type": "`$STRING`"
        },
        {
          "format": "uri",
          "name": "linkurl",
          "type": "`$STRING`"
        },
        {
          "name": "lorryParkingFeatureIcons",
          "type": "`$ARRAY`"
        },
        {
          "name": "operator",
          "type": "`$STRING`"
        },
        {
          "name": "point",
          "short": "Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84).",
          "type": "`$STRING`"
        },
        {
          "name": "routeRecommendation",
          "type": "`$ARRAY`"
        },
        {
          "name": "subtitle",
          "type": "`$STRING`"
        },
        {
          "name": "title",
          "type": "`$STRING`"
        }
      ],
      "id": {
        "field": "id",
        "name": "id"
      },
      "name": "webcam",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "A1",
                    "kind": "param",
                    "name": "road_id",
                    "orig": "road_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/{roadId}/services/webcam",
              "rename": {
                "param": {
                  "roadId": "road_id"
                }
              },
              "segments": [
                {
                  "var": "road_id"
                },
                {
                  "lit": "services"
                },
                {
                  "lit": "webcam"
                }
              ],
              "select": {
                "exist": [
                  "road_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.webcam`"
              },
              "parts": [
                "{road_id}",
                "services",
                "webcam"
              ]
            }
          ]
        },
        "load": {
          "input": "data",
          "name": "load",
          "points": [
            {
              "args": {
                "params": [
                  {
                    "example": "V0VCQ0FNX19OUldfU2lsYS1TaWduYWxiYXVfMTAxMDgxNDE3MjM4ODYzOTk5MTU=",
                    "kind": "param",
                    "name": "id",
                    "orig": "webcam_id",
                    "reqd": true,
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/details/webcam/{webcamId}",
              "rename": {
                "param": {
                  "webcamId": "id"
                }
              },
              "segments": [
                {
                  "lit": "details"
                },
                {
                  "lit": "webcam"
                },
                {
                  "var": "id"
                }
              ],
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "details",
                "webcam",
                "{id}"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

