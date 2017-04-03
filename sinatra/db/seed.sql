-- CREATE DATABASE eatit;
--
-- \c eatit;
--
-- CREATE TABLE users (id SERIAL PRIMARY KEY, username VARCHAR(255), password_digest VARCHAR(255));
--
-- CREATE TABLE restaurants (id SERIAL PRIMARY KEY, name VARCHAR(255), truck BOOLEAN, menu VARCHAR(255));
--
-- CREATE TABLE reviews (id SERIAL PRIMARY KEY, comments VARCHAR(8000), user_id INT references users(id), restaurant_id INT references restaurants(id));


INSERT INTO users (username, password_digest) VALUES ('admin', )

INSERT INTO restaurants (name, truck, menu) VALUES ('The Purple Pig', false, 'thepurplepigchicago.com');


INSERT INTO reviews (comments, user_id, restaurant_id) VALUES ('The Purple Pig was wonderful. Great food. Perfect for a date night!', 1, 1);
