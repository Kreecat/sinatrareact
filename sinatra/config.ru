require 'sinatra/base'
require './controllers/ApplicationController'
require './controllers/RestaurantController'
require './controllers/ReviewController'
require './controllers/UserController'

require './models/RestaurantModel'
require './models/ReviewModel'
require './models/UserModel'

map('/') {run ApplicationController}
map('/restaurants') {run RestaurantController}
map('/reviews') {run ReviewController}
map('/home') {run HomeController}
