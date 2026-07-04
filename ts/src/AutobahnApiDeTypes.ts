// Typed models for the AutobahnApiDe SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Closure {
  coordinate?: Record<string, any>
  description?: any[]
  display_type?: string
  extent?: string
  footer?: any[]
  future?: boolean
  icon?: string
  identifier?: string
  is_blocked?: boolean
  lorry_parking_feature_icon?: any[]
  point?: string
  route_recommendation?: any[]
  start_timestamp?: string
  subtitle?: string
  title?: string
}

export interface ClosureLoadMatch {
  id: string
}

export interface ClosureListMatch {
  road_id: string
}

export interface ElectricChargingStation {
  coordinate?: Record<string, any>
  description?: any[]
  display_type?: string
  extent?: string
  footer?: any[]
  future?: boolean
  icon?: string
  identifier?: string
  is_blocked?: boolean
  lorry_parking_feature_icon?: any[]
  point?: string
  route_recommendation?: any[]
  subtitle?: string
  title?: string
}

export interface ElectricChargingStationLoadMatch {
  id: string
}

export interface ElectricChargingStationListMatch {
  road_id: string
}

export interface ListAutobahnen {
  road?: any[]
}

export type ListAutobahnenListMatch = Partial<ListAutobahnen>

export interface ParkingLorry {
  coordinate?: Record<string, any>
  description?: any[]
  display_type?: string
  extent?: string
  footer?: any[]
  future?: boolean
  icon?: string
  identifier?: string
  is_blocked?: boolean
  lorry_parking_feature_icon?: any[]
  point?: string
  route_recommendation?: any[]
  subtitle?: string
  title?: string
}

export interface ParkingLorryLoadMatch {
  id: string
}

export interface ParkingLorryListMatch {
  road_id: string
}

export interface Roadwork {
  coordinate?: Record<string, any>
  description?: any[]
  display_type?: string
  extent?: string
  footer?: any[]
  future?: boolean
  icon?: string
  identifier?: string
  is_blocked?: boolean
  lorry_parking_feature_icon?: any[]
  point?: string
  route_recommendation?: any[]
  start_timestamp?: string
  subtitle?: string
  title?: string
}

export interface RoadworkLoadMatch {
  id: string
}

export interface RoadworkListMatch {
  road_id: string
}

export interface Warning {
  coordinate?: Record<string, any>
  description?: any[]
  display_type?: string
  extent?: string
  footer?: any[]
  future?: boolean
  icon?: string
  identifier?: string
  is_blocked?: boolean
  lorry_parking_feature_icon?: any[]
  point?: string
  route_recommendation?: any[]
  start_timestamp?: string
  subtitle?: string
  title?: string
}

export interface WarningLoadMatch {
  id: string
}

export interface WarningListMatch {
  road_id: string
}

export interface Webcam {
  coordinate?: Record<string, any>
  description?: any[]
  display_type?: string
  extent?: string
  footer?: any[]
  future?: boolean
  icon?: string
  identifier?: string
  imageurl?: string
  is_blocked?: boolean
  linkurl?: string
  lorry_parking_feature_icon?: any[]
  operator?: string
  point?: string
  route_recommendation?: any[]
  subtitle?: string
  title?: string
}

export interface WebcamLoadMatch {
  id: string
}

export interface WebcamListMatch {
  road_id: string
}

