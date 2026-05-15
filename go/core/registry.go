package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewClosureEntityFunc func(client *AutobahnApiDeSDK, entopts map[string]any) AutobahnApiDeEntity

var NewElectricChargingStationEntityFunc func(client *AutobahnApiDeSDK, entopts map[string]any) AutobahnApiDeEntity

var NewListAutobahnenEntityFunc func(client *AutobahnApiDeSDK, entopts map[string]any) AutobahnApiDeEntity

var NewParkingLorryEntityFunc func(client *AutobahnApiDeSDK, entopts map[string]any) AutobahnApiDeEntity

var NewRoadworkEntityFunc func(client *AutobahnApiDeSDK, entopts map[string]any) AutobahnApiDeEntity

var NewWarningEntityFunc func(client *AutobahnApiDeSDK, entopts map[string]any) AutobahnApiDeEntity

var NewWebcamEntityFunc func(client *AutobahnApiDeSDK, entopts map[string]any) AutobahnApiDeEntity

