# AutobahnApiDe SDK context

require_relative '../utility/struct/voxgig_struct'
require_relative 'control'
require_relative 'operation'
require_relative 'spec'
require_relative 'result'
require_relative 'response'
require_relative 'error'
require_relative 'helpers'

class AutobahnApiDeContext
  attr_accessor :id, :out, :client, :utility, :ctrl, :meta, :config,
                :entopts, :options, :entity, :shared, :opmap,
                :data, :reqdata, :match, :reqmatch, :point,
                :spec, :result, :response, :op

  def initialize(ctxmap = {}, basectx = nil)
    ctxmap ||= {}
    @id = "C#{rand(10000000..99999999)}"
    @out = {}

    @client = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "client") || basectx&.client
    @utility = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "utility") || basectx&.utility

    @ctrl = AutobahnApiDeControl.new
    ctrl_raw = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "ctrl")
    if ctrl_raw.is_a?(Hash)
      @ctrl.throw_err = ctrl_raw["throw"] if ctrl_raw.key?("throw")
      @ctrl.explain = ctrl_raw["explain"] if ctrl_raw["explain"].is_a?(Hash)
      @ctrl.actor = ctrl_raw["actor"] if ctrl_raw.key?("actor")
      @ctrl.paging = ctrl_raw["paging"] if ctrl_raw["paging"].is_a?(Hash)
    elsif basectx&.ctrl
      @ctrl = basectx.ctrl
    end

    m = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "meta")
    @meta = m.is_a?(Hash) ? m : (basectx&.meta || {})

    cfg = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "config")
    @config = cfg.is_a?(Hash) ? cfg : basectx&.config

    eo = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "entopts")
    @entopts = eo.is_a?(Hash) ? eo : basectx&.entopts

    o = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "options")
    @options = o.is_a?(Hash) ? o : basectx&.options

    e = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "entity")
    @entity = e || basectx&.entity

    s = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "shared")
    @shared = s.is_a?(Hash) ? s : basectx&.shared

    om = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "opmap")
    @opmap = om.is_a?(Hash) ? om : (basectx&.opmap || {})

    @data = AutobahnApiDeHelpers.to_map(AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "data")) || {}
    @reqdata = AutobahnApiDeHelpers.to_map(AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "reqdata")) || {}
    @match = AutobahnApiDeHelpers.to_map(AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "match")) || {}
    @reqmatch = AutobahnApiDeHelpers.to_map(AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "reqmatch")) || {}

    pt = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "point")
    @point = pt.is_a?(Hash) ? pt : basectx&.point

    sp = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "spec")
    @spec = sp.is_a?(AutobahnApiDeSpec) ? sp : basectx&.spec

    r = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "result")
    @result = r.is_a?(AutobahnApiDeResult) ? r : basectx&.result

    rp = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "response")
    @response = rp.is_a?(AutobahnApiDeResponse) ? rp : basectx&.response

    opname = AutobahnApiDeHelpers.get_ctx_prop(ctxmap, "opname") || ""
    @op = resolve_op(opname)
  end

  def resolve_op(opname)
    # Cache key is `<entity>:<opname>` so two entities with the same op
    # (e.g. both have a "list") get distinct cached Operations. Keying
    # on opname alone caused the first-resolved entity's points to be
    # served to every subsequent entity's call.
    entname = @entity&.respond_to?(:get_name) ? @entity.get_name : "_"
    cache_key = "#{entname}:#{opname}"
    return @opmap[cache_key] if @opmap[cache_key]
    return AutobahnApiDeOperation.new({}) if opname.empty?

    opcfg = VoxgigStruct.getpath(@config, "entity.#{entname}.op.#{opname}")

    input = (opname == "update" || opname == "create") ? "data" : "match"

    points = []
    if opcfg.is_a?(Hash)
      t = VoxgigStruct.getprop(opcfg, "points")
      points = t if t.is_a?(Array)
    end

    op = AutobahnApiDeOperation.new({
      "entity" => entname,
      "name" => opname,
      "input" => input,
      "points" => points,
    })
    @opmap[cache_key] = op
    op
  end

  def make_error(code, msg)
    AutobahnApiDeError.new(code, msg, self)
  end
end
