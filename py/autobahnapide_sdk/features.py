# AutobahnApiDe SDK feature factory

from autobahnapide_sdk.feature.base_feature import AutobahnApiDeBaseFeature
from autobahnapide_sdk.feature.ratelimit_feature import AutobahnApiDeRatelimitFeature
from autobahnapide_sdk.feature.retry_feature import AutobahnApiDeRetryFeature
from autobahnapide_sdk.feature.test_feature import AutobahnApiDeTestFeature
from autobahnapide_sdk.feature.timeout_feature import AutobahnApiDeTimeoutFeature


_FEATURES = {
    "base": lambda: AutobahnApiDeBaseFeature(),
    "ratelimit": lambda: AutobahnApiDeRatelimitFeature(),
    "retry": lambda: AutobahnApiDeRetryFeature(),
    "test": lambda: AutobahnApiDeTestFeature(),
    "timeout": lambda: AutobahnApiDeTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
