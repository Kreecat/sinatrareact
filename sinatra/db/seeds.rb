require 'active_record'
require './models/RestaurantModel'
require './models/ReviewModel'
require './models/UserModel'

db = URI.parse(ENV['DATABASE_URL'])

  DB_NAME = db.path[1..-1]

  ActiveRecord::Base.establish_connection(
    :adapter  => db.scheme == 'postgres' ? 'postgresql' : db.scheme,
    :host     => db.host,
    :port     => db.port,
    :username => db.user,
    :password => db.password,
    :database => DB_NAME,
    :encoding => 'utf8'
  )

@user = User.new
@user.username = "admin"
@user.password = "admin"
@user.save

@restaurant1 = Restaurant.new
@restaurant1.name = "Bohemian House"
@restaurant1.truck = false
@restaurant1.menu = "http://www.bohochicago.com/"
@restaurant1.save

@restaurant2 = Restaurant.new
@restaurant2.name = "Bennys Chop House"
@restaurant2.truck = false
@restaurant2.menu = "http://www.bennyschophouse.com/"
@restaurant2.save

@restaurant3 = Restaurant.new
@restaurant3.name = "Rock Bottom"
@restaurant3.truck = false
@restaurant3.menu = "http://www.rockbottom.com/locations/chicago"
@restaurant3.save

@restaurant4 = Restaurant.new
@restaurant4.name = "Ramen-San"
@restaurant4.truck = false
@restaurant4.menu = "http://ramensan.com/"
@restaurant4.save

@restaurant5 = Restaurant.new
@restaurant5.name = "Hubbard Inn"
@restaurant5.truck = false
@restaurant5.menu = "http://www.hubbardinn.com/"
@restaurant5.save

@restaurant6 = Restaurant.new
@restaurant6.name = "Roka Akor"
@restaurant6.truck = false
@restaurant6.menu = "http://www.rokaakor.com/chicago/location-hours/"
@restaurant6.save

@restaurant7 = Restaurant.new
@restaurant7.name = "Da Lobsta"
@restaurant7.truck = true
@restaurant7.menu = "http://www.dalobsta.com/"
@restaurant7.save

@restaurant8 = Restaurant.new
@restaurant8.name = "Havana Grill"
@restaurant8.truck = false
@restaurant8.menu = "http://havanachicago.com/"
@restaurant8.save

@restaurant9 = Restaurant.new
@restaurant9.name = "India House"
@restaurant9.truck = false
@restaurant9.menu = "http://indiahousechicago.com/"
@restaurant9.save

@restaurant10 = Restaurant.new
@restaurant10.name = "Cantina Laredo"
@restaurant10.truck = false
@restaurant10.menu = "https://www.cantinalaredo.com/location/chicago-illinois/"
@restaurant10.save

@review = Review.new
@review.comments = "Bohemian House was wonderful. Great food. Perfect for a date night!"
@review.user_id = 1
@review.restaurant_id = 1
@review.save
