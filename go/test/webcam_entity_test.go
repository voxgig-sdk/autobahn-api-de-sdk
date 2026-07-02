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

func TestWebcamEntity(t *testing.T) {
	t.Run("instance", func(t *testing.T) {
		testsdk := sdk.TestSDK(nil, nil)
		ent := testsdk.Webcam(nil)
		if ent == nil {
			t.Fatal("expected non-nil WebcamEntity")
		}
	})

	t.Run("basic", func(t *testing.T) {
		setup := webcamBasicSetup(nil)
		// Per-op sdk-test-control.json skip — basic test exercises a flow
		// with multiple ops; skipping any op skips the whole flow.
		_mode := "unit"
		if setup.live {
			_mode = "live"
		}
		for _, _op := range []string{"list", "load"} {
			if _shouldSkip, _reason := isControlSkipped("entityOp", "webcam." + _op, _mode); _shouldSkip {
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
			t.Skip("live entity test uses synthetic IDs from fixture — set AUTOBAHNAPIDE_TEST_WEBCAM_ENTID JSON to run live")
			return
		}
		client := setup.client

		// Bootstrap entity data from existing test data (no create step in flow).
		webcamRef01DataRaw := vs.Items(core.ToMapAny(vs.GetPath("existing.webcam", setup.data)))
		var webcamRef01Data map[string]any
		if len(webcamRef01DataRaw) > 0 {
			webcamRef01Data = core.ToMapAny(webcamRef01DataRaw[0][1])
		}
		// Discard guards against Go's unused-var check when the flow's steps
		// happen not to consume the bootstrap data (e.g. list-only flows).
		_ = webcamRef01Data

		// LIST
		webcamRef01Ent := client.Webcam(nil)
		webcamRef01Match := map[string]any{
			"road_id": setup.idmap["road01"],
		}

		webcamRef01ListResult, err := webcamRef01Ent.List(webcamRef01Match, nil)
		if err != nil {
			t.Fatalf("list failed: %v", err)
		}
		_, webcamRef01ListOk := webcamRef01ListResult.([]any)
		if !webcamRef01ListOk {
			t.Fatalf("expected list result to be an array, got %T", webcamRef01ListResult)
		}

		// LOAD
		webcamRef01MatchDt0 := map[string]any{}
		webcamRef01DataDt0Loaded, err := webcamRef01Ent.Load(webcamRef01MatchDt0, nil)
		if err != nil {
			t.Fatalf("load failed: %v", err)
		}
		if webcamRef01DataDt0Loaded == nil {
			t.Fatal("expected load result to be non-nil")
		}

	})
}

func webcamBasicSetup(extra map[string]any) *entityTestSetup {
	loadEnvLocal()

	_, filename, _, _ := runtime.Caller(0)
	dir := filepath.Dir(filename)

	entityDataFile := filepath.Join(dir, "..", "..", ".sdk", "test", "entity", "webcam", "WebcamTestData.json")

	entityDataSource, err := os.ReadFile(entityDataFile)
	if err != nil {
		panic("failed to read webcam test data: " + err.Error())
	}

	var entityData map[string]any
	if err := json.Unmarshal(entityDataSource, &entityData); err != nil {
		panic("failed to parse webcam test data: " + err.Error())
	}

	options := map[string]any{}
	options["entity"] = entityData["existing"]

	client := sdk.TestSDK(options, extra)

	// Generate idmap via transform, matching TS pattern.
	idmap := vs.Transform(
		[]any{"webcam01", "webcam02", "webcam03", "road01"},
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
	entidEnvRaw := os.Getenv("AUTOBAHNAPIDE_TEST_WEBCAM_ENTID")
	idmapOverridden := entidEnvRaw != "" && strings.HasPrefix(strings.TrimSpace(entidEnvRaw), "{")

	env := envOverride(map[string]any{
		"AUTOBAHNAPIDE_TEST_WEBCAM_ENTID": idmap,
		"AUTOBAHNAPIDE_TEST_LIVE":      "FALSE",
		"AUTOBAHNAPIDE_TEST_EXPLAIN":   "FALSE",
		"AUTOBAHNAPIDE_APIKEY":         "NONE",
	})

	idmapResolved := core.ToMapAny(env["AUTOBAHNAPIDE_TEST_WEBCAM_ENTID"])
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
