# AutobahnApiDe SDK feature factory

from autobahnapide_sdk.feature.base_feature import AutobahnApiDeBaseFeature
from autobahnapide_sdk.feature.test_feature import AutobahnApiDeTestFeature


def _make_feature(name):
    features = {
        "base": lambda: AutobahnApiDeBaseFeature(),
        "test": lambda: AutobahnApiDeTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
