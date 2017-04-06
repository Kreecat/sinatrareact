class HomeController < ApplicationController

  #   options "*" do
  #   response.headers["Access-Control-Allow-Methods"] = "HEAD,GET,POST,PUT,PATCH,DELETE,OPTIONS"

  #   # Needed for AngularJS
  #   response.headers["Access-Control-Allow-Headers"] = "X-Requested-With, X-HTTP-Method-Override, Content-Type, Cache-Control, Accept"
  #   response['Access-Control-Allow-Origin'] = '*'

  #   "cool"
  # end

  get '/json' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    Restaurant.all.to_json
  end

  get '/' do
    # if session[:logged_in]
    #   @username = session[:username]
    #   @restaurants = Restaurant.all
    #
    #   erb :home
    # else
    #
    #   erb :login
    # end
    erb :landing
  end

  get '/login' do

    if session[:logged_in]
      @username = session[:username]
      @restaurants = Restaurant.all

      erb :home
    else

      erb :login
    end
    # erb :login
  end

  get '/register' do
    erb :register
  end

  get '/logout' do
    session.destroy

    redirect '/home/login'
  end

  post '/login' do
    username = params[:username]
    password = params[:password]

    user = User.find_by(username: username)

    if user && user.authenticate(password)
      session[:logged_in] = true
      session[:username] = username
      session[:user_id] = user.id

      erb :home
    else
      @message = "Login unsuccessful."

      erb :login
    end
  end

  post '/register' do
    username = params[:username]
    password = params[:password]

    user = User.find_by(username: username)

    if user
      @message = "Username is unavailable."

      erb :register
    else
      user = User.new

      user.username = params["username"]
      user.password = params["password"]
      user.save

      redirect '/home/login'
    end
  end
end
