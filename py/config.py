# AutobahnApiDe SDK configuration


def make_config():
    return {
        "main": {
            "name": "AutobahnApiDe",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://verkehr.autobahn.de/o/autobahn",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "closure": {},
                "electric_charging_station": {},
                "list_autobahnen": {},
                "parking_lorry": {},
                "roadwork": {},
                "warning": {},
                "webcam": {},
            },
        },
        "entity": {
      "closure": {
        "fields": [
          {
            "name": "coordinate",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "description",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "display_type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "extent",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "footer",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "future",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "identifier",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "is_blocked",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "lorry_parking_feature_icon",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "point",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "route_recommendation",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "start_timestamp",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "subtitle",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 14,
          },
        ],
        "name": "closure",
        "op": {
          "list": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/{roadId}/services/closure",
                "parts": [
                  "{road_id}",
                  "services",
                  "closure",
                ],
                "rename": {
                  "param": {
                    "roadId": "road_id",
                  },
                },
                "select": {
                  "exist": [
                    "road_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/details/closure/{closureId}",
                "parts": [
                  "details",
                  "closure",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "closureId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "electric_charging_station": {
        "fields": [
          {
            "name": "coordinate",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "description",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "display_type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "extent",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "footer",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "future",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "identifier",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "is_blocked",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "lorry_parking_feature_icon",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "point",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "route_recommendation",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "subtitle",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
        ],
        "name": "electric_charging_station",
        "op": {
          "list": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/{roadId}/services/electric_charging_station",
                "parts": [
                  "{road_id}",
                  "services",
                  "electric_charging_station",
                ],
                "rename": {
                  "param": {
                    "roadId": "road_id",
                  },
                },
                "select": {
                  "exist": [
                    "road_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/details/electric_charging_station/{stationId}",
                "parts": [
                  "details",
                  "electric_charging_station",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "stationId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "list_autobahnen": {
        "fields": [
          {
            "name": "road",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 0,
          },
        ],
        "name": "list_autobahnen",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/",
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "parts": [],
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "parking_lorry": {
        "fields": [
          {
            "name": "coordinate",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "description",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "display_type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "extent",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "footer",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "future",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "identifier",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "is_blocked",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "lorry_parking_feature_icon",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "point",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "route_recommendation",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "subtitle",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
        ],
        "name": "parking_lorry",
        "op": {
          "list": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/{roadId}/services/parking_lorry",
                "parts": [
                  "{road_id}",
                  "services",
                  "parking_lorry",
                ],
                "rename": {
                  "param": {
                    "roadId": "road_id",
                  },
                },
                "select": {
                  "exist": [
                    "road_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/details/parking_lorry/{lorryId}",
                "parts": [
                  "details",
                  "parking_lorry",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "lorryId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "roadwork": {
        "fields": [
          {
            "name": "coordinate",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "description",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "display_type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "extent",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "footer",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "future",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "identifier",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "is_blocked",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "lorry_parking_feature_icon",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "point",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "route_recommendation",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "start_timestamp",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "subtitle",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 14,
          },
        ],
        "name": "roadwork",
        "op": {
          "list": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/{roadId}/services/roadworks",
                "parts": [
                  "{road_id}",
                  "services",
                  "roadworks",
                ],
                "rename": {
                  "param": {
                    "roadId": "road_id",
                  },
                },
                "select": {
                  "exist": [
                    "road_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/details/roadworks/{roadworkId}",
                "parts": [
                  "details",
                  "roadworks",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "roadworkId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "warning": {
        "fields": [
          {
            "name": "coordinate",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "description",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "display_type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "extent",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "footer",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "future",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "identifier",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "is_blocked",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "lorry_parking_feature_icon",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "point",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "route_recommendation",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "start_timestamp",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "subtitle",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 14,
          },
        ],
        "name": "warning",
        "op": {
          "list": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/{roadId}/services/warning",
                "parts": [
                  "{road_id}",
                  "services",
                  "warning",
                ],
                "rename": {
                  "param": {
                    "roadId": "road_id",
                  },
                },
                "select": {
                  "exist": [
                    "road_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/details/warning/{warningId}",
                "parts": [
                  "details",
                  "warning",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "warningId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "webcam": {
        "fields": [
          {
            "name": "coordinate",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "description",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "display_type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "extent",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "footer",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "future",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "icon",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "identifier",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "imageurl",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "is_blocked",
            "req": False,
            "type": "`$BOOLEAN`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "linkurl",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "lorry_parking_feature_icon",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "operator",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "point",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "route_recommendation",
            "req": False,
            "type": "`$ARRAY`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "subtitle",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "title",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 16,
          },
        ],
        "name": "webcam",
        "op": {
          "list": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/{roadId}/services/webcam",
                "parts": [
                  "{road_id}",
                  "services",
                  "webcam",
                ],
                "rename": {
                  "param": {
                    "roadId": "road_id",
                  },
                },
                "select": {
                  "exist": [
                    "road_id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
          "load": {
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
                      "reqd": True,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/details/webcam/{webcamId}",
                "parts": [
                  "details",
                  "webcam",
                  "{id}",
                ],
                "rename": {
                  "param": {
                    "webcamId": "id",
                  },
                },
                "select": {
                  "exist": [
                    "id",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "load",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
