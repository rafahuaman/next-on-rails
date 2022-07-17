if Rails.env.test?
  excluded_routes = ->(env) { env['PATH_INFO'].match(%r{^/api/v1/graphql}) }
  Rails.application.config.middleware.use OliveBranch::Middleware,
                                          inflection: 'camel',
                                          exclude_params: excluded_routes,
                                          exclude_response: excluded_routes
end
