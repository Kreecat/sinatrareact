class ApplicationController < Sinatra::Base
  enable :sessions

  require 'bundler'
  Bundler.require

	options "*" do
	    response.headers["Access-Control-Allow-Methods"] = "HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS"

	    # Needed for AngularJS
	    response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
	    response['Access-Control-Allow-Origin'] = '*'

	    "cool" 
	end
	
  ActiveRecord::Base.establish_connection(
    :adapter => 'postgresql',
    :database => 'eatit'
  )
  not_found do 
    not_found :erb
  end

  set :public_dir, File.expand_path('../../public', __FILE__)
  set :views, File.expand_path('../../views', __FILE__)
  set :session_secret, 'test'
end
