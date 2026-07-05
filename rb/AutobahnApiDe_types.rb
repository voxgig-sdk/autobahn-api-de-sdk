# frozen_string_literal: true

# Typed models for the AutobahnApiDe SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Closure entity data model.
#
# @!attribute [rw] coordinate
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [Array, nil]
#
# @!attribute [rw] display_type
#   @return [String, nil]
#
# @!attribute [rw] extent
#   @return [String, nil]
#
# @!attribute [rw] footer
#   @return [Array, nil]
#
# @!attribute [rw] future
#   @return [Boolean, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] is_blocked
#   @return [Boolean, nil]
#
# @!attribute [rw] lorry_parking_feature_icon
#   @return [Array, nil]
#
# @!attribute [rw] point
#   @return [String, nil]
#
# @!attribute [rw] route_recommendation
#   @return [Array, nil]
#
# @!attribute [rw] start_timestamp
#   @return [String, nil]
#
# @!attribute [rw] subtitle
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Closure = Struct.new(
  :coordinate,
  :description,
  :display_type,
  :extent,
  :footer,
  :future,
  :icon,
  :identifier,
  :is_blocked,
  :lorry_parking_feature_icon,
  :point,
  :route_recommendation,
  :start_timestamp,
  :subtitle,
  :title,
  keyword_init: true
)

# Request payload for Closure#load.
#
# @!attribute [rw] id
#   @return [String]
ClosureLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Closure#list.
#
# @!attribute [rw] road_id
#   @return [String]
ClosureListMatch = Struct.new(
  :road_id,
  keyword_init: true
)

# ElectricChargingStation entity data model.
#
# @!attribute [rw] coordinate
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [Array, nil]
#
# @!attribute [rw] display_type
#   @return [String, nil]
#
# @!attribute [rw] extent
#   @return [String, nil]
#
# @!attribute [rw] footer
#   @return [Array, nil]
#
# @!attribute [rw] future
#   @return [Boolean, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] is_blocked
#   @return [Boolean, nil]
#
# @!attribute [rw] lorry_parking_feature_icon
#   @return [Array, nil]
#
# @!attribute [rw] point
#   @return [String, nil]
#
# @!attribute [rw] route_recommendation
#   @return [Array, nil]
#
# @!attribute [rw] subtitle
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
ElectricChargingStation = Struct.new(
  :coordinate,
  :description,
  :display_type,
  :extent,
  :footer,
  :future,
  :icon,
  :identifier,
  :is_blocked,
  :lorry_parking_feature_icon,
  :point,
  :route_recommendation,
  :subtitle,
  :title,
  keyword_init: true
)

# Request payload for ElectricChargingStation#load.
#
# @!attribute [rw] id
#   @return [String]
ElectricChargingStationLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ElectricChargingStation#list.
#
# @!attribute [rw] road_id
#   @return [String]
ElectricChargingStationListMatch = Struct.new(
  :road_id,
  keyword_init: true
)

# ListAutobahnen entity data model.
#
# @!attribute [rw] road
#   @return [Array, nil]
ListAutobahnen = Struct.new(
  :road,
  keyword_init: true
)

# Request payload for ListAutobahnen#list.
#
# @!attribute [rw] road
#   @return [Array, nil]
ListAutobahnenListMatch = Struct.new(
  :road,
  keyword_init: true
)

# ParkingLorry entity data model.
#
# @!attribute [rw] coordinate
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [Array, nil]
#
# @!attribute [rw] display_type
#   @return [String, nil]
#
# @!attribute [rw] extent
#   @return [String, nil]
#
# @!attribute [rw] footer
#   @return [Array, nil]
#
# @!attribute [rw] future
#   @return [Boolean, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] is_blocked
#   @return [Boolean, nil]
#
# @!attribute [rw] lorry_parking_feature_icon
#   @return [Array, nil]
#
# @!attribute [rw] point
#   @return [String, nil]
#
# @!attribute [rw] route_recommendation
#   @return [Array, nil]
#
# @!attribute [rw] subtitle
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
ParkingLorry = Struct.new(
  :coordinate,
  :description,
  :display_type,
  :extent,
  :footer,
  :future,
  :icon,
  :identifier,
  :is_blocked,
  :lorry_parking_feature_icon,
  :point,
  :route_recommendation,
  :subtitle,
  :title,
  keyword_init: true
)

# Request payload for ParkingLorry#load.
#
# @!attribute [rw] id
#   @return [String]
ParkingLorryLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for ParkingLorry#list.
#
# @!attribute [rw] road_id
#   @return [String]
ParkingLorryListMatch = Struct.new(
  :road_id,
  keyword_init: true
)

