
import { BaseFeature } from './feature/base/BaseFeature'
import { TestFeature } from './feature/test/TestFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   test: TestFeature,

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
     test:     {
      "options": {
        "active": false
      }
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
              "parts": [
                "{road_id}",
                "services",
                "closure"
              ],
              "rename": {
                "param": {
                  "roadId": "road_id"
                }
              },
              "select": {
                "exist": [
                  "road_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.closure`"
              }
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
              "parts": [
                "details",
                "closure",
                "{id}"
              ],
              "rename": {
                "param": {
                  "closureId": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "{road_id}",
                "services",
                "electric_charging_station"
              ],
              "rename": {
                "param": {
                  "roadId": "road_id"
                }
              },
              "select": {
                "exist": [
                  "road_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.electric_charging_station`"
              }
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
              "parts": [
                "details",
                "electric_charging_station",
                "{id}"
              ],
              "rename": {
                "param": {
                  "stationId": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [],
              "select": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.roads`"
              }
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
              "parts": [
                "{road_id}",
                "services",
                "parking_lorry"
              ],
              "rename": {
                "param": {
                  "roadId": "road_id"
                }
              },
              "select": {
                "exist": [
                  "road_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.parking_lorry`"
              }
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
              "parts": [
                "details",
                "parking_lorry",
                "{id}"
              ],
              "rename": {
                "param": {
                  "lorryId": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "{road_id}",
                "services",
                "roadworks"
              ],
              "rename": {
                "param": {
                  "roadId": "road_id"
                }
              },
              "select": {
                "exist": [
                  "road_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.roadworks`"
              }
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
              "parts": [
                "details",
                "roadworks",
                "{id}"
              ],
              "rename": {
                "param": {
                  "roadworkId": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
              "parts": [
                "{road_id}",
                "services",
                "warning"
              ],
              "rename": {
                "param": {
                  "roadId": "road_id"
                }
              },
              "select": {
                "exist": [
                  "road_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.warning`"
              }
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
              "parts": [
                "details",
                "warning",
                "{id}"
              ],
              "rename": {
                "param": {
                  "warningId": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
          "name": "identifier",
          "type": "`$STRING`"
        },
        {
          "name": "imageurl",
          "type": "`$STRING`"
        },
        {
          "name": "isBlocked",
          "type": "`$STRING`"
        },
        {
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
              "parts": [
                "{road_id}",
                "services",
                "webcam"
              ],
              "rename": {
                "param": {
                  "roadId": "road_id"
                }
              },
              "select": {
                "exist": [
                  "road_id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body.webcam`"
              }
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
              "parts": [
                "details",
                "webcam",
                "{id}"
              ],
              "rename": {
                "param": {
                  "webcamId": "id"
                }
              },
              "select": {
                "exist": [
                  "id"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              }
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
  config
}

