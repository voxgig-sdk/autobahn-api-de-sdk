# AutobahnApiDe SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

AutobahnApiDeUtility.registrar = ->(u) {
  u.clean = AutobahnApiDeUtilities::Clean
  u.done = AutobahnApiDeUtilities::Done
  u.make_error = AutobahnApiDeUtilities::MakeError
  u.feature_add = AutobahnApiDeUtilities::FeatureAdd
  u.feature_hook = AutobahnApiDeUtilities::FeatureHook
  u.feature_init = AutobahnApiDeUtilities::FeatureInit
  u.fetcher = AutobahnApiDeUtilities::Fetcher
  u.make_fetch_def = AutobahnApiDeUtilities::MakeFetchDef
  u.make_context = AutobahnApiDeUtilities::MakeContext
  u.make_options = AutobahnApiDeUtilities::MakeOptions
  u.make_request = AutobahnApiDeUtilities::MakeRequest
  u.make_response = AutobahnApiDeUtilities::MakeResponse
  u.make_result = AutobahnApiDeUtilities::MakeResult
  u.make_point = AutobahnApiDeUtilities::MakePoint
  u.make_spec = AutobahnApiDeUtilities::MakeSpec
  u.make_url = AutobahnApiDeUtilities::MakeUrl
  u.param = AutobahnApiDeUtilities::Param
  u.prepare_auth = AutobahnApiDeUtilities::PrepareAuth
  u.prepare_body = AutobahnApiDeUtilities::PrepareBody
  u.prepare_headers = AutobahnApiDeUtilities::PrepareHeaders
  u.prepare_method = AutobahnApiDeUtilities::PrepareMethod
  u.prepare_params = AutobahnApiDeUtilities::PrepareParams
  u.prepare_path = AutobahnApiDeUtilities::PreparePath
  u.prepare_query = AutobahnApiDeUtilities::PrepareQuery
  u.result_basic = AutobahnApiDeUtilities::ResultBasic
  u.result_body = AutobahnApiDeUtilities::ResultBody
  u.result_headers = AutobahnApiDeUtilities::ResultHeaders
  u.transform_request = AutobahnApiDeUtilities::TransformRequest
  u.transform_response = AutobahnApiDeUtilities::TransformResponse
}
