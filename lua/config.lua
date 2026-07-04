-- ProjectName SDK configuration

local function make_config()
  return {
    main = {
      name = "AutobahnApiDe",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://verkehr.autobahn.de/o/autobahn",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["closure"] = {},
        ["electric_charging_station"] = {},
        ["list_autobahnen"] = {},
        ["parking_lorry"] = {},
        ["roadwork"] = {},
        ["warning"] = {},
        ["webcam"] = {},
      },
    },
    entity = {
      ["closure"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "coordinate",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "description",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "display_type",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "extent",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "footer",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "future",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "icon",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "identifier",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "is_blocked",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "lorry_parking_feature_icon",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "point",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "route_recommendation",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "start_timestamp",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "subtitle",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "title",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 14,
          },
        },
        ["name"] = "closure",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "A1",
                      ["kind"] = "param",
                      ["name"] = "road_id",
                      ["orig"] = "road_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/{roadId}/services/closure",
                ["parts"] = {
                  "{road_id}",
                  "services",
                  "closure",
                },
                ["rename"] = {
                  ["param"] = {
                    ["roadId"] = "road_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "road_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.closure`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "Q0xPU1VSRV9fbWRtLnZpel9fTE1TLU5XL3JfVElDLU5SV0JMSy8zOS9OUldCTEsvMTAgMzUgMjEgRCAwOTI0Mi0wMV9EICBOVyBMTVMtTlcuMA==",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "closure_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/details/closure/{closureId}",
                ["parts"] = {
                  "details",
                  "closure",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["closureId"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["electric_charging_station"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "coordinate",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "description",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "display_type",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "extent",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "footer",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "future",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "icon",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "identifier",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "is_blocked",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "lorry_parking_feature_icon",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "point",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "route_recommendation",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "subtitle",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "title",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 13,
          },
        },
        ["name"] = "electric_charging_station",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "A1",
                      ["kind"] = "param",
                      ["name"] = "road_id",
                      ["orig"] = "road_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/{roadId}/services/electric_charging_station",
                ["parts"] = {
                  "{road_id}",
                  "services",
                  "electric_charging_station",
                },
                ["rename"] = {
                  ["param"] = {
                    ["roadId"] = "road_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "road_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.electric_charging_station`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "RUxFQ1RSSUNfQ0hBUkdJTkdfU1RBVElPTl9fMTczMzM=",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "station_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/details/electric_charging_station/{stationId}",
                ["parts"] = {
                  "details",
                  "electric_charging_station",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["stationId"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["list_autobahnen"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "road",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 0,
          },
        },
        ["name"] = "list_autobahnen",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {},
                ["method"] = "GET",
                ["orig"] = "/",
                ["parts"] = {},
                ["select"] = {},
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["parking_lorry"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "coordinate",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "description",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "display_type",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "extent",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "footer",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "future",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "icon",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "identifier",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "is_blocked",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "lorry_parking_feature_icon",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "point",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "route_recommendation",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "subtitle",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "title",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 13,
          },
        },
        ["name"] = "parking_lorry",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "A1",
                      ["kind"] = "param",
                      ["name"] = "road_id",
                      ["orig"] = "road_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/{roadId}/services/parking_lorry",
                ["parts"] = {
                  "{road_id}",
                  "services",
                  "parking_lorry",
                },
                ["rename"] = {
                  ["param"] = {
                    ["roadId"] = "road_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "road_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.parking_lorry`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "UEFSS0lOR19fbWRtLmxvcnJ5LnBhcmtpbmdfX0RFLVNILTAwMTEwOA==",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "lorry_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/details/parking_lorry/{lorryId}",
                ["parts"] = {
                  "details",
                  "parking_lorry",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["lorryId"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["roadwork"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "coordinate",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "description",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "display_type",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "extent",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "footer",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "future",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "icon",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "identifier",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "is_blocked",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "lorry_parking_feature_icon",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "point",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "route_recommendation",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "start_timestamp",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "subtitle",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "title",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 14,
          },
        },
        ["name"] = "roadwork",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "A1",
                      ["kind"] = "param",
                      ["name"] = "road_id",
                      ["orig"] = "road_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/{roadId}/services/roadworks",
                ["parts"] = {
                  "{road_id}",
                  "services",
                  "roadworks",
                },
                ["rename"] = {
                  ["param"] = {
                    ["roadId"] = "road_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "road_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "Uk9BRFdPUktTX19tZG0ubndfXzAyLTgwMDAwIEQgNzEgMTkgMDkvS0xCV1JO",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "roadwork_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/details/roadworks/{roadworkId}",
                ["parts"] = {
                  "details",
                  "roadworks",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["roadworkId"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["warning"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "coordinate",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "description",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "display_type",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "extent",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "footer",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "future",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "icon",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "identifier",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "is_blocked",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "lorry_parking_feature_icon",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "point",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "route_recommendation",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "start_timestamp",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "subtitle",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "title",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 14,
          },
        },
        ["name"] = "warning",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "A1",
                      ["kind"] = "param",
                      ["name"] = "road_id",
                      ["orig"] = "road_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/{roadId}/services/warning",
                ["parts"] = {
                  "{road_id}",
                  "services",
                  "warning",
                },
                ["rename"] = {
                  ["param"] = {
                    ["roadId"] = "road_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "road_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.warning`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "V0FSTklOR19fbWRtLnZpel9fTE1TLU5XL3JfTE1TLU5XLzMyNDE3OV9EICBOVyBMTVMtTlcuMA==",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "warning_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/details/warning/{warningId}",
                ["parts"] = {
                  "details",
                  "warning",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["warningId"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["webcam"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "coordinate",
            ["req"] = false,
            ["type"] = "`$OBJECT`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "description",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "display_type",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "extent",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "footer",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "future",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "icon",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "identifier",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "imageurl",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "is_blocked",
            ["req"] = false,
            ["type"] = "`$BOOLEAN`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "linkurl",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "lorry_parking_feature_icon",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "operator",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "point",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "route_recommendation",
            ["req"] = false,
            ["type"] = "`$ARRAY`",
            ["index$"] = 14,
          },
          {
            ["active"] = true,
            ["name"] = "subtitle",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 15,
          },
          {
            ["active"] = true,
            ["name"] = "title",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 16,
          },
        },
        ["name"] = "webcam",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "A1",
                      ["kind"] = "param",
                      ["name"] = "road_id",
                      ["orig"] = "road_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/{roadId}/services/webcam",
                ["parts"] = {
                  "{road_id}",
                  "services",
                  "webcam",
                },
                ["rename"] = {
                  ["param"] = {
                    ["roadId"] = "road_id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "road_id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body.webcam`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["params"] = {
                    {
                      ["active"] = true,
                      ["example"] = "V0VCQ0FNX19OUldfU2lsYS1TaWduYWxiYXVfMTAxMDgxNDE3MjM4ODYzOTk5MTU=",
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "webcam_id",
                      ["reqd"] = true,
                      ["type"] = "`$STRING`",
                      ["index$"] = 0,
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/details/webcam/{webcamId}",
                ["parts"] = {
                  "details",
                  "webcam",
                  "{id}",
                },
                ["rename"] = {
                  ["param"] = {
                    ["webcamId"] = "id",
                  },
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "load",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
