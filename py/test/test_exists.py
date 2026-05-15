# ProjectName SDK exists test

import pytest
from autobahnapide_sdk import AutobahnApiDeSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = AutobahnApiDeSDK.test(None, None)
        assert testsdk is not None
