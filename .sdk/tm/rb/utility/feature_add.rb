# AutobahnApiDe SDK utility: feature_add
module AutobahnApiDeUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
