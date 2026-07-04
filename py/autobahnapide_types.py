# Typed models for the AutobahnApiDe SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Closure(TypedDict, total=False):
    coordinate: dict
    description: list
    display_type: str
    extent: str
    footer: list
    future: bool
    icon: str
    identifier: str
    is_blocked: bool
    lorry_parking_feature_icon: list
    point: str
    route_recommendation: list
    start_timestamp: str
    subtitle: str
    title: str


class ClosureLoadMatch(TypedDict):
    id: str


class ClosureListMatch(TypedDict):
    road_id: str


class ElectricChargingStation(TypedDict, total=False):
    coordinate: dict
    description: list
    display_type: str
    extent: str
    footer: list
    future: bool
    icon: str
    identifier: str
    is_blocked: bool
    lorry_parking_feature_icon: list
    point: str
    route_recommendation: list
    subtitle: str
    title: str


class ElectricChargingStationLoadMatch(TypedDict):
    id: str


class ElectricChargingStationListMatch(TypedDict):
    road_id: str


class ListAutobahnen(TypedDict, total=False):
    road: list


class ListAutobahnenListMatch(TypedDict, total=False):
    road: list


class ParkingLorry(TypedDict, total=False):
    coordinate: dict
    description: list
    display_type: str
    extent: str
    footer: list
    future: bool
    icon: str
    identifier: str
    is_blocked: bool
    lorry_parking_feature_icon: list
    point: str
    route_recommendation: list
    subtitle: str
    title: str


class ParkingLorryLoadMatch(TypedDict):
    id: str


class ParkingLorryListMatch(TypedDict):
    road_id: str


class Roadwork(TypedDict, total=False):
    coordinate: dict
    description: list
    display_type: str
    extent: str
    footer: list
    future: bool
    icon: str
    identifier: str
    is_blocked: bool
    lorry_parking_feature_icon: list
    point: str
    route_recommendation: list
    start_timestamp: str
    subtitle: str
    title: str


class RoadworkLoadMatch(TypedDict):
    id: str


class RoadworkListMatch(TypedDict):
    road_id: str


class Warning(TypedDict, total=False):
    coordinate: dict
    description: list
    display_type: str
    extent: str
    footer: list
    future: bool
    icon: str
    identifier: str
    is_blocked: bool
    lorry_parking_feature_icon: list
    point: str
    route_recommendation: list
    start_timestamp: str
    subtitle: str
    title: str


class WarningLoadMatch(TypedDict):
    id: str


class WarningListMatch(TypedDict):
    road_id: str


class Webcam(TypedDict, total=False):
    coordinate: dict
    description: list
    display_type: str
    extent: str
    footer: list
    future: bool
    icon: str
    identifier: str
    imageurl: str
    is_blocked: bool
    linkurl: str
    lorry_parking_feature_icon: list
    operator: str
    point: str
    route_recommendation: list
    subtitle: str
    title: str


class WebcamLoadMatch(TypedDict):
    id: str


class WebcamListMatch(TypedDict):
    road_id: str
