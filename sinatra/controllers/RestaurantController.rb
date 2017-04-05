class RestaurantController < ApplicationController
  get '/json' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    Restaurant.all.to_json
  end

  post '/' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    puts params
    @this_restaurant = Restaurant.new
    
    @this_restaurant.name = params[:name]
    @this_restaurant.truck = params[:truck]
    @this_restaurant.menu = params[:menu]

    @this_restaurant.save


    @this_restaurant = Restaurant.all 
    @this_restaurant.to_json
  end

  patch '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    id = params[:id]
    content_type :json
    Restaurant.find_by(id: id)

    @this_restaurant.name = params[:name]
    @this_restaurant.truck = params[:truck]
    @this_restaurant.menu = params[:menu]

    @this_restaurant.save

    Restaurant.all.to_json
  end
end
