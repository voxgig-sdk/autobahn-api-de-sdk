# AutobahnApiDe SDK utility: make_context
require_relative '../core/context'
module AutobahnApiDeUtilities
  MakeContext = ->(ctxmap, basectx) {
    AutobahnApiDeContext.new(ctxmap, basectx)
  }
end
