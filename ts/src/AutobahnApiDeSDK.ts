// AutobahnApiDe Ts SDK

import { ClosureEntity } from './entity/ClosureEntity'
import { ElectricChargingStationEntity } from './entity/ElectricChargingStationEntity'
import { ListAutobahnenEntity } from './entity/ListAutobahnenEntity'
import { ParkingLorryEntity } from './entity/ParkingLorryEntity'
import { RoadworkEntity } from './entity/RoadworkEntity'
import { WarningEntity } from './entity/WarningEntity'
import { WebcamEntity } from './entity/WebcamEntity'

export type * from './AutobahnApiDeTypes'


import { inspect } from 'node:util'

import type { Context, Feature } from './types'

import { config } from './Config'
import { AutobahnApiDeEntityBase } from './AutobahnApiDeEntityBase'
import { Utility } from './utility/Utility'


import { BaseFeature } from './feature/base/BaseFeature'


const stdutil = new Utility()


class AutobahnApiDeSDK {
  _mode: string = 'live'
  _options: any
  _utility = new Utility()
  _features: Feature[]
  _rootctx: Context

  constructor(options?: any) {

    this._rootctx = this._utility.makeContext({
      client: this,
      utility: this._utility,
      config,
      options,
      shared: new WeakMap()
    })

    this._options = this._utility.makeOptions(this._rootctx)

    const struct = this._utility.struct
    const getpath = struct.getpath
    const items = struct.items

    if (true === getpath(this._options.feature, 'test.active')) {
      this._mode = 'test'
    }

    this._rootctx.options = this._options

    this._features = []

    const featureAdd = this._utility.featureAdd
    const featureInit = this._utility.featureInit

    items(this._options.feature, (fitem: [string, any]) => {
      const fname = fitem[0]
      const fopts = fitem[1]
      if (fopts.active) {
        featureAdd(this._rootctx, this._rootctx.config.makeFeature(fname))
      }
    })

    if (null != this._options.extend) {
      for (let f of this._options.extend) {
        featureAdd(this._rootctx, f)
      }
    }

    for (let f of this._features) {
      featureInit(this._rootctx, f)
    }

    const featureHook = this._utility.featureHook
    featureHook(this._rootctx, 'PostConstruct')
  }


  options() {
    return this._utility.struct.clone(this._options)
  }


  utility() {
    return this._utility.struct.clone(this._utility)
  }


  async prepare(fetchargs?: any) {
    const utility = this._utility
    const struct = utility.struct
    const clone = struct.clone

    const {
      makeContext,
      makeFetchDef,
      prepareHeaders,
      prepareAuth,
    } = utility

    fetchargs = fetchargs || {}

    let ctx: Context = makeContext({
      opname: 'prepare',
      ctrl: fetchargs.ctrl || {},
    }, this._rootctx)

    const options = this._options

    // Build spec directly from SDK options + user-provided fetch args.
    const spec: any = {
      base: options.base,
      prefix: options.prefix,
      suffix: options.suffix,
      path: fetchargs.path || '',
      method: fetchargs.method || 'GET',
      params: fetchargs.params || {},
      query: fetchargs.query || {},
      headers: prepareHeaders(ctx),
      body: fetchargs.body,
      step: 'start',
    }

    ctx.spec = spec

    // Merge user-provided headers over SDK defaults.
    if (fetchargs.headers) {
      const uheaders = fetchargs.headers
      for (let key in uheaders) {
        spec.headers[key] = uheaders[key]
      }
    }

    // Apply SDK auth (apikey, auth prefix, etc.)
    const authResult = prepareAuth(ctx)
    if (authResult instanceof Error) {
      return authResult
    }

    return makeFetchDef(ctx)
  }


  async direct(fetchargs?: any) {
    const utility = this._utility
    const fetcher = utility.fetcher
    const makeContext = utility.makeContext

    const fetchdef = await this.prepare(fetchargs)
    if (fetchdef instanceof Error) {
      return fetchdef
    }

    let ctx: Context = makeContext({
      opname: 'direct',
      ctrl: (fetchargs || {}).ctrl || {},
    }, this._rootctx)

    try {
      const fetched = await fetcher(ctx, fetchdef.url, fetchdef)

      if (null == fetched) {
        return { ok: false, err: ctx.error('direct_no_response', 'response: undefined') }
      }
      else if (fetched instanceof Error) {
        return { ok: false, err: fetched }
      }

      const status = fetched.status

      // No body responses (204 No Content, 304 Not Modified) and explicit
      // zero content-length must skip JSON parsing — fetched.json() would
      // throw `Unexpected end of JSON input` on an empty body.
      const headers = fetched.headers
      const contentLength = headers && 'function' === typeof headers.get
        ? headers.get('content-length')
        : (headers || {})['content-length']
      const noBody = 204 === status || 304 === status || '0' === String(contentLength)

      let json: any = undefined
      if (!noBody) {
        try {
          json = 'function' === typeof fetched.json ? await fetched.json() : fetched.json
        }
        catch (parseErr) {
          // Body wasn't valid JSON — surface the raw response rather than
          // throwing. data stays undefined; callers can inspect status/headers.
          json = undefined
        }
      }

      return {
        ok: status >= 200 && status < 300,
        status,
        headers: fetched.headers,
        data: json,
      }
    }
    catch (err: any) {
      return { ok: false, err }
    }
  }



