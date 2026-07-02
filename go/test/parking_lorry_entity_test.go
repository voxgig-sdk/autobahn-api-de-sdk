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

func TestParkingLorryEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.ParkingLorry(nil)
		if ent == nil {
			t.Fatal("expected non-nil ParkingLorryEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := parking_lorryBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "parking_lorry." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set AUTOBAHNAPIDE_TEST_PARKING_LORRY_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		parkingLorryRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.parking_lorry", setup.data)))
		var parkingLorryRef01Data map[string]any
		if len(parkingLorryRef01DataRaw) > 0 {
			parkingLorryRef01Data = core.ToMapAny(parkingLorryRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = parkingLorryRef01Data

		// LIST
		parkingLorryRef01Ent := client.ParkingLorry(nil)
		parkingLorryRef01Match := map[string]any{
			"road_id": setup.idmap["road01"],
		}

		parkingLorryRef01ListResult, err := parkingLorryRef01Ent.List(parkingLorryRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, parkingLorryRef01ListOk := parkingLorryRef01ListResult.([]any)
		if !parkingLorryRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", parkingLorryRef01ListResult)
		}

		// LOAD
		parkingLorryRef01MatchDt0 := map[string]any{}
		parkingLorryRef01DataDt0Loaded, err := parkingLorryRef01Ent.Load(parkingLorryRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if parkingLorryRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func parking_lorryBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "parking_lorry", "ParkingLorryTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read parking_lorry test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse parking_lorry test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"parking_lorry01", "parking_lorry02", "parking_lorry03", "road01"},
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
	entidEnvRaw := os.Getenv("AUTOBAHNAPIDE_TEST_PARKING_LORRY_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"AUTOBAHNAPIDE_TEST_PARKING_LORRY_ENTID": idmap,
		"AUTOBAHNAPIDE_TEST_LIVE":      "FALSE",
		"AUTOBAHNAPIDE_TEST_EXPLAIN":   "FALSE",
		"AUTOBAHNAPIDE_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["AUTOBAHNAPIDE_TEST_PARKING_LORRY_ENTID"])
	if idmapResolved == nil {
		idmapResolved = core.ToMapAny(idmap)
	}

	if env["AUTOBAHNAPIDE_TEST_LIVE"] == "TRUE" {
		mergedOpts := vs.Merge([]any{
			map[string]any{
				"apikey": env["AUTOBAHNAPIDE_APIKEY"],
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
