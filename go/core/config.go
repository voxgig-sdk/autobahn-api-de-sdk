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
									"res": "`body.closure`",
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
									"res": "`body.electric_charging_station`",
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
								"parts": []any{},
								"select": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body.roads`",
								},
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
									"res": "`body.parking_lorry`",
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
									"res": "`body.roadworks`",
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
									"res": "`body.warning`",
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
						"name": "identifier",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "imageurl",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "isBlocked",
						"type": "`$STRING`",
					},
					map[string]any{
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
									"res": "`body.webcam`",
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
