CREATE DATABASE adfoodio;

CREATE TABLE foods(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    foodName VARCHAR(200) NOT NULL,
    description TEXT NOT NULL, 
    price FLOAT NOT NULL, 
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP

);

DESCRIBE foods;
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