<?php
declare(strict_types=1);

// Webcam entity test

require_once __DIR__ . '/../autobahnapide_sdk.php';
require_once __DIR__ . '/Runner.php';

use PHPUnit\Framework\TestCase;
use Voxgig\Struct\Struct as Vs;

class WebcamEntityTest extends TestCase
{
    public function test_create_instance(): void
    {
        $testsdk = AutobahnApiDeSDK::test(null, null);
        $ent = $testsdk->Webcam(null);
        $this->assertNotNull($ent);
    }

    public function test_basic_flow(): void
    {
        $setup = webcam_basic_setup(null);
        // Per-op sdk-test-control.json skip.
        $_live = !empty($setup["live"]);
        foreach (["list", "load"] as $_op) {
            [$_shouldSkip, $_reason] = Runner::is_control_skipped("entityOp", "webcam." . $_op, $_live ? "live" : "unit");
            if ($_shouldSkip) {
                $this->markTestSkipped($_reason ?? "skipped via sdk-test-control.json");
                return;
            }
        }
        // The basic flow consumes synthetic IDs from the fixture. In live mode
        // without an *_ENTID env override, those IDs hit the live API and 4xx.
        if (!empty($setup["synthetic_only"])) {
            $this->markTestSkipped("live entity test uses synthetic IDs from fixture — set AUTOBAHNAPIDE_TEST_WEBCAM_ENTID JSON to run live");
            return;
        }
        $client = $setup["client"];

        // Bootstrap entity data from existing test data.
        $webcam_ref01_data_raw = Vs::items(Helpers::to_map(
            Vs::getpath($setup["data"], "existing.webcam")));
        $webcam_ref01_data = null;
        if (count($webcam_ref01_data_raw) > 0) {
            $webcam_ref01_data = Helpers::to_map($webcam_ref01_data_raw[0][1]);
        }

        // LIST
        $webcam_ref01_ent = $client->Webcam(null);
        $webcam_ref01_match = [
            "road_id" => $setup["idmap"]["road01"],
        ];

        [$webcam_ref01_list_result, $err] = $webcam_ref01_ent->list($webcam_ref01_match, null);
        $this->assertNull($err);
        $this->assertIsArray($webcam_ref01_list_result);

        // LOAD
        $webcam_ref01_match_dt0 = [];
        [$webcam_ref01_data_dt0_loaded, $err] = $webcam_ref01_ent->load($webcam_ref01_match_dt0, null);
        $this->assertNull($err);
        $this->assertNotNull($webcam_ref01_data_dt0_loaded);

    }
}

function webcam_basic_setup($extra)
{
    Runner::load_env_local();

    $entity_data_file = __DIR__ . '/../../.sdk/test/entity/webcam/WebcamTestData.json';
    $entity_data_source = file_get_contents($entity_data_file);
    $entity_data = json_decode($entity_data_source, true);

    $options = [];
    $options["entity"] = $entity_data["existing"];

    $client = AutobahnApiDeSDK::test($options, $extra);

    // Generate idmap.
    $idmap = [];
    foreach (["webcam01", "webcam02", "webcam03", "road01"] as $k) {
        $idmap[$k] = strtoupper($k);
    }

    // Detect ENTID env override before envOverride consumes it. When live
    // mode is on without a real override, the basic test runs against synthetic
    // IDs from the fixture and 4xx's. Surface this so the test can skip.
    $entid_env_raw = getenv("AUTOBAHNAPIDE_TEST_WEBCAM_ENTID");
    $idmap_overridden = $entid_env_raw !== false && str_starts_with(trim($entid_env_raw), "{");

    $env = Runner::env_override([
        "AUTOBAHNAPIDE_TEST_WEBCAM_ENTID" => $idmap,
        "AUTOBAHNAPIDE_TEST_LIVE" => "FALSE",
        "AUTOBAHNAPIDE_TEST_EXPLAIN" => "FALSE",
    ]);

    $idmap_resolved = Helpers::to_map(
        $env["AUTOBAHNAPIDE_TEST_WEBCAM_ENTID"]);
    if ($idmap_resolved === null) {
        $idmap_resolved = Helpers::to_map($idmap);
    }

    if ($env["AUTOBAHNAPIDE_TEST_LIVE"] === "TRUE") {
        $merged_opts = Vs::merge([
            [
            ],
            $extra ?? [],
        ]);
        $client = new AutobahnApiDeSDK(Helpers::to_map($merged_opts));
    }

    $live = $env["AUTOBAHNAPIDE_TEST_LIVE"] === "TRUE";
    return [
        "client" => $client,
        "data" => $entity_data,
        "idmap" => $idmap_resolved,
        "env" => $env,
        "explain" => $env["AUTOBAHNAPIDE_TEST_EXPLAIN"] === "TRUE",
        "live" => $live,
        "synthetic_only" => $live && !$idmap_overridden,
        "now" => (int)(microtime(true) * 1000),
    ];
}
