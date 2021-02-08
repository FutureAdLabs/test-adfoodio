CREATE DATABASE adfoodio;

CREATE TABLE foods(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    foodName VARCHAR(200) NOT NULL,
    description TEXT NOT NULL, 
    price FLOAT NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);



CREATE TABLE users(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    email TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)



ALTER TABLE foods
  ADD image_url TEXT NOT NULL




ALTER TABLE foods
  ADD type_of TEXT NOT NULL
DESCRIBE foods;

CREATE TABLE orders(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    desserts TEXT,
    mains TEXT,
    drinks TEXT,
    discount10 TEXT,
    discount40 TEXT,
    timeInit TEXT NOT NULL,
    timeEnd TEXT NOT NULL,
    totalBill FLOAT NOT NULL, 
    totalTime FLOAT NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- CREATE TABLE drinks(
--     id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY;
--     foodName VARCHAR(200) NOT NULL,
--     description TEXT NOT NULL, 
--     price FLOAT NOT NULL,
--     created_at TIMESTAMP DEFAUL CURRENT_TIME


-- )

-- CREATE TABLE desserts(
--     id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY;
--     foodName VARCHAR(200) NOT NULL,
--     description TEXT NOT NULL, 
--     price FLOAT NOT NULL,
--     created_at TIMESTAMP DEFAUL CURRENT_TIME

-- )
DESCRIBE foods;