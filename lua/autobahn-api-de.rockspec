package = "voxgig-sdk-autobahn-api-de"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/autobahn-api-de-sdk.git"
}
description = {
  summary = "AutobahnApiDe SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["autobahn-api-de_sdk"] = "autobahn-api-de_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
