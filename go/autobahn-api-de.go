package voxgigautobahnapidesdk

import (
	"github.com/voxgig-sdk/autobahn-api-de-sdk/core"
	"github.com/voxgig-sdk/autobahn-api-de-sdk/entity"
	"github.com/voxgig-sdk/autobahn-api-de-sdk/feature"
	_ "github.com/voxgig-sdk/autobahn-api-de-sdk/utility"
)

// Type aliases preserve external API.
type AutobahnApiDeSDK = core.AutobahnApiDeSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type AutobahnApiDeEntity = core.AutobahnApiDeEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type AutobahnApiDeError = core.AutobahnApiDeError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewClosureEntityFunc = func(client *core.AutobahnApiDeSDK, entopts map[string]any) core.AutobahnApiDeEntity {
		return entity.NewClosureEntity(client, entopts)
	}
	core.NewElectricChargingStationEntityFunc = func(client *core.AutobahnApiDeSDK, entopts map[string]any) core.AutobahnApiDeEntity {
		return entity.NewElectricChargingStationEntity(client, entopts)
	}
	core.NewListAutobahnenEntityFunc = func(client *core.AutobahnApiDeSDK, entopts map[string]any) core.AutobahnApiDeEntity {
		return entity.NewListAutobahnenEntity(client, entopts)
	}
	core.NewParkingLorryEntityFunc = func(client *core.AutobahnApiDeSDK, entopts map[string]any) core.AutobahnApiDeEntity {
		return entity.NewParkingLorryEntity(client, entopts)
	}
	core.NewRoadworkEntityFunc = func(client *core.AutobahnApiDeSDK, entopts map[string]any) core.AutobahnApiDeEntity {
		return entity.NewRoadworkEntity(client, entopts)
	}
	core.NewWarningEntityFunc = func(client *core.AutobahnApiDeSDK, entopts map[string]any) core.AutobahnApiDeEntity {
		return entity.NewWarningEntity(client, entopts)
	}
	core.NewWebcamEntityFunc = func(client *core.AutobahnApiDeSDK, entopts map[string]any) core.AutobahnApiDeEntity {
		return entity.NewWebcamEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewAutobahnApiDeSDK = core.NewAutobahnApiDeSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
