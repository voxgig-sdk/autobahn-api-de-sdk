-- AutobahnApiDe SDK error

local AutobahnApiDeError = {}
AutobahnApiDeError.__index = AutobahnApiDeError


function AutobahnApiDeError.new(code, msg, ctx)
  local self = setmetatable({}, AutobahnApiDeError)
  self.is_sdk_error = true
  self.sdk = "AutobahnApiDe"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function AutobahnApiDeError:error()
  return self.msg
end


function AutobahnApiDeError:__tostring()
  return self.msg
end


return AutobahnApiDeError
