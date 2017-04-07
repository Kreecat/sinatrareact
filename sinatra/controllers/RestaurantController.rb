class RestaurantController < ApplicationController
  get '/json' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    Restaurant.all.to_json
  end

  get '/:id/reviews' do 
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    @this_restaurant = Restaurant.find(id)
    @reviews = @this_restaurant.reviews
    @restaurant_with_reviews = {restaurant: @restaurant, review: @reviews}
    @restaurant_with_reviews.to_json
    @this_restaurant.name = params[:name]
    @this_restaurant.truck = params[:truck]
    @this_restaurant.menu = params[:menu]
    @reviews = params[:review]
    
  end

  post ':id/reviews' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    @this_review = Review.new

    @this_review.review = params[:review]
    @this_review.save
    @this_review = Review.all
    @this_review.to_json

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
    content_type :json
    id = params[:id]
   
    @this_restaurant = Restaurant.find(id)

    @this_restaurant.name = params[:name]
    @this_restaurant.truck = params[:truck]
    @this_restaurant.menu = params[:menu]

    @this_restaurant.save
    @this_restaurant = Restaurant.all 
    @this_restaurant.to_json
   
  end

  delete '/:id' do
    response['Access-Control-Allow-Origin'] = '*'
    content_type :json
    id = params[:id]
    @this_restaurant = Restaurant.find(id)
    @this_restaurant.destroy
    @this_restaurants = Restaurant.all 
    @this_restaurants.to_json
  end

end
