// Typed models for the AutobahnApiDe SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Closure is the typed data model for the closure entity.
type Closure struct {
	Coordinate *map[string]any `json:"coordinate,omitempty"`
	Description *[]any `json:"description,omitempty"`
	DisplayType *string `json:"display_type,omitempty"`
	Extent *string `json:"extent,omitempty"`
	Footer *[]any `json:"footer,omitempty"`
	Future *bool `json:"future,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	IsBlocked *bool `json:"is_blocked,omitempty"`
	LorryParkingFeatureIcon *[]any `json:"lorry_parking_feature_icon,omitempty"`
	Point *string `json:"point,omitempty"`
	RouteRecommendation *[]any `json:"route_recommendation,omitempty"`
	StartTimestamp *string `json:"start_timestamp,omitempty"`
	Subtitle *string `json:"subtitle,omitempty"`
	Title *string `json:"title,omitempty"`
}

// ClosureLoadMatch is the typed request payload for Closure.LoadTyped.
type ClosureLoadMatch struct {
	Id string `json:"id"`
}

// ClosureListMatch is the typed request payload for Closure.ListTyped.
type ClosureListMatch struct {
	RoadId string `json:"road_id"`
}

// ElectricChargingStation is the typed data model for the electric_charging_station entity.
type ElectricChargingStation struct {
	Coordinate *map[string]any `json:"coordinate,omitempty"`
	Description *[]any `json:"description,omitempty"`
	DisplayType *string `json:"display_type,omitempty"`
	Extent *string `json:"extent,omitempty"`
	Footer *[]any `json:"footer,omitempty"`
	Future *bool `json:"future,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	IsBlocked *bool `json:"is_blocked,omitempty"`
	LorryParkingFeatureIcon *[]any `json:"lorry_parking_feature_icon,omitempty"`
	Point *string `json:"point,omitempty"`
	RouteRecommendation *[]any `json:"route_recommendation,omitempty"`
	Subtitle *string `json:"subtitle,omitempty"`
	Title *string `json:"title,omitempty"`
}

// ElectricChargingStationLoadMatch is the typed request payload for ElectricChargingStation.LoadTyped.
type ElectricChargingStationLoadMatch struct {
	Id string `json:"id"`
}

// ElectricChargingStationListMatch is the typed request payload for ElectricChargingStation.ListTyped.
type ElectricChargingStationListMatch struct {
	RoadId string `json:"road_id"`
}

// ListAutobahnen is the typed data model for the list_autobahnen entity.
type ListAutobahnen struct {
	Road *[]any `json:"road,omitempty"`
}

// ListAutobahnenListMatch mirrors the list_autobahnen fields as an all-optional match
// filter (Go analog of Partial<ListAutobahnen>).
type ListAutobahnenListMatch struct {
	Road *[]any `json:"road,omitempty"`
}

// ParkingLorry is the typed data model for the parking_lorry entity.
type ParkingLorry struct {
	Coordinate *map[string]any `json:"coordinate,omitempty"`
	Description *[]any `json:"description,omitempty"`
	DisplayType *string `json:"display_type,omitempty"`
	Extent *string `json:"extent,omitempty"`
	Footer *[]any `json:"footer,omitempty"`
	Future *bool `json:"future,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	IsBlocked *bool `json:"is_blocked,omitempty"`
	LorryParkingFeatureIcon *[]any `json:"lorry_parking_feature_icon,omitempty"`
	Point *string `json:"point,omitempty"`
	RouteRecommendation *[]any `json:"route_recommendation,omitempty"`
	Subtitle *string `json:"subtitle,omitempty"`
	Title *string `json:"title,omitempty"`
}

// ParkingLorryLoadMatch is the typed request payload for ParkingLorry.LoadTyped.
type ParkingLorryLoadMatch struct {
	Id string `json:"id"`
}

// ParkingLorryListMatch is the typed request payload for ParkingLorry.ListTyped.
type ParkingLorryListMatch struct {
	RoadId string `json:"road_id"`
}

// Roadwork is the typed data model for the roadwork entity.
type Roadwork struct {
	Coordinate *map[string]any `json:"coordinate,omitempty"`
	Description *[]any `json:"description,omitempty"`
	DisplayType *string `json:"display_type,omitempty"`
	Extent *string `json:"extent,omitempty"`
	Footer *[]any `json:"footer,omitempty"`
	Future *bool `json:"future,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	IsBlocked *bool `json:"is_blocked,omitempty"`
	LorryParkingFeatureIcon *[]any `json:"lorry_parking_feature_icon,omitempty"`
	Point *string `json:"point,omitempty"`
	RouteRecommendation *[]any `json:"route_recommendation,omitempty"`
	StartTimestamp *string `json:"start_timestamp,omitempty"`
	Subtitle *string `json:"subtitle,omitempty"`
	Title *string `json:"title,omitempty"`
}

// RoadworkLoadMatch is the typed request payload for Roadwork.LoadTyped.
type RoadworkLoadMatch struct {
	Id string `json:"id"`
}

// RoadworkListMatch is the typed request payload for Roadwork.ListTyped.
type RoadworkListMatch struct {
	RoadId string `json:"road_id"`
}

// Warning is the typed data model for the warning entity.
type Warning struct {
	Coordinate *map[string]any `json:"coordinate,omitempty"`
	Description *[]any `json:"description,omitempty"`
	DisplayType *string `json:"display_type,omitempty"`
	Extent *string `json:"extent,omitempty"`
	Footer *[]any `json:"footer,omitempty"`
	Future *bool `json:"future,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	IsBlocked *bool `json:"is_blocked,omitempty"`
	LorryParkingFeatureIcon *[]any `json:"lorry_parking_feature_icon,omitempty"`
	Point *string `json:"point,omitempty"`
	RouteRecommendation *[]any `json:"route_recommendation,omitempty"`
	StartTimestamp *string `json:"start_timestamp,omitempty"`
	Subtitle *string `json:"subtitle,omitempty"`
	Title *string `json:"title,omitempty"`
}

// WarningLoadMatch is the typed request payload for Warning.LoadTyped.
type WarningLoadMatch struct {
	Id string `json:"id"`
}

// WarningListMatch is the typed request payload for Warning.ListTyped.
type WarningListMatch struct {
	RoadId string `json:"road_id"`
}

// Webcam is the typed data model for the webcam entity.
type Webcam struct {
	Coordinate *map[string]any `json:"coordinate,omitempty"`
	Description *[]any `json:"description,omitempty"`
	DisplayType *string `json:"display_type,omitempty"`
	Extent *string `json:"extent,omitempty"`
	Footer *[]any `json:"footer,omitempty"`
	Future *bool `json:"future,omitempty"`
	Icon *string `json:"icon,omitempty"`
	Identifier *string `json:"identifier,omitempty"`
	Imageurl *string `json:"imageurl,omitempty"`
	IsBlocked *bool `json:"is_blocked,omitempty"`
	Linkurl *string `json:"linkurl,omitempty"`
	LorryParkingFeatureIcon *[]any `json:"lorry_parking_feature_icon,omitempty"`
	Operator *string `json:"operator,omitempty"`
	Point *string `json:"point,omitempty"`
	RouteRecommendation *[]any `json:"route_recommendation,omitempty"`
	Subtitle *string `json:"subtitle,omitempty"`
	Title *string `json:"title,omitempty"`
}

// WebcamLoadMatch is the typed request payload for Webcam.LoadTyped.
type WebcamLoadMatch struct {
	Id string `json:"id"`
}

// WebcamListMatch is the typed request payload for Webcam.ListTyped.
type WebcamListMatch struct {
	RoadId string `json:"road_id"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
