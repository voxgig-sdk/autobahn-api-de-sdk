<?php
declare(strict_types=1);

// Typed models for the AutobahnApiDe SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Closure entity data model. */
class Closure
{
    public ?array $coordinate = null;
    public ?array $description = null;
    public ?string $display_type = null;
    public ?string $extent = null;
    public ?array $footer = null;
    public ?bool $future = null;
    public ?string $icon = null;
    public ?string $identifier = null;
    public ?bool $is_blocked = null;
    public ?array $lorry_parking_feature_icon = null;
    public ?string $point = null;
    public ?array $route_recommendation = null;
    public ?string $start_timestamp = null;
    public ?string $subtitle = null;
    public ?string $title = null;
}

/** Request payload for Closure#load. */
class ClosureLoadMatch
{
    public string $id;
}

/** Request payload for Closure#list. */
class ClosureListMatch
{
    public string $road_id;
}

/** ElectricChargingStation entity data model. */
class ElectricChargingStation
{
    public ?array $coordinate = null;
    public ?array $description = null;
    public ?string $display_type = null;
    public ?string $extent = null;
    public ?array $footer = null;
    public ?bool $future = null;
    public ?string $icon = null;
    public ?string $identifier = null;
    public ?bool $is_blocked = null;
    public ?array $lorry_parking_feature_icon = null;
    public ?string $point = null;
    public ?array $route_recommendation = null;
    public ?string $subtitle = null;
    public ?string $title = null;
}

/** Request payload for ElectricChargingStation#load. */
class ElectricChargingStationLoadMatch
{
    public string $id;
}

/** Request payload for ElectricChargingStation#list. */
class ElectricChargingStationListMatch
{
    public string $road_id;
}

/** ListAutobahnen entity data model. */
class ListAutobahnen
{
    public ?array $road = null;
}

/** Request payload for ListAutobahnen#list. */
class ListAutobahnenListMatch
{
    public ?array $road = null;
}

/** ParkingLorry entity data model. */
class ParkingLorry
{
    public ?array $coordinate = null;
    public ?array $description = null;
    public ?string $display_type = null;
    public ?string $extent = null;
    public ?array $footer = null;
    public ?bool $future = null;
    public ?string $icon = null;
    public ?string $identifier = null;
    public ?bool $is_blocked = null;
    public ?array $lorry_parking_feature_icon = null;
    public ?string $point = null;
    public ?array $route_recommendation = null;
    public ?string $subtitle = null;
    public ?string $title = null;
}

/** Request payload for ParkingLorry#load. */
class ParkingLorryLoadMatch
{
    public string $id;
}

/** Request payload for ParkingLorry#list. */
class ParkingLorryListMatch
{
    public string $road_id;
}

/** Roadwork entity data model. */
class Roadwork
{
    public ?array $coordinate = null;
    public ?array $description = null;
    public ?string $display_type = null;
    public ?string $extent = null;
    public ?array $footer = null;
    public ?bool $future = null;
    public ?string $icon = null;
    public ?string $identifier = null;
    public ?bool $is_blocked = null;
    public ?array $lorry_parking_feature_icon = null;
    public ?string $point = null;
    public ?array $route_recommendation = null;
    public ?string $start_timestamp = null;
    public ?string $subtitle = null;
    public ?string $title = null;
}

/** Request payload for Roadwork#load. */
class RoadworkLoadMatch
{
    public string $id;
}

/** Request payload for Roadwork#list. */
class RoadworkListMatch
{
    public string $road_id;
}

/** Warning entity data model. */
class Warning
{
    public ?array $coordinate = null;
    public ?array $description = null;
    public ?string $display_type = null;
    public ?string $extent = null;
    public ?array $footer = null;
    public ?bool $future = null;
    public ?string $icon = null;
    public ?string $identifier = null;
    public ?bool $is_blocked = null;
    public ?array $lorry_parking_feature_icon = null;
    public ?string $point = null;
    public ?array $route_recommendation = null;
    public ?string $start_timestamp = null;
    public ?string $subtitle = null;
    public ?string $title = null;
}

/** Request payload for Warning#load. */
class WarningLoadMatch
{
    public string $id;
}

/** Request payload for Warning#list. */
class WarningListMatch
{
    public string $road_id;
}

/** Webcam entity data model. */
class Webcam
{
    public ?array $coordinate = null;
    public ?array $description = null;
    public ?string $display_type = null;
    public ?string $extent = null;
    public ?array $footer = null;
    public ?bool $future = null;
    public ?string $icon = null;
    public ?string $identifier = null;
    public ?string $imageurl = null;
    public ?bool $is_blocked = null;
    public ?string $linkurl = null;
    public ?array $lorry_parking_feature_icon = null;
    public ?string $operator = null;
    public ?string $point = null;
    public ?array $route_recommendation = null;
    public ?string $subtitle = null;
    public ?string $title = null;
}

/** Request payload for Webcam#load. */
class WebcamLoadMatch
{
    public string $id;
}

/** Request payload for Webcam#list. */
class WebcamListMatch
{
    public string $road_id;
}

