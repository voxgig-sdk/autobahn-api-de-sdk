package sdktest

import (
	"encoding/json"
	"os"
	"path/filepath"
	"runtime"
	"strings"
	"testing"
	"time"

	sdk "github.com/voxgig-sdk/autobahn-api-de-sdk/go"
	"github.com/voxgig-sdk/autobahn-api-de-sdk/go/core"

	vs "github.com/voxgig-sdk/autobahn-api-de-sdk/go/utility/struct"
)

func TestElectricChargingStationEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ElectricChargingStation(nil)
		if ent == nil {
			t.Fatal("expected non-nil ElectricChargingStationEntity")
		}
	})

	// Feature #4: the entity Stream(action, ...) method runs the op pipeline and
	// returns a channel over result items. With the streaming feature active it
	// yields the feature's incremental output; otherwise it falls back to the
	// materialised list so Stream always yields.
	t.Run("stream", func(t *testing.T) {
		seed := map[string]any{
			"entity": map[string]any{
				"electric_charging_station": map[string]any{
					"s1": map[string]any{"id": "s1"},
					"s2": map[string]any{"id": "s2"},
					"s3": map[string]any{"id": "s3"},
				},
			},
		}

		// Fallback: streaming inactive -> yields the materialised list items.
		base := sdk.TestSDK(seed, nil)
		var seen []any
		for item := range base.ElectricChargingStation(nil).Stream("list", nil, nil) {
			seen = append(seen, item)
		}
		if len(seen) != 3 {
			t.Fatalf("expected 3 streamed items, got %d", len(seen))
		}

		// Inbound: streaming active -> yields each item from the feature iterator.
		hasStreaming := false
		if fm, ok := core.MakeConfig()["feature"].(map[string]any); ok {
			_, hasStreaming = fm["streaming"]
		}
		if hasStreaming {
			streamSdk := sdk.TestSDK(seed, map[string]any{
				"feature": map[string]any{"streaming": map[string]any{"active": true}},
			})
			var got []any
			for item := range streamSdk.ElectricChargingStation(nil).Stream("list", nil, nil) {
				if sub, ok := item.([]any); ok {
					got = append(got, sub...)
				} else {
					got = append(got, item)
				}
			}
			if len(got) != 3 {
				t.Fatalf("expected 3 items via streaming feature, got %d", len(got))
			}
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := electric_charging_stationBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "electric_charging_station." + _op, _mode); _shouldSkip {
				if _reason == "" {
					_reason = "skipped via sdk-test-control.json"
				}
				t.Skip(_reason)
				return
			}
		}
		// The basic flow consumes synthetic IDs from the fixture. In live mode
		// without an *_ENTID env override, those IDs hit the live API and 4xx.
		if setup.syntheticOnly {
			t.Skip("live entity test uses synthetic IDs from fixture — set AUTOBAHNAPIDE_TEST_ELECTRIC_CHARGING_STATION_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		electricChargingStationRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.electric_charging_station", setup.data)))
		var electricChargingStationRef01Data map[string]any
		if len(electricChargingStationRef01DataRaw) > 0 {
			electricChargingStationRef01Data = core.ToMapAny(electricChargingStationRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = electricChargingStationRef01Data

		// LIST
		electricChargingStationRef01Ent := client.ElectricChargingStation(nil)
		electricChargingStationRef01Match := map[string]any{
			"road_id": setup.idmap["road01"],
		}

		electricChargingStationRef01ListResult, err := electricChargingStationRef01Ent.List(electricChargingStationRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, electricChargingStationRef01ListOk := electricChargingStationRef01ListResult.([]any)
		if !electricChargingStationRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", electricChargingStationRef01ListResult)
		}

		// LOAD
		electricChargingStationRef01MatchDt0 := map[string]any{}
		electricChargingStationRef01DataDt0Loaded, err := electricChargingStationRef01Ent.Load(electricChargingStationRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if electricChargingStationRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func electric_charging_stationBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "electric_charging_station", "ElectricChargingStationTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read electric_charging_station test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse electric_charging_station test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"electric_charging_station01", "electric_charging_station02", "electric_charging_station03", "road01"},
		map[string]any{
			"`$PACK`": []any{"", map[string]any{
				"`$KEY`": "`$COPY`",
				"`$VAL`": []any{"`$FORMAT`", "upper", "`$COPY`"},
			}},
		},
	)

	// Detect ENTID env override before envOverride consumes it. When live
	// mode is on without a real override, the basic test runs against synthetic
	// IDs from the fixture and 4xx's. Surface this so the test can skip.
	entidEnvRaw := os.Getenv("AUTOBAHNAPIDE_TEST_ELECTRIC_CHARGING_STATION_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"AUTOBAHNAPIDE_TEST_ELECTRIC_CHARGING_STATION_ENTID": idmap,
		"AUTOBAHNAPIDE_TEST_LIVE":      "FALSE",
		"AUTOBAHNAPIDE_TEST_EXPLAIN":   "FALSE",
	})

	idmapResolved := core.ToMapAny(env["AUTOBAHNAPIDE_TEST_ELECTRIC_CHARGING_STATION_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["AUTOBAHNAPIDE_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
			},
			extra,
		})
		client = sdk.NewAutobahnApiDeSDK(core.ToMapAny(mergedOpts))
	}

	live := env["AUTOBAHNAPIDE_TEST_LIVE"] == "TRUE"
	return &entityTestSetup{
		client:        client,
		data:          entityData,
		idmap:         idmapResolved,
		env:           env,
		explain:       env["AUTOBAHNAPIDE_TEST_EXPLAIN"] == "TRUE",
		live:          live,
		syntheticOnly: live && !idmapOverridden,
		now:           time.Now().UnixMilli(),
	}
}
