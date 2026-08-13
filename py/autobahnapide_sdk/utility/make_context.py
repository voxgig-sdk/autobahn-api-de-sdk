# AutobahnApiDe SDK utility: make_context

from autobahnapide_sdk.core.context import AutobahnApiDeContext


def make_context_util(ctxmap, basectx):
    return AutobahnApiDeContext(ctxmap, basectx)
