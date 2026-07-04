
const envlocal = __dirname + '/../../../.env.local'
require('dotenv').config({ quiet: true, path: [envlocal] })

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'


import { AutobahnApiDeSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveDelay,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


describe('ParkingLorryEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AUTOBAHNAPIDE_TEST_LIVE=TRUE.
  afterEach(liveDelay('AUTOBAHNAPIDE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AutobahnApiDeSDK.test()
    const ent = testsdk.ParkingLorry()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AUTOBAHN_API_DE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (maybeSkipControl(t, 'entityOp', 'parking_lorry.' + op, live)) return
    }

    const setup = basicSetup()
    // The basic flow consumes synthetic IDs and field values from the
    // fixture (entity TestData.json). Those don't exist on the live API.
    // Skip live runs unless the user provided a real ENTID env override.
    if (setup.syntheticOnly) {
      t.skip('live entity test uses synthetic IDs from fixture — set AUTOBAHN_API_DE_TEST_PARKING_LORRY_ENTID JSON to run live')
      return
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let parking_lorry_ref01_data = Object.values(setup.data.existing.parking_lorry)[0] as any

    // LIST
    const parking_lorry_ref01_ent = client.ParkingLorry()
    const parking_lorry_ref01_match: any = {}
    parking_lorry_ref01_match['road_id'] = setup.idmap['road01']

    const parking_lorry_ref01_list = await parking_lorry_ref01_ent.list(parking_lorry_ref01_match)



  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/parking_lorry/ParkingLorryTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = AutobahnApiDeSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['parking_lorry01','parking_lorry02','parking_lorry03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  // Detect whether the user provided a real ENTID JSON via env var. The
  // basic flow consumes synthetic IDs from the fixture file; without an
  // override those synthetic IDs reach the live API and 4xx. Surface this
  // to the test so it can skip rather than fail.
  const idmapEnvVal = process.env['AUTOBAHN_API_DE_TEST_PARKING_LORRY_ENTID']
  const idmapOverridden = null != idmapEnvVal && idmapEnvVal.trim().startsWith('{')

  const env = envOverride({
    'AUTOBAHN_API_DE_TEST_PARKING_LORRY_ENTID': idmap,
    'AUTOBAHN_API_DE_TEST_LIVE': 'FALSE',
    'AUTOBAHN_API_DE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['AUTOBAHN_API_DE_TEST_PARKING_LORRY_ENTID']

  const live = 'TRUE' === env.AUTOBAHN_API_DE_TEST_LIVE

  if (live) {
    client = new AutobahnApiDeSDK(merge([
      {
      },
      extra
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.AUTOBAHN_API_DE_TEST_EXPLAIN,
    live,
    syntheticOnly: live && !idmapOverridden,
    now: Date.now(),
  }

  return setup
}
  
