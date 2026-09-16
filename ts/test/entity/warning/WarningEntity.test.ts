

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


describe('WarningEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AUTOBAHN_API_DE_TEST_LIVE=TRUE.
  afterEach(liveDelay('AUTOBAHN_API_DE_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AutobahnApiDeSDK.test()
    const ent = testsdk.Warning()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AUTOBAHN_API_DE_TEST_LIVE
    for (const op of ['list', 'load']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'warning.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"coordinate","req":false,"type":"`$OBJECT`","index$":0},{"active":true,"name":"description","req":false,"type":"`$ARRAY`","index$":1},{"active":true,"name":"display_type","req":false,"type":"`$STRING`","index$":2},{"active":true,"name":"extent","req":false,"type":"`$STRING`","index$":3},{"active":true,"name":"footer","req":false,"type":"`$ARRAY`","index$":4},{"active":true,"name":"future","req":false,"type":"`$BOOLEAN`","index$":5},{"active":true,"name":"icon","req":false,"type":"`$STRING`","index$":6},{"active":true,"name":"id","req":false,"type":"`$STRING`","index$":7},{"active":true,"name":"identifier","req":false,"type":"`$STRING`","index$":8},{"active":true,"name":"isBlocked","req":false,"type":"`$STRING`","index$":9},{"active":true,"name":"lorryParkingFeatureIcons","req":false,"type":"`$ARRAY`","index$":10},{"active":true,"name":"point","req":false,"type":"`$STRING`","index$":11},{"active":true,"name":"routeRecommendation","req":false,"type":"`$ARRAY`","index$":12},{"active":true,"name":"startTimestamp","req":false,"type":"`$STRING`","index$":13},{"active":true,"name":"subtitle","req":false,"type":"`$STRING`","index$":14},{"active":true,"name":"title","req":false,"type":"`$STRING`","index$":15}],"id":{"field":"id","name":"id"},"name":"warning","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"params":[{"active":true,"example":"A1","kind":"param","name":"road_id","orig":"road_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /{roadId}/services/warning","json":"{\"operationId\":\"list-warnings\",\"parameters\":[{\"in\":\"path\",\"name\":\"roadId\",\"required\":true,\"schema\":{\"description\":\"Kann jede gültige Straßenbezeichnung sein (nicht auf Autobahnen beschränkt). Die Gültigkeit wird nicht überprüft: Abfragen mit nicht existierenden Straßenbezeichnungen liefern einen leeren Datensatz zurück. Die Schreibweise kann von der sonst üblichen Form abweichen (z.B. S1234 statt St1234 für Staatsstraßen).\\n\",\"example\":\"A1\",\"pattern\":\"[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?(\\\\/[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?)?\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"warning\":{\"items\":{\"allOf\":[{\"allOf\":[{\"properties\":{\"coordinate\":{\"description\":\"Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). Identisch zu Point, jedoch sind rundungsbedingte Abweichungen möglich.\",\"example\":{\"lat\":\"54.006057\",\"long\":\"10.729057\"},\"properties\":{\"lat\":{\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"},\"long\":{\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"}},\"type\":\"object\"},\"description\":{\"example\":[\"Beginn: 29.06.2021 09:00\",\"Ende: 28.11.2021 17:00\",\"\",\"Art der Maßnahme:Asphaltdeckenerneuerung\",\"Einschränkungen:Es steht nur 1 Fahrstreifen zur Verfügung.\\n\\nVollsperrung der AS Eutin Ostseite vom 17.07.2021 - 15.09.2021.\\n\\nVollsperrung der AS Scharbeutz Ostseite vom 16.09.2021 - 17.11.2021.\",\"Maximale Durchfahrsbreite: 3.25\\n\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"display_type\":{\"enum\":[\"ROADWORKS\",\"WEBCAM\",\"PARKING\",\"WARNING\",\"WEIGHT_LIMIT_35\",\"CLOSURE\",\"CLOSURE_ENTRY_EXIT\",\"STRONG_ELECTRIC_CHARGING_STATION\",\"SHORT_TERM_ROADWORKS\",\"ELECTRIC_CHARGING_STATION\"],\"type\":\"string\"},\"extent\":{\"description\":\"Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.\",\"example\":\"10.728384054665147,54.00605746113356,10.775848767524598,54.09436740278899\",\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"},\"footer\":{\"example\":[\"Beginn: 29.06.2021 09:00\",\"Ende: 28.11.2021 17:00\",\"\",\"Art der Maßnahme:Asphaltdeckenerneuerung\",\"Einschränkungen:Es steht nur 1 Fahrstreifen zur Verfügung.\\n\\nVollsperrung der AS Eutin Ostseite vom 17.07.2021 - 15.09.2021.\\n\\nVollsperrung der AS Scharbeutz Ostseite vom 16.09.2021 - 17.11.2021.\",\"Maximale Durchfahrsbreite: 3.25\\n\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"future\":{\"type\":\"boolean\"},\"icon\":{\"description\":\"Sinnbild, das die Art des Eintrags beschreibt. Größtenteils sind diese dem offiziellen Verkehrszeichenkatalog entnommen, teilweise allerdings mit abweichender Bedeutung und/oder nicht offiziellen Unternummern. Wo kein passendes Verkehrszeichen existiert, werden nicht-numerische Werte verwendet:\\n<ul>\\n<li>101: Gefahr</li>\\n<li>123: Bauarbeiten</li>\\n<li>250: Sperrung</li>\\n<li>262-2: Max. 3,5t</li>\\n<li>314-50: Park-/Rastplatz (Pkw/Lkw)</li>\\n<li>314-50-2: Park-/Rastplatz (nur Pkw)</li>\\n<li>448: Anschlussstelle gesperrt</li>\\n<li>charging_plug_strong: Schnellladestation für E-Fahrzeuge</li>\\n<li>warnkegel: Kurzzeitbaustelle</li>\\n</ul>\\n\",\"type\":\"string\"},\"identifier\":{\"format\":\"byte\",\"type\":\"string\"},\"isBlocked\":{\"type\":\"string\"},\"lorryParkingFeatureIcons\":{\"items\":{\"example\":{\"description\":\"Picknickmöglichkeiten\",\"icon\":\"almofont almo-picnic_facility\",\"style\":\"\"},\"properties\":{\"description\":{\"type\":\"string\"},\"icon\":{\"type\":\"string\"},\"style\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"point\":{\"description\":\"Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). Identisch zu Coordinate, jedoch sind rundungsbedingte Abweichungen möglich.\",\"example\":\"10.729057,54.006057\",\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"},\"routeRecommendation\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"subtitle\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"startTimestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}]}],\"example\":{\"coordinate\":{\"lat\":\"53.005070\",\"long\":\"8.699040\"},\"description\":[\"Beginn: 25.05.2021 00:00\",\"Ende: 30.11.2021 23:59\",\"\",\"A1 Bremen Richtung Osnabrück\",\"zwischen Dreieck Stuhr und Groß Ippener\",\"Fahrbahnverengung, geänderte Verkehrsführung, Staugefahr, bis voraussichtlich 30.11.2021\",\"Erweiterung PWC Kiekut.\"],\"display_type\":\"WARNING\",\"extent\":\"8.61785,52.97344,8.69904,53.00507\",\"footer\":[],\"future\":false,\"icon\":\"101\",\"identifier\":\"V0FSTklOR19fbWRtLnZpel9fTE1TLU5JL3JfTE1TLU5JLzIxMjI2MF9EICBOSSBMTVMtTkkgIC4w\",\"isBlocked\":\"false\",\"lorryParkingFeatureIcons\":[],\"point\":\"8.699040,53.005070\",\"routeRecommendation\":[],\"startTimestamp\":\"2021-05-25T00:00:00.000+0200\",\"subtitle\":\"Bremen Richtung Osnabrück\",\"title\":\"A1 | AS Delmenhorst-Ost (58b) - AS Groß Ippener (59)\"}},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Success\"},\"204\":{\"description\":\"Not found.\"},\"400\":{\"description\":\"Internal server error.\"},\"404\":{\"description\":\"Not found.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/{roadId}/services/warning","rename":{"param":{"roadId":"road_id"}},"segments":[{"var":"road_id"},{"lit":"services"},{"lit":"warning"}],"select":{"exist":["road_id"]},"transform":{"req":"`reqdata`","res":"`body.warning`"},"index$":0}],"key$":"list"},"load":{"input":"data","name":"load","points":[{"active":true,"args":{"params":[{"active":true,"example":"V0FSTklOR19fbWRtLnZpel9fTE1TLU5XL3JfTE1TLU5XLzMyNDE3OV9EICBOVyBMTVMtTlcuMA==","kind":"param","name":"id","orig":"warning_id","reqd":true,"type":"`$STRING`","index$":0}]},"contract":{"id":"GET /details/warning/{warningId}","json":"{\"operationId\":\"get-warning\",\"parameters\":[{\"in\":\"path\",\"name\":\"warningId\",\"required\":true,\"schema\":{\"example\":\"V0FSTklOR19fbWRtLnZpel9fTE1TLU5XL3JfTE1TLU5XLzMyNDE3OV9EICBOVyBMTVMtTlcuMA==\",\"format\":\"byte\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"allOf\":[{\"properties\":{\"coordinate\":{\"description\":\"Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). Identisch zu Point, jedoch sind rundungsbedingte Abweichungen möglich.\",\"example\":{\"lat\":\"54.006057\",\"long\":\"10.729057\"},\"properties\":{\"lat\":{\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"},\"long\":{\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"}},\"type\":\"object\"},\"description\":{\"example\":[\"Beginn: 29.06.2021 09:00\",\"Ende: 28.11.2021 17:00\",\"\",\"Art der Maßnahme:Asphaltdeckenerneuerung\",\"Einschränkungen:Es steht nur 1 Fahrstreifen zur Verfügung.\\n\\nVollsperrung der AS Eutin Ostseite vom 17.07.2021 - 15.09.2021.\\n\\nVollsperrung der AS Scharbeutz Ostseite vom 16.09.2021 - 17.11.2021.\",\"Maximale Durchfahrsbreite: 3.25\\n\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"display_type\":{\"enum\":[\"ROADWORKS\",\"WEBCAM\",\"PARKING\",\"WARNING\",\"WEIGHT_LIMIT_35\",\"CLOSURE\",\"CLOSURE_ENTRY_EXIT\",\"STRONG_ELECTRIC_CHARGING_STATION\",\"SHORT_TERM_ROADWORKS\",\"ELECTRIC_CHARGING_STATION\"],\"type\":\"string\"},\"extent\":{\"description\":\"Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.\",\"example\":\"10.728384054665147,54.00605746113356,10.775848767524598,54.09436740278899\",\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"},\"footer\":{\"example\":[\"Beginn: 29.06.2021 09:00\",\"Ende: 28.11.2021 17:00\",\"\",\"Art der Maßnahme:Asphaltdeckenerneuerung\",\"Einschränkungen:Es steht nur 1 Fahrstreifen zur Verfügung.\\n\\nVollsperrung der AS Eutin Ostseite vom 17.07.2021 - 15.09.2021.\\n\\nVollsperrung der AS Scharbeutz Ostseite vom 16.09.2021 - 17.11.2021.\",\"Maximale Durchfahrsbreite: 3.25\\n\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"future\":{\"type\":\"boolean\"},\"icon\":{\"description\":\"Sinnbild, das die Art des Eintrags beschreibt. Größtenteils sind diese dem offiziellen Verkehrszeichenkatalog entnommen, teilweise allerdings mit abweichender Bedeutung und/oder nicht offiziellen Unternummern. Wo kein passendes Verkehrszeichen existiert, werden nicht-numerische Werte verwendet:\\n<ul>\\n<li>101: Gefahr</li>\\n<li>123: Bauarbeiten</li>\\n<li>250: Sperrung</li>\\n<li>262-2: Max. 3,5t</li>\\n<li>314-50: Park-/Rastplatz (Pkw/Lkw)</li>\\n<li>314-50-2: Park-/Rastplatz (nur Pkw)</li>\\n<li>448: Anschlussstelle gesperrt</li>\\n<li>charging_plug_strong: Schnellladestation für E-Fahrzeuge</li>\\n<li>warnkegel: Kurzzeitbaustelle</li>\\n</ul>\\n\",\"type\":\"string\"},\"identifier\":{\"format\":\"byte\",\"type\":\"string\"},\"isBlocked\":{\"type\":\"string\"},\"lorryParkingFeatureIcons\":{\"items\":{\"example\":{\"description\":\"Picknickmöglichkeiten\",\"icon\":\"almofont almo-picnic_facility\",\"style\":\"\"},\"properties\":{\"description\":{\"type\":\"string\"},\"icon\":{\"type\":\"string\"},\"style\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"point\":{\"description\":\"Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). Identisch zu Coordinate, jedoch sind rundungsbedingte Abweichungen möglich.\",\"example\":\"10.729057,54.006057\",\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"},\"routeRecommendation\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"subtitle\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"startTimestamp\":{\"format\":\"date-time\",\"type\":\"string\"}},\"type\":\"object\"}]}],\"example\":{\"coordinate\":{\"lat\":\"53.005070\",\"long\":\"8.699040\"},\"description\":[\"Beginn: 25.05.2021 00:00\",\"Ende: 30.11.2021 23:59\",\"\",\"A1 Bremen Richtung Osnabrück\",\"zwischen Dreieck Stuhr und Groß Ippener\",\"Fahrbahnverengung, geänderte Verkehrsführung, Staugefahr, bis voraussichtlich 30.11.2021\",\"Erweiterung PWC Kiekut.\"],\"display_type\":\"WARNING\",\"extent\":\"8.61785,52.97344,8.69904,53.00507\",\"footer\":[],\"future\":false,\"icon\":\"101\",\"identifier\":\"V0FSTklOR19fbWRtLnZpel9fTE1TLU5JL3JfTE1TLU5JLzIxMjI2MF9EICBOSSBMTVMtTkkgIC4w\",\"isBlocked\":\"false\",\"lorryParkingFeatureIcons\":[],\"point\":\"8.699040,53.005070\",\"routeRecommendation\":[],\"startTimestamp\":\"2021-05-25T00:00:00.000+0200\",\"subtitle\":\"Bremen Richtung Osnabrück\",\"title\":\"A1 | AS Delmenhorst-Ost (58b) - AS Groß Ippener (59)\"}}}},\"description\":\"Success\"},\"204\":{\"description\":\"Not found.\"},\"400\":{\"description\":\"Internal server error.\"},\"404\":{\"description\":\"Not found.\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/details/warning/{warningId}","rename":{"param":{"warningId":"id"}},"segments":[{"lit":"details"},{"lit":"warning"},{"var":"id"}],"select":{"exist":["id"]},"transform":{"req":"`reqdata`","res":"`body`"},"index$":0}],"key$":"load"}},"relations":{"ancestors":[]},"key$":"warning","name__orig":"warning","Name":"Warning","name_":"warning","name-":"warning","NAME":"WARNING","index$":5}, {"active":true,"entity":"warning","key$":"BasicWarningFlow","kind":"basic","name":"BasicWarningFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{"road_id":"road01"},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"warning_ref01"}}],"index$":0},{"active":true,"data":{},"input":{"ref":"warning_ref01","srcdatavar":"warning_ref01_data","suffix":"_dt0"},"match":{"id":"warning01"},"op":"load","spec":[],"valid":[{"apply":"TextFieldMark","def":{"mark":"Mark01-warning_ref01"}}],"index$":1}]}, 'Warning')
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let warning_ref01_data = Object.values(setup.data.existing.warning)[0] as any

    // LIST
    const warning_ref01_ent = client.Warning()
    const warning_ref01_match: any = {}
    warning_ref01_match['road_id'] = setup.idmap['road01']

    const warning_ref01_list = (await warning_ref01_ent.list(warning_ref01_match)).map((e: any) => e.data())


    // LOAD
    const warning_ref01_match_dt0: any = {}
    warning_ref01_match_dt0.id = warning_ref01_data.id
    const warning_ref01_data_dt0 = (await warning_ref01_ent.load(warning_ref01_match_dt0)).data()
    assert(warning_ref01_data_dt0.id === warning_ref01_data.id)


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/warning/WarningTestData.json')

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
    ['warning01','warning02','warning03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AUTOBAHN_API_DE_TEST_WARNING_ENTID': idmap,
    'AUTOBAHN_API_DE_TEST_LIVE': 'FALSE',
    'AUTOBAHN_API_DE_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['AUTOBAHN_API_DE_TEST_WARNING_ENTID']

  const live = 'TRUE' === env.AUTOBAHN_API_DE_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AUTOBAHN_API_DE_TEST_WARNING_ENTID']
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
  
