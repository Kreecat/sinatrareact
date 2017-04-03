class ApplicationController < Sinatra::Base
  enable :sessions

  require 'bundler'
  Bundler.require

  ActiveRecord::Base.establish_connection(
    :adapter => 'postgresql',
    :database => 'eatit'
  )

  set :views, File.expand_path('../../views', __FILE__)
  set :session_secret, 'test'
end
