package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "AutobahnApiDe",
			"slug": "autobahn-api-de",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "description",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "display_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extent",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "footer",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "future",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isBlocked",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lorryParkingFeatureIcons",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "point",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "routeRecommendation",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "startTimestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subtitle",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "closure",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
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
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{roadId}/services/closure",
								"rename": map[string]any{
									"param": map[string]any{
										"roadId": "road_id",
									},
								},
								"segments": []any{
									map[string]any{
										"var": "road_id",
									},
									map[string]any{
										"lit": "services",
									},
									map[string]any{
										"lit": "closure",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"road_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.closure`",
								},
								"parts": []any{
									"{road_id}",
									"services",
									"closure",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
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
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/details/closure/{closureId}",
								"rename": map[string]any{
									"param": map[string]any{
										"closureId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "details",
									},
									map[string]any{
										"lit": "closure",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"details",
									"closure",
									"{id}",
								},
							},
						},
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
						"short": "Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84).",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "description",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "display_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extent",
						"short": "Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "footer",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "future",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "icon",
						"short": "Sinnbild, das die Art des Eintrags beschreibt.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "byte",
						"name": "identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isBlocked",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lorryParkingFeatureIcons",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "point",
						"short": "Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "routeRecommendation",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "subtitle",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "electric_charging_station",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
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
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{roadId}/services/electric_charging_station",
								"rename": map[string]any{
									"param": map[string]any{
										"roadId": "road_id",
									},
								},
								"segments": []any{
									map[string]any{
										"var": "road_id",
									},
									map[string]any{
										"lit": "services",
									},
									map[string]any{
										"lit": "electric_charging_station",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"road_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.electric_charging_station`",
								},
								"parts": []any{
									"{road_id}",
									"services",
									"electric_charging_station",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
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
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/details/electric_charging_station/{stationId}",
								"rename": map[string]any{
									"param": map[string]any{
										"stationId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "details",
									},
									map[string]any{
										"lit": "electric_charging_station",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"details",
									"electric_charging_station",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"list_autobahnen": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "roads",
						"type": "`$ARRAY`",
					},
				},
				"name": "list_autobahnen",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{},
								"kind": "http",
								"method": "GET",
								"orig": "/",
								"segments": []any{},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.roads`",
								},
								"parts": []any{},
							},
						},
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
						"short": "Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84).",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "description",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "display_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extent",
						"short": "Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "footer",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "future",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "icon",
						"short": "Sinnbild, das die Art des Eintrags beschreibt.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "byte",
						"name": "identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isBlocked",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lorryParkingFeatureIcons",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "point",
						"short": "Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "routeRecommendation",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "subtitle",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "parking_lorry",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
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
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{roadId}/services/parking_lorry",
								"rename": map[string]any{
									"param": map[string]any{
										"roadId": "road_id",
									},
								},
								"segments": []any{
									map[string]any{
										"var": "road_id",
									},
									map[string]any{
										"lit": "services",
									},
									map[string]any{
										"lit": "parking_lorry",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"road_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.parking_lorry`",
								},
								"parts": []any{
									"{road_id}",
									"services",
									"parking_lorry",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
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
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/details/parking_lorry/{lorryId}",
								"rename": map[string]any{
									"param": map[string]any{
										"lorryId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "details",
									},
									map[string]any{
										"lit": "parking_lorry",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"details",
									"parking_lorry",
									"{id}",
								},
							},
						},
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "description",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "display_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extent",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "footer",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "future",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isBlocked",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lorryParkingFeatureIcons",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "point",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "routeRecommendation",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "startTimestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subtitle",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "roadwork",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
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
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{roadId}/services/roadworks",
								"rename": map[string]any{
									"param": map[string]any{
										"roadId": "road_id",
									},
								},
								"segments": []any{
									map[string]any{
										"var": "road_id",
									},
									map[string]any{
										"lit": "services",
									},
									map[string]any{
										"lit": "roadworks",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"road_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.roadworks`",
								},
								"parts": []any{
									"{road_id}",
									"services",
									"roadworks",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
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
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/details/roadworks/{roadworkId}",
								"rename": map[string]any{
									"param": map[string]any{
										"roadworkId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "details",
									},
									map[string]any{
										"lit": "roadworks",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"details",
									"roadworks",
									"{id}",
								},
							},
						},
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
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "description",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "display_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extent",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "footer",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "future",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "icon",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isBlocked",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lorryParkingFeatureIcons",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "point",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "routeRecommendation",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "startTimestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "subtitle",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "warning",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
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
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{roadId}/services/warning",
								"rename": map[string]any{
									"param": map[string]any{
										"roadId": "road_id",
									},
								},
								"segments": []any{
									map[string]any{
										"var": "road_id",
									},
									map[string]any{
										"lit": "services",
									},
									map[string]any{
										"lit": "warning",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"road_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.warning`",
								},
								"parts": []any{
									"{road_id}",
									"services",
									"warning",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
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
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/details/warning/{warningId}",
								"rename": map[string]any{
									"param": map[string]any{
										"warningId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "details",
									},
									map[string]any{
										"lit": "warning",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"details",
									"warning",
									"{id}",
								},
							},
						},
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
						"short": "Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84).",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "description",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "display_type",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "extent",
						"short": "Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "footer",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "future",
						"type": "`$BOOLEAN`",
					},
					map[string]any{
						"name": "icon",
						"short": "Sinnbild, das die Art des Eintrags beschreibt.",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "byte",
						"name": "identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "imageurl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isBlocked",
						"type": "`$STRING`",
					},
					map[string]any{
						"format": "uri",
						"name": "linkurl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "lorryParkingFeatureIcons",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "operator",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "point",
						"short": "Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84).",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "routeRecommendation",
						"type": "`$ARRAY`",
					},
					map[string]any{
						"name": "subtitle",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "title",
						"type": "`$STRING`",
					},
				},
				"id": map[string]any{
					"field": "id",
					"name": "id",
				},
				"name": "webcam",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
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
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/{roadId}/services/webcam",
								"rename": map[string]any{
									"param": map[string]any{
										"roadId": "road_id",
									},
								},
								"segments": []any{
									map[string]any{
										"var": "road_id",
									},
									map[string]any{
										"lit": "services",
									},
									map[string]any{
										"lit": "webcam",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"road_id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.webcam`",
								},
								"parts": []any{
									"{road_id}",
									"services",
									"webcam",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
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
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/details/webcam/{webcamId}",
								"rename": map[string]any{
									"param": map[string]any{
										"webcamId": "id",
									},
								},
								"segments": []any{
									map[string]any{
										"lit": "details",
									},
									map[string]any{
										"lit": "webcam",
									},
									map[string]any{
										"var": "id",
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
								"parts": []any{
									"details",
									"webcam",
									"{id}",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
