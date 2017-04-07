require 'sinatra/base'
require './controllers/ApplicationController'
require './controllers/RestaurantController'
require './controllers/HomeController'

require './models/RestaurantModel'
require './models/ReviewModel'
require './models/UserModel'

map('/') {run ApplicationController}
map('/restaurants') {run RestaurantController}
map('/home') {run HomeController}
