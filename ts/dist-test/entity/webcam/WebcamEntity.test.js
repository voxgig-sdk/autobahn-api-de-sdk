"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('WebcamEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when AUTOBAHN_API_DE_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('AUTOBAHN_API_DE_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.AutobahnApiDeSDK.test();
        const ent = testsdk.Webcam();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.AUTOBAHN_API_DE_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'webcam.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "coordinate", "req": false, "short": "Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84).", "type": "`$OBJECT`", "index$": 0 }, { "active": true, "name": "description", "req": false, "type": "`$ARRAY`", "index$": 1 }, { "active": true, "name": "display_type", "req": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "extent", "req": false, "short": "Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.", "type": "`$STRING`", "index$": 3 }, { "active": true, "name": "footer", "req": false, "type": "`$ARRAY`", "index$": 4 }, { "active": true, "name": "future", "req": false, "type": "`$BOOLEAN`", "index$": 5 }, { "active": true, "name": "icon", "req": false, "short": "Sinnbild, das die Art des Eintrags beschreibt.", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "id", "req": false, "type": "`$STRING`", "index$": 7 }, { "active": true, "format": "byte", "name": "identifier", "req": false, "type": "`$STRING`", "index$": 8 }, { "active": true, "format": "uri", "name": "imageurl", "req": false, "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "isBlocked", "req": false, "type": "`$STRING`", "index$": 10 }, { "active": true, "format": "uri", "name": "linkurl", "req": false, "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "lorryParkingFeatureIcons", "req": false, "type": "`$ARRAY`", "index$": 12 }, { "active": true, "name": "operator", "req": false, "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "point", "req": false, "short": "Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84).", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "routeRecommendation", "req": false, "type": "`$ARRAY`", "index$": 15 }, { "active": true, "name": "subtitle", "req": false, "type": "`$STRING`", "index$": 16 }, { "active": true, "name": "title", "req": false, "type": "`$STRING`", "index$": 17 }], "id": { "field": "id", "name": "id" }, "name": "webcam", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "A1", "kind": "param", "name": "road_id", "orig": "road_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /{roadId}/services/webcam", "json": "{\"operationId\":\"list-webcams\",\"parameters\":[{\"in\":\"path\",\"name\":\"roadId\",\"required\":true,\"schema\":{\"description\":\"Kann jede gültige Straßenbezeichnung sein (nicht auf Autobahnen beschränkt). Die Gültigkeit wird nicht überprüft: Abfragen mit nicht existierenden Straßenbezeichnungen liefern einen leeren Datensatz zurück. Die Schreibweise kann von der sonst üblichen Form abweichen (z.B. S1234 statt St1234 für Staatsstraßen).\\n\",\"example\":\"A1\",\"pattern\":\"[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?(\\\\/[A-Z][A-Za-z]*[1-9]([0-9]{1,3})?)?\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"webcam\":{\"items\":{\"allOf\":[{\"properties\":{\"coordinate\":{\"description\":\"Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). Identisch zu Point, jedoch sind rundungsbedingte Abweichungen möglich.\",\"example\":{\"lat\":\"54.006057\",\"long\":\"10.729057\"},\"properties\":{\"lat\":{\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"},\"long\":{\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"}},\"type\":\"object\"},\"description\":{\"example\":[\"Beginn: 29.06.2021 09:00\",\"Ende: 28.11.2021 17:00\",\"\",\"Art der Maßnahme:Asphaltdeckenerneuerung\",\"Einschränkungen:Es steht nur 1 Fahrstreifen zur Verfügung.\\n\\nVollsperrung der AS Eutin Ostseite vom 17.07.2021 - 15.09.2021.\\n\\nVollsperrung der AS Scharbeutz Ostseite vom 16.09.2021 - 17.11.2021.\",\"Maximale Durchfahrsbreite: 3.25\\n\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"display_type\":{\"enum\":[\"ROADWORKS\",\"WEBCAM\",\"PARKING\",\"WARNING\",\"WEIGHT_LIMIT_35\",\"CLOSURE\",\"CLOSURE_ENTRY_EXIT\",\"STRONG_ELECTRIC_CHARGING_STATION\",\"SHORT_TERM_ROADWORKS\",\"ELECTRIC_CHARGING_STATION\"],\"type\":\"string\"},\"extent\":{\"description\":\"Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.\",\"example\":\"10.728384054665147,54.00605746113356,10.775848767524598,54.09436740278899\",\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"},\"footer\":{\"example\":[\"Beginn: 29.06.2021 09:00\",\"Ende: 28.11.2021 17:00\",\"\",\"Art der Maßnahme:Asphaltdeckenerneuerung\",\"Einschränkungen:Es steht nur 1 Fahrstreifen zur Verfügung.\\n\\nVollsperrung der AS Eutin Ostseite vom 17.07.2021 - 15.09.2021.\\n\\nVollsperrung der AS Scharbeutz Ostseite vom 16.09.2021 - 17.11.2021.\",\"Maximale Durchfahrsbreite: 3.25\\n\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"future\":{\"type\":\"boolean\"},\"icon\":{\"description\":\"Sinnbild, das die Art des Eintrags beschreibt. Größtenteils sind diese dem offiziellen Verkehrszeichenkatalog entnommen, teilweise allerdings mit abweichender Bedeutung und/oder nicht offiziellen Unternummern. Wo kein passendes Verkehrszeichen existiert, werden nicht-numerische Werte verwendet:\\n<ul>\\n<li>101: Gefahr</li>\\n<li>123: Bauarbeiten</li>\\n<li>250: Sperrung</li>\\n<li>262-2: Max. 3,5t</li>\\n<li>314-50: Park-/Rastplatz (Pkw/Lkw)</li>\\n<li>314-50-2: Park-/Rastplatz (nur Pkw)</li>\\n<li>448: Anschlussstelle gesperrt</li>\\n<li>charging_plug_strong: Schnellladestation für E-Fahrzeuge</li>\\n<li>warnkegel: Kurzzeitbaustelle</li>\\n</ul>\\n\",\"type\":\"string\"},\"identifier\":{\"format\":\"byte\",\"type\":\"string\"},\"isBlocked\":{\"type\":\"string\"},\"lorryParkingFeatureIcons\":{\"items\":{\"example\":{\"description\":\"Picknickmöglichkeiten\",\"icon\":\"almofont almo-picnic_facility\",\"style\":\"\"},\"properties\":{\"description\":{\"type\":\"string\"},\"icon\":{\"type\":\"string\"},\"style\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"point\":{\"description\":\"Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). Identisch zu Coordinate, jedoch sind rundungsbedingte Abweichungen möglich.\",\"example\":\"10.729057,54.006057\",\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"},\"routeRecommendation\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"subtitle\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"imageurl\":{\"format\":\"uri\",\"type\":\"string\"},\"linkurl\":{\"format\":\"uri\",\"type\":\"string\"},\"operator\":{\"type\":\"string\"}},\"type\":\"object\"}],\"example\":{\"coordinate\":{\"lat\":\"50.987423\",\"long\":\"6.861151\"},\"description\":[],\"display_type\":\"WEBCAM\",\"extent\":\"6.861151,50.987423,6.861151,50.987423\",\"footer\":[\"ID: WEBCAM__NRW_Sila-Signalbau_10108109881648294854\"],\"future\":false,\"icon\":\"webcam\",\"identifier\":\"V0VCQ0FNX19OUldfU2lsYS1TaWduYWxiYXVfMTAxMDgxMDk4ODE2NDgyOTQ4NTQ=\",\"imageurl\":\"https://www.verkehr.nrw/webcams/10108109881648294854.jpg\",\"isBlocked\":\"false\",\"linkurl\":\"https://www.blitzvideoserver.de/player_strassennrw.html?serverip=62.113.210.7&serverapp=strassennrw-rtplive&streamname=10108109881648294854\",\"lorryParkingFeatureIcons\":[],\"operator\":\"NRW\",\"point\":\"6.861151,50.987423\",\"routeRecommendation\":[],\"subtitle\":\"Blickrichtung Dortmund\",\"title\":\"A1 | ID005 AK Köln-Nord\"}},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Success\"},\"204\":{\"description\":\"Not found.\"},\"400\":{\"description\":\"Internal server error.\"},\"404\":{\"description\":\"Not found.\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/{roadId}/services/webcam", "rename": { "param": { "roadId": "road_id" } }, "segments": [{ "var": "road_id" }, { "lit": "services" }, { "lit": "webcam" }], "select": { "exist": ["road_id"] }, "transform": { "req": "`reqdata`", "res": "`body.webcam`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "active": true, "args": { "params": [{ "active": true, "example": "V0VCQ0FNX19OUldfU2lsYS1TaWduYWxiYXVfMTAxMDgxNDE3MjM4ODYzOTk5MTU=", "kind": "param", "name": "id", "orig": "webcam_id", "reqd": true, "type": "`$STRING`", "index$": 0 }] }, "contract": { "id": "GET /details/webcam/{webcamId}", "json": "{\"operationId\":\"get-webcam\",\"parameters\":[{\"in\":\"path\",\"name\":\"webcamId\",\"required\":true,\"schema\":{\"example\":\"V0VCQ0FNX19OUldfU2lsYS1TaWduYWxiYXVfMTAxMDgxNDE3MjM4ODYzOTk5MTU=\",\"format\":\"byte\",\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"allOf\":[{\"properties\":{\"coordinate\":{\"description\":\"Beginn des betroffenen Streckenabschnitts (Koordinaten in WGS84). Identisch zu Point, jedoch sind rundungsbedingte Abweichungen möglich.\",\"example\":{\"lat\":\"54.006057\",\"long\":\"10.729057\"},\"properties\":{\"lat\":{\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"},\"long\":{\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"}},\"type\":\"object\"},\"description\":{\"example\":[\"Beginn: 29.06.2021 09:00\",\"Ende: 28.11.2021 17:00\",\"\",\"Art der Maßnahme:Asphaltdeckenerneuerung\",\"Einschränkungen:Es steht nur 1 Fahrstreifen zur Verfügung.\\n\\nVollsperrung der AS Eutin Ostseite vom 17.07.2021 - 15.09.2021.\\n\\nVollsperrung der AS Scharbeutz Ostseite vom 16.09.2021 - 17.11.2021.\",\"Maximale Durchfahrsbreite: 3.25\\n\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"display_type\":{\"enum\":[\"ROADWORKS\",\"WEBCAM\",\"PARKING\",\"WARNING\",\"WEIGHT_LIMIT_35\",\"CLOSURE\",\"CLOSURE_ENTRY_EXIT\",\"STRONG_ELECTRIC_CHARGING_STATION\",\"SHORT_TERM_ROADWORKS\",\"ELECTRIC_CHARGING_STATION\"],\"type\":\"string\"},\"extent\":{\"description\":\"Rechteck (in WGS84-Koordinaten), das den betroffenen Streckenabschnitt umschließt.\",\"example\":\"10.728384054665147,54.00605746113356,10.775848767524598,54.09436740278899\",\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"},\"footer\":{\"example\":[\"Beginn: 29.06.2021 09:00\",\"Ende: 28.11.2021 17:00\",\"\",\"Art der Maßnahme:Asphaltdeckenerneuerung\",\"Einschränkungen:Es steht nur 1 Fahrstreifen zur Verfügung.\\n\\nVollsperrung der AS Eutin Ostseite vom 17.07.2021 - 15.09.2021.\\n\\nVollsperrung der AS Scharbeutz Ostseite vom 16.09.2021 - 17.11.2021.\",\"Maximale Durchfahrsbreite: 3.25\\n\"],\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"future\":{\"type\":\"boolean\"},\"icon\":{\"description\":\"Sinnbild, das die Art des Eintrags beschreibt. Größtenteils sind diese dem offiziellen Verkehrszeichenkatalog entnommen, teilweise allerdings mit abweichender Bedeutung und/oder nicht offiziellen Unternummern. Wo kein passendes Verkehrszeichen existiert, werden nicht-numerische Werte verwendet:\\n<ul>\\n<li>101: Gefahr</li>\\n<li>123: Bauarbeiten</li>\\n<li>250: Sperrung</li>\\n<li>262-2: Max. 3,5t</li>\\n<li>314-50: Park-/Rastplatz (Pkw/Lkw)</li>\\n<li>314-50-2: Park-/Rastplatz (nur Pkw)</li>\\n<li>448: Anschlussstelle gesperrt</li>\\n<li>charging_plug_strong: Schnellladestation für E-Fahrzeuge</li>\\n<li>warnkegel: Kurzzeitbaustelle</li>\\n</ul>\\n\",\"type\":\"string\"},\"identifier\":{\"format\":\"byte\",\"type\":\"string\"},\"isBlocked\":{\"type\":\"string\"},\"lorryParkingFeatureIcons\":{\"items\":{\"example\":{\"description\":\"Picknickmöglichkeiten\",\"icon\":\"almofont almo-picnic_facility\",\"style\":\"\"},\"properties\":{\"description\":{\"type\":\"string\"},\"icon\":{\"type\":\"string\"},\"style\":{\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"point\":{\"description\":\"Beginn des betroffenen Streckenabschnitts (Längengrad und Breitengrad in WGS84). Identisch zu Coordinate, jedoch sind rundungsbedingte Abweichungen möglich.\",\"example\":\"10.729057,54.006057\",\"pattern\":\"-?\\\\d+(?:\\\\.\\\\d+)?,\\\\s*-?\\\\d+(?:\\\\.\\\\d+)?\",\"type\":\"string\"},\"routeRecommendation\":{\"items\":{\"type\":\"object\"},\"type\":\"array\"},\"subtitle\":{\"type\":\"string\"},\"title\":{\"type\":\"string\"}},\"type\":\"object\"},{\"properties\":{\"imageurl\":{\"format\":\"uri\",\"type\":\"string\"},\"linkurl\":{\"format\":\"uri\",\"type\":\"string\"},\"operator\":{\"type\":\"string\"}},\"type\":\"object\"}],\"example\":{\"coordinate\":{\"lat\":\"50.987423\",\"long\":\"6.861151\"},\"description\":[],\"display_type\":\"WEBCAM\",\"extent\":\"6.861151,50.987423,6.861151,50.987423\",\"footer\":[\"ID: WEBCAM__NRW_Sila-Signalbau_10108109881648294854\"],\"future\":false,\"icon\":\"webcam\",\"identifier\":\"V0VCQ0FNX19OUldfU2lsYS1TaWduYWxiYXVfMTAxMDgxMDk4ODE2NDgyOTQ4NTQ=\",\"imageurl\":\"https://www.verkehr.nrw/webcams/10108109881648294854.jpg\",\"isBlocked\":\"false\",\"linkurl\":\"https://www.blitzvideoserver.de/player_strassennrw.html?serverip=62.113.210.7&serverapp=strassennrw-rtplive&streamname=10108109881648294854\",\"lorryParkingFeatureIcons\":[],\"operator\":\"NRW\",\"point\":\"6.861151,50.987423\",\"routeRecommendation\":[],\"subtitle\":\"Blickrichtung Dortmund\",\"title\":\"A1 | ID005 AK Köln-Nord\"}}}},\"description\":\"Success\"},\"204\":{\"description\":\"Not found.\"},\"400\":{\"description\":\"Internal server error.\"},\"404\":{\"description\":\"Not found.\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/details/webcam/{webcamId}", "rename": { "param": { "webcamId": "id" } }, "segments": [{ "lit": "details" }, { "lit": "webcam" }, { "var": "id" }], "select": { "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "webcam", "name__orig": "webcam", "Name": "Webcam", "name_": "webcam", "name-": "webcam", "NAME": "WEBCAM", "index$": 6 }, { "active": true, "entity": "webcam", "key$": "BasicWebcamFlow", "kind": "basic", "name": "BasicWebcamFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": { "road_id": "road01" }, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "webcam_ref01" } }], "index$": 0 }, { "active": true, "data": {}, "input": { "ref": "webcam_ref01", "srcdatavar": "webcam_ref01_data", "suffix": "_dt0" }, "match": { "id": "webcam01" }, "op": "load", "spec": [], "valid": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-webcam_ref01" } }], "index$": 1 }] }, 'Webcam');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let webcam_ref01_data = Object.values(setup.data.existing.webcam)[0];
        // LIST
        const webcam_ref01_ent = client.Webcam();
        const webcam_ref01_match = {};
        webcam_ref01_match['road_id'] = setup.idmap['road01'];
        const webcam_ref01_list = (await webcam_ref01_ent.list(webcam_ref01_match)).map((e) => e.data());
        // LOAD
        const webcam_ref01_match_dt0 = {};
        webcam_ref01_match_dt0.id = webcam_ref01_data.id;
        const webcam_ref01_data_dt0 = (await webcam_ref01_ent.load(webcam_ref01_match_dt0)).data();
        (0, node_assert_1.default)(webcam_ref01_data_dt0.id === webcam_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/webcam/WebcamTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.AutobahnApiDeSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['webcam01', 'webcam02', 'webcam03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'AUTOBAHN_API_DE_TEST_WEBCAM_ENTID': idmap,
        'AUTOBAHN_API_DE_TEST_LIVE': 'FALSE',
        'AUTOBAHN_API_DE_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['AUTOBAHN_API_DE_TEST_WEBCAM_ENTID'];
    const live = 'TRUE' === env.AUTOBAHN_API_DE_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['AUTOBAHN_API_DE_TEST_WEBCAM_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.AutobahnApiDeSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
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
    };
    return setup;
}
//# sourceMappingURL=WebcamEntity.test.js.map