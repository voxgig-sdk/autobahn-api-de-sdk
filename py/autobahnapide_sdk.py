# AutobahnApiDe SDK

from utility.voxgig_struct import voxgig_struct as vs
from core.utility_type import AutobahnApiDeUtility
from core.spec import AutobahnApiDeSpec
from core import helpers

# Load utility registration (populates Utility._registrar)
from utility import register

# Load features
from feature.base_feature import AutobahnApiDeBaseFeature
from features import _make_feature


class AutobahnApiDeSDK:

    def __init__(self, options=None):
        self.mode = "live"
        self.features = []
        self.options = None

        utility = AutobahnApiDeUtility()
        self._utility = utility

        from config import make_config
        config = make_config()

        self._rootctx = utility.make_context({
            "client": self,
            "utility": utility,
            "config": config,
            "options": options if options is not None else {},
            "shared": {},
        }, None)

        self.options = utility.make_options(self._rootctx)

        if vs.getpath(self.options, "feature.test.active") is True:
            self.mode = "test"

        self._rootctx.options = self.options

        # Add features from config.
        feature_opts = helpers.to_map(vs.getprop(self.options, "feature"))
        if feature_opts is not None:
            feature_items = vs.items(feature_opts)
            if feature_items is not None:
                for item in feature_items:
                    fname = item[0]
                    fopts = helpers.to_map(item[1])
                    if fopts is not None and fopts.get("active") is True:
                        utility.feature_add(self._rootctx, _make_feature(fname))

        # Add extension features.
        extend = vs.getprop(self.options, "extend")
        if isinstance(extend, list):
            for f in extend:
                if isinstance(f, dict) or (hasattr(f, "get_name") and callable(f.get_name)):
                    utility.feature_add(self._rootctx, f)

        # Initialize features.
        for f in self.features:
            utility.feature_init(self._rootctx, f)

        utility.feature_hook(self._rootctx, "PostConstruct")

        # #BuildFeatures

    def options_map(self):
        out = vs.clone(self.options)
        if isinstance(out, dict):
            return out
        return {}

    def get_utility(self):
        return AutobahnApiDeUtility.copy(self._utility)

    def get_root_ctx(self):
        return self._rootctx

    def prepare(self, fetchargs=None):
        utility = self._utility

        if fetchargs is None:
            fetchargs = {}

        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "prepare",
            "ctrl": ctrl,
        }, self._rootctx)

        options = self.options

        path = vs.getprop(fetchargs, "path") or ""
        if not isinstance(path, str):
            path = ""

        method = vs.getprop(fetchargs, "method") or "GET"
        if not isinstance(method, str):
            method = "GET"

        params = helpers.to_map(vs.getprop(fetchargs, "params"))
        if params is None:
            params = {}
        query = helpers.to_map(vs.getprop(fetchargs, "query"))
        if query is None:
            query = {}

        headers = utility.prepare_headers(ctx)

        base = vs.getprop(options, "base") or ""
        if not isinstance(base, str):
            base = ""
        prefix = vs.getprop(options, "prefix") or ""
        if not isinstance(prefix, str):
            prefix = ""
        suffix = vs.getprop(options, "suffix") or ""
        if not isinstance(suffix, str):
            suffix = ""

        ctx.spec = AutobahnApiDeSpec({
            "base": base,
            "prefix": prefix,
            "suffix": suffix,
            "path": path,
            "method": method,
            "params": params,
            "query": query,
            "headers": headers,
            "body": vs.getprop(fetchargs, "body"),
            "step": "start",
        })

        # Merge user-provided headers.
        uh = vs.getprop(fetchargs, "headers")
        if isinstance(uh, dict):
            for k, v in uh.items():
                ctx.spec.headers[k] = v

        _, err = utility.prepare_auth(ctx)
        if err is not None:
            raise err

        fetchdef, err = utility.make_fetch_def(ctx)
        if err is not None:
            raise err

        return fetchdef

    def direct(self, fetchargs=None):
        utility = self._utility

        try:
            fetchdef = self.prepare(fetchargs)
        except Exception as err:
            # direct() is the raw-HTTP escape hatch: it never raises, it
            # returns a result object callers branch on via result["ok"].
            return {"ok": False, "err": err}

        if fetchargs is None:
            fetchargs = {}
        ctrl = helpers.to_map(vs.getprop(fetchargs, "ctrl"))
        if ctrl is None:
            ctrl = {}

        ctx = utility.make_context({
            "opname": "direct",
            "ctrl": ctrl,
        }, self._rootctx)

        url = fetchdef.get("url", "")
        fetched, fetch_err = utility.fetcher(ctx, url, fetchdef)

        if fetch_err is not None:
            return {"ok": False, "err": fetch_err}

        if fetched is None:
            return {
                "ok": False,
                "err": ctx.make_error("direct_no_response", "response: undefined"),
            }

        if isinstance(fetched, dict):
            status = helpers.to_int(vs.getprop(fetched, "status"))
            headers = vs.getprop(fetched, "headers") or {}

            # No-body responses (204, 304) and explicit zero content-length
            # must skip JSON parsing — calling json() on an empty body raises.
            content_length = None
            if isinstance(headers, dict):
                content_length = headers.get("content-length")
            no_body = status in (204, 304) or str(content_length) == "0"

            json_data = None
            if not no_body:
                jf = vs.getprop(fetched, "json")
                if callable(jf):
                    try:
                        json_data = jf()
                    except Exception:
                        # Non-JSON body (e.g. text/plain, text/html). Surface
                        # status + headers but leave data as None.
                        json_data = None

            return {
                "ok": status >= 200 and status < 300,
                "status": status,
                "headers": headers,
                "data": json_data,
            }

        return {
            "ok": False,
            "err": ctx.make_error("direct_invalid", "invalid response type"),
        }


    @property
    def closure(self):
        """Idiomatic facade: client.closure.list() / client.closure.load({"id": ...})."""
        from entity.closure_entity import ClosureEntity
        cached = getattr(self, "_closure", None)
        if cached is None:
            cached = ClosureEntity(self, None)
            self._closure = cached
        return cached

    def Closure(self, data=None):
        # Deprecated: use client.closure instead.
        from entity.closure_entity import ClosureEntity
        return ClosureEntity(self, data)


    @property
    def electric_charging_station(self):
        """Idiomatic facade: client.electric_charging_station.list() / client.electric_charging_station.load({"id": ...})."""
        from entity.electric_charging_station_entity import ElectricChargingStationEntity
        cached = getattr(self, "_electric_charging_station", None)
        if cached is None:
            cached = ElectricChargingStationEntity(self, None)
            self._electric_charging_station = cached
        return cached

    def ElectricChargingStation(self, data=None):
        # Deprecated: use client.electric_charging_station instead.
        from entity.electric_charging_station_entity import ElectricChargingStationEntity
        return ElectricChargingStationEntity(self, data)


    @property
    def list_autobahnen(self):
        """Idiomatic facade: client.list_autobahnen.list() / client.list_autobahnen.load({"id": ...})."""
        from entity.list_autobahnen_entity import ListAutobahnenEntity
        cached = getattr(self, "_list_autobahnen", None)
        if cached is None:
            cached = ListAutobahnenEntity(self, None)
            self._list_autobahnen = cached
        return cached

    def ListAutobahnen(self, data=None):
        # Deprecated: use client.list_autobahnen instead.
        from entity.list_autobahnen_entity import ListAutobahnenEntity
        return ListAutobahnenEntity(self, data)


    @property
    def parking_lorry(self):
        """Idiomatic facade: client.parking_lorry.list() / client.parking_lorry.load({"id": ...})."""
        from entity.parking_lorry_entity import ParkingLorryEntity
        cached = getattr(self, "_parking_lorry", None)
        if cached is None:
            cached = ParkingLorryEntity(self, None)
            self._parking_lorry = cached
        return cached

    def ParkingLorry(self, data=None):
        # Deprecated: use client.parking_lorry instead.
        from entity.parking_lorry_entity import ParkingLorryEntity
        return ParkingLorryEntity(self, data)


    @property
    def roadwork(self):
        """Idiomatic facade: client.roadwork.list() / client.roadwork.load({"id": ...})."""
        from entity.roadwork_entity import RoadworkEntity
        cached = getattr(self, "_roadwork", None)
        if cached is None:
            cached = RoadworkEntity(self, None)
            self._roadwork = cached
        return cached

    def Roadwork(self, data=None):
        # Deprecated: use client.roadwork instead.
        from entity.roadwork_entity import RoadworkEntity
        return RoadworkEntity(self, data)


    @property
    def warning(self):
        """Idiomatic facade: client.warning.list() / client.warning.load({"id": ...})."""
        from entity.warning_entity import WarningEntity
        cached = getattr(self, "_warning", None)
        if cached is None:
            cached = WarningEntity(self, None)
            self._warning = cached
        return cached

    def Warning(self, data=None):
        # Deprecated: use client.warning instead.
        from entity.warning_entity import WarningEntity
        return WarningEntity(self, data)


    @property
    def webcam(self):
        """Idiomatic facade: client.webcam.list() / client.webcam.load({"id": ...})."""
        from entity.webcam_entity import WebcamEntity
        cached = getattr(self, "_webcam", None)
        if cached is None:
            cached = WebcamEntity(self, None)
            self._webcam = cached
        return cached

    def Webcam(self, data=None):
        # Deprecated: use client.webcam instead.
        from entity.webcam_entity import WebcamEntity
        return WebcamEntity(self, data)



    @classmethod
    def test(cls, testopts=None, sdkopts=None):
        if sdkopts is None:
            sdkopts = {}
        sdkopts = vs.clone(sdkopts)
        if not isinstance(sdkopts, dict):
            sdkopts = {}

        if testopts is None:
            testopts = {}
        testopts = vs.clone(testopts)
        if not isinstance(testopts, dict):
            testopts = {}
        testopts["active"] = True

        vs.setpath(sdkopts, "feature.test", testopts)

        sdk = cls(sdkopts)
        sdk.mode = "test"

        return sdk
