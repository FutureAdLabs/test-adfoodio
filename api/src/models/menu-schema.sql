/*SQL query for database and menu tables */

DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE IF NOT EXISTS restaurant;
USE restaurant;

CREATE TABLE IF NOT EXISTS mains(
    food VARCHAR(200) PRIMARY KEY,
    price DECIMAL(4,2),
    image VARCHAR(300)
);

CREATE TABLE IF NOT EXISTS drinks(
    drink VARCHAR(100) PRIMARY KEY,
    price DECIMAL(4,2),
    image VARCHAR(300)
);

CREATE TABLE IF NOT EXISTS desserts(
    dessert VARCHAR(100) PRIMARY KEY,
    price DECIMAL(4,2),
    image VARCHAR(300)
);


/* Inserting data on table MAINS */
INSERT INTO mains (
    food,
    price,
    image
)
VALUES 
(
'Avo on toast',
8.50 ,
'https://images.pexels.com/photos/1147687/pexels-photo-1147687.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
),
(
'Pesto pasta with pine nuts and mozzarella',
9.50 ,
'https://images.pexels.com/photos/750941/pexels-photo-750941.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'   
),
(
'Roasted pork belly with kimchi and soy sauce glaze',
11.00 ,
'https://images.pexels.com/photos/1815898/pexels-photo-1815898.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'    
),
(
'Mac and cheese with crunchy seitan',
10.00 ,
'https://images.pexels.com/photos/921361/pexels-photo-921361.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
)


/* Inserting data on table DRINKS */
INSERT INTO drinks (
    drink,
    price,
    image
)
VALUES 
(
'Gin and Tonic',
9.50 ,
'https://www.acouplecooks.com/wp-content/uploads/2020/03/Gin-and-Tonic-007-735x1103.jpg'
),
(
'White Russian',
9.20 ,
'https://www.acouplecooks.com/wp-content/uploads/2020/03/Southside-Cocktail-001-735x919.jpg'   
),
(
'Mojito',
8.00 ,
'https://www.acouplecooks.com/wp-content/uploads/2019/12/Mojito-007-735x919.jpg'    
),
(
'Old Fashioned',
9.00 ,
'https://www.acouplecooks.com/wp-content/uploads/2020/04/Old-Fashioned-Cocktail-014-735x919.jpg'
)

/* Inserting data on table DESSERTS */
INSERT INTO desserts (
    dessert,
    price,
    image
)
VALUES 
(
'Fruit Pie',
6.50 ,
'https://images.unsplash.com/photo-1476887334197-56adbf254e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80%20634w,%20'
),
(
'Ice Cream with Straberries',
7.20 ,
'https://images.unsplash.com/photo-1543255006-d6395b6f1171?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80%20675w,%20'   
),
(
'Oreo Surprise',
6.50 ,
'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80%20564w,%20'    
)
