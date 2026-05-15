# AutobahnApiDe SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module AutobahnApiDeFeatures
  def self.make_feature(name)
    case name
    when "base"
      AutobahnApiDeBaseFeature.new
    when "test"
      AutobahnApiDeTestFeature.new
    else
      AutobahnApiDeBaseFeature.new
    end
  end
end
