# Warning entity test

require "minitest/autorun"
require "json"
require_relative "../AutobahnApiDe_sdk"
require_relative "runner"

class WarningEntityTest < Minitest::Test
  def test_create_instance
    testsdk = AutobahnApiDeSDK.test(nil, nil)
    ent = testsdk.Warning(nil)
    assert !ent.nil?
  end

  def test_basic_flow
    setup = warning_basic_setup(nil)
    # Per-op sdk-test-control.json skip.
    _live = setup[:live] || false
    ["list", "load"].each do |_op|
      _should_skip, _reason = Runner.is_control_skipped("entityOp", "warning." + _op, _live ? "live" : "unit")
      if _should_skip
        skip(_reason || "skipped via sdk-test-control.json")
        return
      end
    end
    # The basic flow consumes synthetic IDs from the fixture. In live mode
    # without an *_ENTID env override, those IDs hit the live API and 4xx.
    if setup[:synthetic_only]
      skip "live entity test uses synthetic IDs from fixture — set AUTOBAHNAPIDE_TEST_WARNING_ENTID JSON to run live"
      return
    end
    client = setup[:client]

    # Bootstrap entity data from existing test data.
    warning_ref01_data_raw = Vs.items(Helpers.to_map(
      Vs.getpath(setup[:data], "existing.warning")))
    warning_ref01_data = nil
    if warning_ref01_data_raw.length > 0
      warning_ref01_data = Helpers.to_map(warning_ref01_data_raw[0][1])
    end

    # LIST
    warning_ref01_ent = client.Warning(nil)
    warning_ref01_match = {
      "road_id" => setup[:idmap]["road01"],
    }

    warning_ref01_list_result = warning_ref01_ent.list(warning_ref01_match, nil)
    assert warning_ref01_list_result.is_a?(Array)

    # LOAD
    warning_ref01_match_dt0 = {}
    warning_ref01_data_dt0_loaded = warning_ref01_ent.load(warning_ref01_match_dt0, nil)
    assert !warning_ref01_data_dt0_loaded.nil?

  end
end

def warning_basic_setup(extra)
  Runner.load_env_local

  entity_data_file = File.join(__dir__, "..", "..", ".sdk", "test", "entity", "warning", "WarningTestData.json")
  entity_data_source = File.read(entity_data_file)
  entity_data = JSON.parse(entity_data_source)

  options = {}
  options["entity"] = entity_data["existing"]

  client = AutobahnApiDeSDK.test(options, extra)

  # Generate idmap via transform.
  idmap = Vs.transform(
    ["warning01", "warning02", "warning03", "road01"],
    {
      "`$PACK`" => ["", {
        "`$KEY`" => "`$COPY`",
        "`$VAL`" => ["`$FORMAT`", "upper", "`$COPY`"],
      }],
    }
  )

  # Detect ENTID env override before envOverride consumes it. When live
  # mode is on without a real override, the basic test runs against synthetic
  # IDs from the fixture and 4xx's. Surface this so the test can skip.
  entid_env_raw = ENV["AUTOBAHNAPIDE_TEST_WARNING_ENTID"]
  idmap_overridden = !entid_env_raw.nil? && entid_env_raw.strip.start_with?("{")

  env = Runner.env_override({
    "AUTOBAHNAPIDE_TEST_WARNING_ENTID" => idmap,
    "AUTOBAHNAPIDE_TEST_LIVE" => "FALSE",
    "AUTOBAHNAPIDE_TEST_EXPLAIN" => "FALSE",
  })

  idmap_resolved = Helpers.to_map(
    env["AUTOBAHNAPIDE_TEST_WARNING_ENTID"])
  if idmap_resolved.nil?
    idmap_resolved = Helpers.to_map(idmap)
  end

  if env["AUTOBAHNAPIDE_TEST_LIVE"] == "TRUE"
    merged_opts = Vs.merge([
      {
      },
      extra || {},
    ])
    client = AutobahnApiDeSDK.new(Helpers.to_map(merged_opts))
  end

  live = env["AUTOBAHNAPIDE_TEST_LIVE"] == "TRUE"
  {
    client: client,
    data: entity_data,
    idmap: idmap_resolved,
    env: env,
    explain: env["AUTOBAHNAPIDE_TEST_EXPLAIN"] == "TRUE",
    live: live,
    synthetic_only: live && !idmap_overridden,
    now: (Time.now.to_f * 1000).to_i,
  }
end
