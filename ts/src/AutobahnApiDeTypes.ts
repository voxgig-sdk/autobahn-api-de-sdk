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
  isBlocked?: string
  lorryParkingFeatureIcons?: any[]
  point?: string
  routeRecommendation?: any[]
  startTimestamp?: string
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
  isBlocked?: string
  lorryParkingFeatureIcons?: any[]
  point?: string
  routeRecommendation?: any[]
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
  roads?: any[]
}

export interface ListAutobahnenListMatch {
  roads?: any[]
}

export interface ParkingLorry {
  coordinate?: Record<string, any>
  description?: any[]
  display_type?: string
  extent?: string
  footer?: any[]
  future?: boolean
  icon?: string
  identifier?: string
  isBlocked?: string
  lorryParkingFeatureIcons?: any[]
  point?: string
  routeRecommendation?: any[]
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
  isBlocked?: string
  lorryParkingFeatureIcons?: any[]
  point?: string
  routeRecommendation?: any[]
  startTimestamp?: string
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
  isBlocked?: string
  lorryParkingFeatureIcons?: any[]
  point?: string
  routeRecommendation?: any[]
  startTimestamp?: string
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
  isBlocked?: string
  linkurl?: string
  lorryParkingFeatureIcons?: any[]
  operator?: string
  point?: string
  routeRecommendation?: any[]
  subtitle?: string
  title?: string
}

export interface WebcamLoadMatch {
  id: string
}

export interface WebcamListMatch {
  road_id: string
}