# Roadwork entity data model.
#
# @!attribute [rw] coordinate
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [Array, nil]
#
# @!attribute [rw] display_type
#   @return [String, nil]
#
# @!attribute [rw] extent
#   @return [String, nil]
#
# @!attribute [rw] footer
#   @return [Array, nil]
#
# @!attribute [rw] future
#   @return [Boolean, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] is_blocked
#   @return [Boolean, nil]
#
# @!attribute [rw] lorry_parking_feature_icon
#   @return [Array, nil]
#
# @!attribute [rw] point
#   @return [String, nil]
#
# @!attribute [rw] route_recommendation
#   @return [Array, nil]
#
# @!attribute [rw] start_timestamp
#   @return [String, nil]
#
# @!attribute [rw] subtitle
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Roadwork = Struct.new(
  :coordinate,
  :description,
  :display_type,
  :extent,
  :footer,
  :future,
  :icon,
  :identifier,
  :is_blocked,
  :lorry_parking_feature_icon,
  :point,
  :route_recommendation,
  :start_timestamp,
  :subtitle,
  :title,
  keyword_init: true
)

# Request payload for Roadwork#load.
#
# @!attribute [rw] id
#   @return [String]
RoadworkLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Roadwork#list.
#
# @!attribute [rw] road_id
#   @return [String]
RoadworkListMatch = Struct.new(
  :road_id,
  keyword_init: true
)

# Warning entity data model.
#
# @!attribute [rw] coordinate
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [Array, nil]
#
# @!attribute [rw] display_type
#   @return [String, nil]
#
# @!attribute [rw] extent
#   @return [String, nil]
#
# @!attribute [rw] footer
#   @return [Array, nil]
#
# @!attribute [rw] future
#   @return [Boolean, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] is_blocked
#   @return [Boolean, nil]
#
# @!attribute [rw] lorry_parking_feature_icon
#   @return [Array, nil]
#
# @!attribute [rw] point
#   @return [String, nil]
#
# @!attribute [rw] route_recommendation
#   @return [Array, nil]
#
# @!attribute [rw] start_timestamp
#   @return [String, nil]
#
# @!attribute [rw] subtitle
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Warning = Struct.new(
  :coordinate,
  :description,
  :display_type,
  :extent,
  :footer,
  :future,
  :icon,
  :identifier,
  :is_blocked,
  :lorry_parking_feature_icon,
  :point,
  :route_recommendation,
  :start_timestamp,
  :subtitle,
  :title,
  keyword_init: true
)

# Request payload for Warning#load.
#
# @!attribute [rw] id
#   @return [String]
WarningLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Warning#list.
#
# @!attribute [rw] road_id
#   @return [String]
WarningListMatch = Struct.new(
  :road_id,
  keyword_init: true
)

# Webcam entity data model.
#
# @!attribute [rw] coordinate
#   @return [Hash, nil]
#
# @!attribute [rw] description
#   @return [Array, nil]
#
# @!attribute [rw] display_type
#   @return [String, nil]
#
# @!attribute [rw] extent
#   @return [String, nil]
#
# @!attribute [rw] footer
#   @return [Array, nil]
#
# @!attribute [rw] future
#   @return [Boolean, nil]
#
# @!attribute [rw] icon
#   @return [String, nil]
#
# @!attribute [rw] identifier
#   @return [String, nil]
#
# @!attribute [rw] imageurl
#   @return [String, nil]
#
# @!attribute [rw] is_blocked
#   @return [Boolean, nil]
#
# @!attribute [rw] linkurl
#   @return [String, nil]
#
# @!attribute [rw] lorry_parking_feature_icon
#   @return [Array, nil]
#
# @!attribute [rw] operator
#   @return [String, nil]
#
# @!attribute [rw] point
#   @return [String, nil]
#
# @!attribute [rw] route_recommendation
#   @return [Array, nil]
#
# @!attribute [rw] subtitle
#   @return [String, nil]
#
# @!attribute [rw] title
#   @return [String, nil]
Webcam = Struct.new(
  :coordinate,
  :description,
  :display_type,
  :extent,
  :footer,
  :future,
  :icon,
  :identifier,
  :imageurl,
  :is_blocked,
  :linkurl,
  :lorry_parking_feature_icon,
  :operator,
  :point,
  :route_recommendation,
  :subtitle,
  :title,
  keyword_init: true
)

# Request payload for Webcam#load.
#
# @!attribute [rw] id
#   @return [String]
WebcamLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for Webcam#list.
#
# @!attribute [rw] road_id
#   @return [String]
WebcamListMatch = Struct.new(
  :road_id,
  keyword_init: true
)

