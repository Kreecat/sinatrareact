-- psql -a -f migrations.sql

CREATE DATABASE eatit;

\c eatit;

CREATE TABLE users (id SERIAL PRIMARY KEY, username VARCHAR(255), password_digest VARCHAR(255));

CREATE TABLE restaurants (id SERIAL PRIMARY KEY, name VARCHAR(255), truck BOOLEAN, menu VARCHAR(255));

CREATE TABLE reviews (id SERIAL PRIMARY KEY, comments VARCHAR(8000), user_id INT references users(id), restaurant_id INT references restaurants(id));
