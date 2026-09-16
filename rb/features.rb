# AutobahnApiDe SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module AutobahnApiDeFeatures
  def self.make_feature(name)
    case name
    when "base"
      AutobahnApiDeBaseFeature.new
    when "ratelimit"
      AutobahnApiDeRatelimitFeature.new
    when "retry"
      AutobahnApiDeRetryFeature.new
    when "test"
      AutobahnApiDeTestFeature.new
    when "timeout"
      AutobahnApiDeTimeoutFeature.new
    else
      AutobahnApiDeBaseFeature.new
    end
  end
end
