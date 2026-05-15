# AutobahnApiDe SDK exists test

require "minitest/autorun"
require_relative "../AutobahnApiDe_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = AutobahnApiDeSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
