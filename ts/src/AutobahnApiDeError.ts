
import { Context } from './Context'


class AutobahnApiDeError extends Error {

  isAutobahnApiDeError = true

  sdk = 'AutobahnApiDe'

  code: string
  ctx: Context

  constructor(code: string, msg: string, ctx: Context) {
    super(msg)
    this.code = code
    this.ctx = ctx
  }

}

export {
  AutobahnApiDeError
}

