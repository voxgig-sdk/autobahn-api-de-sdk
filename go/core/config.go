package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "AutobahnApiDe",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
			},
		},
		"options": map[string]any{
			"base": "https://verkehr.autobahn.de/o/autobahn",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"closure": map[string]any{},
				"electric_charging_station": map[string]any{},
				"list_autobahnen": map[string]any{},
				"parking_lorry": map[string]any{},
				"roadwork": map[string]any{},
				"warning": map[string]any{},
				"webcam": map[string]any{},
			},
		},
		"entity": map[string]any{
			"closure": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coordinate",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "description",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "display_type",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "extent",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "footer",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "future",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "icon",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "identifier",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "is_blocked",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "lorry_parking_feature_icon",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "point",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "route_recommendation",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "start_timestamp",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "subtitle",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 14,
					},
				},
				"name": "closure",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "A1",
											"kind": "param",
											"name": "road_id",
											"orig": "road_id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/{roadId}/services/closure",
								"parts": []any{
									"{road_id}",
									"services",
									"closure",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"roadId": "road_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"road_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "Q0xPU1VSRV9fbWRtLnZpel9fTE1TLU5XL3JfVElDLU5SV0JMSy8zOS9OUldCTEsvMTAgMzUgMjEgRCAwOTI0Mi0wMV9EICBOVyBMTVMtTlcuMA==",
											"kind": "param",
											"name": "id",
											"orig": "closure_id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/details/closure/{closureId}",
								"parts": []any{
									"details",
									"closure",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"closureId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"electric_charging_station": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coordinate",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "description",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "display_type",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "extent",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "footer",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "future",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "icon",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "identifier",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "is_blocked",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "lorry_parking_feature_icon",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "point",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "route_recommendation",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "subtitle",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 13,
					},
				},
				"name": "electric_charging_station",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "A1",
											"kind": "param",
											"name": "road_id",
											"orig": "road_id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/{roadId}/services/electric_charging_station",
								"parts": []any{
									"{road_id}",
									"services",
									"electric_charging_station",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"roadId": "road_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"road_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "RUxFQ1RSSUNfQ0hBUkdJTkdfU1RBVElPTl9fMTczMzM=",
											"kind": "param",
											"name": "id",
											"orig": "station_id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/details/electric_charging_station/{stationId}",
								"parts": []any{
									"details",
									"electric_charging_station",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"stationId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_autobahnen": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "road",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 0,
					},
				},
				"name": "list_autobahnen",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"method": "GET",
								"orig": "/",
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"parts": []any{},
								"args": map[string]any{},
								"select": map[string]any{},
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"parking_lorry": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coordinate",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "description",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "display_type",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "extent",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "footer",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "future",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "icon",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "identifier",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "is_blocked",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "lorry_parking_feature_icon",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "point",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "route_recommendation",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "subtitle",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 13,
					},
				},
				"name": "parking_lorry",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "A1",
											"kind": "param",
											"name": "road_id",
											"orig": "road_id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/{roadId}/services/parking_lorry",
								"parts": []any{
									"{road_id}",
									"services",
									"parking_lorry",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"roadId": "road_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"road_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "UEFSS0lOR19fbWRtLmxvcnJ5LnBhcmtpbmdfX0RFLVNILTAwMTEwOA==",
											"kind": "param",
											"name": "id",
											"orig": "lorry_id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/details/parking_lorry/{lorryId}",
								"parts": []any{
									"details",
									"parking_lorry",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"lorryId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"roadwork": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coordinate",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "description",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "display_type",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "extent",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "footer",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "future",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "icon",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "identifier",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "is_blocked",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "lorry_parking_feature_icon",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "point",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "route_recommendation",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "start_timestamp",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "subtitle",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 14,
					},
				},
				"name": "roadwork",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "A1",
											"kind": "param",
											"name": "road_id",
											"orig": "road_id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/{roadId}/services/roadworks",
								"parts": []any{
									"{road_id}",
									"services",
									"roadworks",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"roadId": "road_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"road_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "Uk9BRFdPUktTX19tZG0ubndfXzAyLTgwMDAwIEQgNzEgMTkgMDkvS0xCV1JO",
											"kind": "param",
											"name": "id",
											"orig": "roadwork_id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/details/roadworks/{roadworkId}",
								"parts": []any{
									"details",
									"roadworks",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"roadworkId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"warning": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coordinate",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "description",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "display_type",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "extent",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "footer",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "future",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "icon",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "identifier",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "is_blocked",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "lorry_parking_feature_icon",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "point",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "route_recommendation",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "start_timestamp",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "subtitle",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 14,
					},
				},
				"name": "warning",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "A1",
											"kind": "param",
											"name": "road_id",
											"orig": "road_id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/{roadId}/services/warning",
								"parts": []any{
									"{road_id}",
									"services",
									"warning",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"roadId": "road_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"road_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "V0FSTklOR19fbWRtLnZpel9fTE1TLU5XL3JfTE1TLU5XLzMyNDE3OV9EICBOVyBMTVMtTlcuMA==",
											"kind": "param",
											"name": "id",
											"orig": "warning_id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/details/warning/{warningId}",
								"parts": []any{
									"details",
									"warning",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"warningId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"webcam": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "coordinate",
						"req": false,
						"type": "`$OBJECT`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "description",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "display_type",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "extent",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "footer",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "future",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "icon",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "identifier",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "imageurl",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "is_blocked",
						"req": false,
						"type": "`$BOOLEAN`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "linkurl",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "lorry_parking_feature_icon",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "operator",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "point",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "route_recommendation",
						"req": false,
						"type": "`$ARRAY`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "subtitle",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "title",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 16,
					},
				},
				"name": "webcam",
				"op": map[string]any{
					"list": map[string]any{
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "A1",
											"kind": "param",
											"name": "road_id",
											"orig": "road_id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/{roadId}/services/webcam",
								"parts": []any{
									"{road_id}",
									"services",
									"webcam",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"roadId": "road_id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"road_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
					"load": map[string]any{
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"example": "V0VCQ0FNX19OUldfU2lsYS1TaWduYWxiYXVfMTAxMDgxNDE3MjM4ODYzOTk5MTU=",
											"kind": "param",
											"name": "id",
											"orig": "webcam_id",
											"reqd": true,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/details/webcam/{webcamId}",
								"parts": []any{
									"details",
									"webcam",
									"{id}",
								},
								"rename": map[string]any{
									"param": map[string]any{
										"webcamId": "id",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "load",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