  _closure?: ClosureEntity

  // Idiomatic facade: `client.closure.list()` / `client.closure.load({ id })`.
  get closure(): ClosureEntity {
    return (this._closure ??= new ClosureEntity(this, undefined))
  }

  /** @deprecated Use `client.closure` instead. */
  Closure(data?: any) {
    const self = this
    return new ClosureEntity(self,data)
  }


  _electric_charging_station?: ElectricChargingStationEntity

  // Idiomatic facade: `client.electric_charging_station.list()` / `client.electric_charging_station.load({ id })`.
  get electric_charging_station(): ElectricChargingStationEntity {
    return (this._electric_charging_station ??= new ElectricChargingStationEntity(this, undefined))
  }

  /** @deprecated Use `client.electric_charging_station` instead. */
  ElectricChargingStation(data?: any) {
    const self = this
    return new ElectricChargingStationEntity(self,data)
  }


  _list_autobahnen?: ListAutobahnenEntity

  // Idiomatic facade: `client.list_autobahnen.list()` / `client.list_autobahnen.load({ id })`.
  get list_autobahnen(): ListAutobahnenEntity {
    return (this._list_autobahnen ??= new ListAutobahnenEntity(this, undefined))
  }

  /** @deprecated Use `client.list_autobahnen` instead. */
  ListAutobahnen(data?: any) {
    const self = this
    return new ListAutobahnenEntity(self,data)
  }


  _parking_lorry?: ParkingLorryEntity

  // Idiomatic facade: `client.parking_lorry.list()` / `client.parking_lorry.load({ id })`.
  get parking_lorry(): ParkingLorryEntity {
    return (this._parking_lorry ??= new ParkingLorryEntity(this, undefined))
  }

  /** @deprecated Use `client.parking_lorry` instead. */
  ParkingLorry(data?: any) {
    const self = this
    return new ParkingLorryEntity(self,data)
  }


  _roadwork?: RoadworkEntity

  // Idiomatic facade: `client.roadwork.list()` / `client.roadwork.load({ id })`.
  get roadwork(): RoadworkEntity {
    return (this._roadwork ??= new RoadworkEntity(this, undefined))
  }

  /** @deprecated Use `client.roadwork` instead. */
  Roadwork(data?: any) {
    const self = this
    return new RoadworkEntity(self,data)
  }


  _warning?: WarningEntity

  // Idiomatic facade: `client.warning.list()` / `client.warning.load({ id })`.
  get warning(): WarningEntity {
    return (this._warning ??= new WarningEntity(this, undefined))
  }

  /** @deprecated Use `client.warning` instead. */
  Warning(data?: any) {
    const self = this
    return new WarningEntity(self,data)
  }


  _webcam?: WebcamEntity

  // Idiomatic facade: `client.webcam.list()` / `client.webcam.load({ id })`.
  get webcam(): WebcamEntity {
    return (this._webcam ??= new WebcamEntity(this, undefined))
  }

  /** @deprecated Use `client.webcam` instead. */
  Webcam(data?: any) {
    const self = this
    return new WebcamEntity(self,data)
  }




  static test(testoptsarg?: any, sdkoptsarg?: any) {
    const struct = stdutil.struct
    const setpath = struct.setpath
    const getdef = struct.getdef
    const clone = struct.clone
    const setprop = struct.setprop

    const sdkopts = getdef(clone(sdkoptsarg), {})
    const testopts = getdef(clone(testoptsarg), {})
    setprop(testopts, 'active', true)
    setpath(sdkopts, 'feature.test', testopts)

    const testsdk = new AutobahnApiDeSDK(sdkopts)
    testsdk._mode = 'test'

    return testsdk
  }


  tester(testopts?: any, sdkopts?: any) {
    return AutobahnApiDeSDK.test(testopts, sdkopts)
  }


  toJSON() {
    return { name: 'AutobahnApiDe' }
  }

  toString() {
    return 'AutobahnApiDe ' + this._utility.struct.jsonify(this.toJSON())
  }

  [inspect.custom]() {
    return this.toString()
  }

}




const SDK = AutobahnApiDeSDK


export {
  stdutil,

  BaseFeature,
  AutobahnApiDeEntityBase,

  AutobahnApiDeSDK,
  SDK,
}


