/*SQL query for database and menu tables */

DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE IF NOT EXISTS restaurant;
USE restaurant;

/*
CREATE TABLE IF NOT EXISTS mains(
    food VARCHAR(200) PRIMARY KEY,
    price DECIMAL(4,2),
    image VARCHAR(300),
    menu_id INT(2)
    food_id INT(2)
);

CREATE TABLE IF NOT EXISTS drinks(
    drink VARCHAR(100) PRIMARY KEY,
    price DECIMAL(4,2),
    image VARCHAR(300),
    menu_id INT(2),
    food_id INT(2)
);

CREATE TABLE IF NOT EXISTS desserts(
    dessert VARCHAR(100) PRIMARY KEY,
    price DECIMAL(4,2),
    image VARCHAR(300),
    menu_id INT(2),
    food_id INT(2)
);
*/

CREATE TABLE IF NOT EXISTS Products(
    category VARCHAR(200),
    product VARCHAR(200) PRIMARY KEY,
    price DECIMAL(4,2),
    image VARCHAR(300),
    menu_id INT(2)
); 

INSERT INTO Products (
    category,
    product,
    price,
    image,
    menu_id
)
VALUES
(
    'main',
    'Avo on toast',
    8.50 ,
    'https://images.pexels.com/photos/1147687/pexels-photo-1147687.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    1 
),
(
    'main',
    'Pesto pasta with pine nuts and mozzarella',
    9.50 ,
    'https://images.pexels.com/photos/750941/pexels-photo-750941.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    1
),
(
    'main',
    'Roasted pork belly with kimchi and soy sauce glaze',
    11.00 ,
    'https://images.pexels.com/photos/1815898/pexels-photo-1815898.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    1
),
(
    'main',
    'Mac and cheese with crunchy seitan',
    10.00 ,
    'https://images.pexels.com/photos/921361/pexels-photo-921361.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    1
),
(
    'drink',
    'Gin and Tonic',
    9.50 ,
    'https://www.acouplecooks.com/wp-content/uploads/2020/03/Gin-and-Tonic-007-735x1103.jpg',
    2
),
(
    'drink',
    'White Russian',
    9.20 ,
    'https://www.acouplecooks.com/wp-content/uploads/2020/03/Southside-Cocktail-001-735x919.jpg',
    2
),
(
    'drink',
    'Mojito',
    8.00 ,
    'https://www.acouplecooks.com/wp-content/uploads/2019/12/Mojito-007-735x919.jpg',
    2
),
(
    'drink',
    'Old Fashioned',
    9.00 ,
    'https://www.acouplecooks.com/wp-content/uploads/2020/04/Old-Fashioned-Cocktail-014-735x919.jpg',
    2
),
(
    'dessert',
    'Fruit Pie',
    6.50 ,
    'https://images.unsplash.com/photo-1476887334197-56adbf254e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80%20634w,%20',
    3
),
(
    'dessert',
    'Ice Cream with Straberries',
    7.20 ,
    'https://images.unsplash.com/photo-1543255006-d6395b6f1171?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80%20675w,%20',
    3
),
(
    'dessert',
    'Oreo Surprise',
    6.50 ,
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80%20564w,%20',
    3
);



/* Inserting data on table MAINS */
/*
INSERT INTO mains (
    food,
    price,
    image,
    menu_id,
    food_id
)
VALUES 
(
'Avo on toast',
8.50 ,
'https://images.pexels.com/photos/1147687/pexels-photo-1147687.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
1 ,
1
),
(
'Pesto pasta with pine nuts and mozzarella',
9.50 ,
'https://images.pexels.com/photos/750941/pexels-photo-750941.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
1 ,
1   
),
(
'Roasted pork belly with kimchi and soy sauce glaze',
11.00 ,
'https://images.pexels.com/photos/1815898/pexels-photo-1815898.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
1 ,
1    
),
(
'Mac and cheese with crunchy seitan',
10.00 ,
'https://images.pexels.com/photos/921361/pexels-photo-921361.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
1 ,
1
)
*/

/* Inserting data on table DRINKS */
/*
INSERT INTO drinks (
    drink,
    price,
    image,
    menu_id,
    food_id
)
VALUES 
(
'Gin and Tonic',
9.50 ,
'https://www.acouplecooks.com/wp-content/uploads/2020/03/Gin-and-Tonic-007-735x1103.jpg',
1,
2
),
(
'White Russian',
9.20 ,
'https://www.acouplecooks.com/wp-content/uploads/2020/03/Southside-Cocktail-001-735x919.jpg',
1,
2   
),
(
'Mojito',
8.00 ,
'https://www.acouplecooks.com/wp-content/uploads/2019/12/Mojito-007-735x919.jpg',
1,
2    
),
(
'Old Fashioned',
9.00 ,
'https://www.acouplecooks.com/wp-content/uploads/2020/04/Old-Fashioned-Cocktail-014-735x919.jpg',
1,
2
)
*/

/* Inserting data on table DESSERTS */
/*
INSERT INTO desserts (
    dessert,
    price,
    image,
    menu_id,
    food_id
)
VALUES 
(
'Fruit Pie',
6.50 ,
'https://images.unsplash.com/photo-1476887334197-56adbf254e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80%20634w,%20',
1,
3
),
(
'Ice Cream with Straberries',
7.20 ,
'https://images.unsplash.com/photo-1543255006-d6395b6f1171?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80%20675w,%20',
1,
3   
),
(
'Oreo Surprise',
6.50 ,
'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80%20564w,%20',
1,
3    
)
*/
