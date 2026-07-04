# Typed models for the AutobahnApiDe SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Closure:
    coordinate: Optional[dict] = None
    description: Optional[list] = None
    display_type: Optional[str] = None
    extent: Optional[str] = None
    footer: Optional[list] = None
    future: Optional[bool] = None
    icon: Optional[str] = None
    identifier: Optional[str] = None
    is_blocked: Optional[bool] = None
    lorry_parking_feature_icon: Optional[list] = None
    point: Optional[str] = None
    route_recommendation: Optional[list] = None
    start_timestamp: Optional[str] = None
    subtitle: Optional[str] = None
    title: Optional[str] = None


@dataclass
class ClosureLoadMatch:
    id: str


@dataclass
class ClosureListMatch:
    road_id: str


@dataclass
class ElectricChargingStation:
    coordinate: Optional[dict] = None
    description: Optional[list] = None
    display_type: Optional[str] = None
    extent: Optional[str] = None
    footer: Optional[list] = None
    future: Optional[bool] = None
    icon: Optional[str] = None
    identifier: Optional[str] = None
    is_blocked: Optional[bool] = None
    lorry_parking_feature_icon: Optional[list] = None
    point: Optional[str] = None
    route_recommendation: Optional[list] = None
    subtitle: Optional[str] = None
    title: Optional[str] = None


@dataclass
class ElectricChargingStationLoadMatch:
    id: str


@dataclass
class ElectricChargingStationListMatch:
    road_id: str


@dataclass
class ListAutobahnen:
    road: Optional[list] = None


@dataclass
class ListAutobahnenListMatch:
    road: Optional[list] = None


@dataclass
class ParkingLorry:
    coordinate: Optional[dict] = None
    description: Optional[list] = None
    display_type: Optional[str] = None
    extent: Optional[str] = None
    footer: Optional[list] = None
    future: Optional[bool] = None
    icon: Optional[str] = None
    identifier: Optional[str] = None
    is_blocked: Optional[bool] = None
    lorry_parking_feature_icon: Optional[list] = None
    point: Optional[str] = None
    route_recommendation: Optional[list] = None
    subtitle: Optional[str] = None
    title: Optional[str] = None


@dataclass
class ParkingLorryLoadMatch:
    id: str


@dataclass
class ParkingLorryListMatch:
    road_id: str


@dataclass
class Roadwork:
    coordinate: Optional[dict] = None
    description: Optional[list] = None
    display_type: Optional[str] = None
    extent: Optional[str] = None
    footer: Optional[list] = None
    future: Optional[bool] = None
    icon: Optional[str] = None
    identifier: Optional[str] = None
    is_blocked: Optional[bool] = None
    lorry_parking_feature_icon: Optional[list] = None
    point: Optional[str] = None
    route_recommendation: Optional[list] = None
    start_timestamp: Optional[str] = None
    subtitle: Optional[str] = None
    title: Optional[str] = None


@dataclass
class RoadworkLoadMatch:
    id: str


@dataclass
class RoadworkListMatch:
    road_id: str


@dataclass
class Warning:
    coordinate: Optional[dict] = None
    description: Optional[list] = None
    display_type: Optional[str] = None
    extent: Optional[str] = None
    footer: Optional[list] = None
    future: Optional[bool] = None
    icon: Optional[str] = None
    identifier: Optional[str] = None
    is_blocked: Optional[bool] = None
    lorry_parking_feature_icon: Optional[list] = None
    point: Optional[str] = None
    route_recommendation: Optional[list] = None
    start_timestamp: Optional[str] = None
    subtitle: Optional[str] = None
    title: Optional[str] = None


@dataclass
class WarningLoadMatch:
    id: str


@dataclass
class WarningListMatch:
    road_id: str


@dataclass
class Webcam:
    coordinate: Optional[dict] = None
    description: Optional[list] = None
    display_type: Optional[str] = None
    extent: Optional[str] = None
    footer: Optional[list] = None
    future: Optional[bool] = None
    icon: Optional[str] = None
    identifier: Optional[str] = None
    imageurl: Optional[str] = None
    is_blocked: Optional[bool] = None
    linkurl: Optional[str] = None
    lorry_parking_feature_icon: Optional[list] = None
    operator: Optional[str] = None
    point: Optional[str] = None
    route_recommendation: Optional[list] = None
    subtitle: Optional[str] = None
    title: Optional[str] = None


@dataclass
class WebcamLoadMatch:
    id: str


@dataclass
class WebcamListMatch:
    road_id: str

