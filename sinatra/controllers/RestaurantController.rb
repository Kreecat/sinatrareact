class RestaurantController < ApplicationController
  get '/json' do
    response['Access-Control-Allow-Origin'] = '*'
    Restaurant.all.to_json
  end

  post '/' do
    @this_restaurant = Restaurant.new

    @this_restaurant = params[:name]
    @this_restaurant = params[:truck]
    @this_restaurant = params[:menu]

    @this_restaurant.save

    Restaurant.all.to_json
  end

  patch '/:id' do
    id = params[:id]

    Restaurant.find_by(id: id)

    @this_restaurant.name = params[:name]
    @this_restaurant.truck = params[:truck]
    @this_restaurant.menu = params[:menu]

    @this_restaurant.save

    Restaurant.all.to_json
  end
end
