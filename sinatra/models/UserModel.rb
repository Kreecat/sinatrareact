class User < ActiveRecord::Base
  has_secure_password
  has_many :reviews
end

# http://localhost:9393/home/json
