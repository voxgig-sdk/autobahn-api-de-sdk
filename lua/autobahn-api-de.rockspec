package = "voxgig-sdk-autobahn-api-de"
version = "0.0.1-1"
source = {
  -- git+https (GitHub dropped git:// in 2022); pin the install to the release
  -- tag pushed by `make publish`, and point at the lua/ subdir of the monorepo.
  url = "git+https://github.com/voxgig-sdk/autobahn-api-de-sdk.git",
  tag = "lua/v0.0.1",
  dir = "autobahn-api-de-sdk/lua"
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
