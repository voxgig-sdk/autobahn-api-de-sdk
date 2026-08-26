-- Typed models for the AutobahnApiDe SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Closure
---@field coordinate? table
---@field description? table
---@field display_type? string
---@field extent? string
---@field footer? table
---@field future? boolean
---@field icon? string
---@field id? string
---@field identifier? string
---@field isBlocked? string
---@field lorryParkingFeatureIcons? table
---@field point? string
---@field routeRecommendation? table
---@field startTimestamp? string
---@field subtitle? string
---@field title? string

---@class ClosureLoadMatch
---@field id string

---@class ClosureListMatch
---@field road_id string

---@class ElectricChargingStation
---@field coordinate? table
---@field description? table
---@field display_type? string
---@field extent? string
---@field footer? table
---@field future? boolean
---@field icon? string
---@field id? string
---@field identifier? string
---@field isBlocked? string
---@field lorryParkingFeatureIcons? table
---@field point? string
---@field routeRecommendation? table
---@field subtitle? string
---@field title? string

---@class ElectricChargingStationLoadMatch
---@field id string

---@class ElectricChargingStationListMatch
---@field road_id string

---@class ListAutobahnen
---@field roads? table

---@class ListAutobahnenListMatch
---@field roads? table

---@class ParkingLorry
---@field coordinate? table
---@field description? table
---@field display_type? string
---@field extent? string
---@field footer? table
---@field future? boolean
---@field icon? string
---@field id? string
---@field identifier? string
---@field isBlocked? string
---@field lorryParkingFeatureIcons? table
---@field point? string
---@field routeRecommendation? table
---@field subtitle? string
---@field title? string

---@class ParkingLorryLoadMatch
---@field id string

---@class ParkingLorryListMatch
---@field road_id string

---@class Roadwork
---@field coordinate? table
---@field description? table
---@field display_type? string
---@field extent? string
---@field footer? table
---@field future? boolean
---@field icon? string
---@field id? string
---@field identifier? string
---@field isBlocked? string
---@field lorryParkingFeatureIcons? table
---@field point? string
---@field routeRecommendation? table
---@field startTimestamp? string
---@field subtitle? string
---@field title? string

---@class RoadworkLoadMatch
---@field id string

---@class RoadworkListMatch
---@field road_id string

---@class Warning
---@field coordinate? table
---@field description? table
---@field display_type? string
---@field extent? string
---@field footer? table
---@field future? boolean
---@field icon? string
---@field id? string
---@field identifier? string
---@field isBlocked? string
---@field lorryParkingFeatureIcons? table
---@field point? string
---@field routeRecommendation? table
---@field startTimestamp? string
---@field subtitle? string
---@field title? string

---@class WarningLoadMatch
---@field id string

---@class WarningListMatch
---@field road_id string

---@class Webcam
---@field coordinate? table
---@field description? table
---@field display_type? string
---@field extent? string
---@field footer? table
---@field future? boolean
---@field icon? string
---@field id? string
---@field identifier? string
---@field imageurl? string
---@field isBlocked? string
---@field linkurl? string
---@field lorryParkingFeatureIcons? table
---@field operator? string
---@field point? string
---@field routeRecommendation? table
---@field subtitle? string
---@field title? string

---@class WebcamLoadMatch
---@field id string

---@class WebcamListMatch
---@field road_id string

local M = {}

return M
