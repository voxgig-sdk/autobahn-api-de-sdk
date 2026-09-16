

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { AutobahnApiDeSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
loadEnvLocal(__dirname + '/../../../.env.local')


describe('ListAutobahnenEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AUTOBAHN_API_DE_TEST_LIVE=TRUE.
  afterEach(liveDelay('AUTOBAHN_API_DE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AutobahnApiDeSDK.test()
    const ent = testsdk.ListAutobahnen()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AUTOBAHN_API_DE_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'list_autobahnen.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"roads","req":false,"type":"`$ARRAY`","index$":0}],"name":"list_autobahnen","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{},"contract":{"id":"GET /","json":"{\"operationId\":\"list-autobahnen\",\"parameters\":[],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"roads\":{\"items\":{\"description\":\"Kann jede gültige Straßenbezeichnung sein (nicht auf Autobahnen beschränkt). Die Gültigkeit wird nicht überprüft: Abfragen mit nicht existierenden Straßenbezeichnungen liefern einen leeren Datensatz zurück. Die Schreibweise kann von der sonst üblichen Form abweichen (z.B. S1234 statt St1234 für Staatsstraßen).\\n\",\"example\":\"A1\",\"pattern\":\"[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?(\\\\/[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?)?\",\"type\":\"string\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Success\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/","segments":[],"select":{},"transform":{"req":"`reqdata`","res":"`body.roads`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"list_autobahnen","name__orig":"list_autobahnen","Name":"ListAutobahnen","name_":"list_autobahnen","name-":"list-autobahnen","NAME":"LIST_AUTOBAHNEN","index$":2}, {"active":true,"entity":"list_autobahnen","key$":"BasicListAutobahnenFlow","kind":"basic","name":"BasicListAutobahnenFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"list_autobahnen_ref01"}}],"index$":0}]}, 'ListAutobahnen')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let list_autobahnen_ref01_data = Object.values(setup.data.existing.list_autobahnen)[0] as any

    // LIST
    const list_autobahnen_ref01_ent = client.ListAutobahnen()
    const list_autobahnen_ref01_match: any = {}

    const list_autobahnen_ref01_list = (await list_autobahnen_ref01_ent.list(list_autobahnen_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/list_autobahnen/ListAutobahnenTestData.json')

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
    ['list_autobahnen01','list_autobahnen02','list_autobahnen03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AUTOBAHN_API_DE_TEST_LIST_AUTOBAHNEN_ENTID': idmap,
    'AUTOBAHN_API_DE_TEST_LIVE': 'FALSE',
    'AUTOBAHN_API_DE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['AUTOBAHN_API_DE_TEST_LIST_AUTOBAHNEN_ENTID']

  const live = 'TRUE' === env.AUTOBAHN_API_DE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AUTOBAHN_API_DE_TEST_LIST_AUTOBAHNEN_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new AutobahnApiDeSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
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
    transport,
    now: Date.now(),
  }

  return setup
}
  
