class HomeController < ApplicationController

  get '/json' do
    response['Access-Control-Allow-Origin'] = '*'
    Restaurant.all.to_json
  end

  get '/' do
    if session[:logged_in]
      @username = session[:username]
      @restaurants = Restaurant.all

      erb :home
    else
      @message = "Please log in."

      erb :login
    end
  end

  get '/login' do
    erb :login
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

      redirect '/home'
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
    else
      user = User.new

      user.username = params["username"]
      user.password = params["password"]
      user.save

      redirect '/home/login'
    end
  end
end
