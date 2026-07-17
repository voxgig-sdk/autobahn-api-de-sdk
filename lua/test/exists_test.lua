-- AutobahnApiDe SDK exists test

local sdk = require("autobahn-api-de_sdk")

describe("AutobahnApiDeSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
