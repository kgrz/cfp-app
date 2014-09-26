require "opbeat"

Opbeat.configure do |config|
  config.organization_id = ENV['OPBEAT_ORGID']
  config.app_id          = ENV['OPBEAT_APPID']
  config.secret_token    = ENV['OPBEAT_SECRET']
end
