/*SQL query for database and menu tables */

DROP DATABASE IF EXISTS restaurant;
CREATE DATABASE IF NOT EXISTS restaurant;
USE restaurant;


CREATE TABLE IF NOT EXISTS products (
    _id INT(3) PRIMARY KEY,
    category VARCHAR(200),
    product VARCHAR(200) ,
    price DECIMAL(4,2),
    image VARCHAR(300),
    menu_id INT(2),
    description VARCHAR (500)
); 


INSERT INTO products (
    _id,
    category,
    product,
    price,
    image,
    menu_id,
    description
)
VALUES
(
    1,
    'main',
    'Avo on toast',
    8.50 ,
    'https://images.pexels.com/photos/1147687/pexels-photo-1147687.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    1,
    'Lorem fistrum te va a hasé pupitaa papaar papaar te voy a borrar el cerito. Ahorarr apetecan ese pedazo de a peich apetecan me cago en tus muelas por la gloria de mi madre. Pecador a wan benemeritaar a wan. La caidita condemor la caidita tiene musho peligro apetecan no te digo trigo por no llamarte Rodrigor pupita diodeno condemor sexuarl. Llevame al sircoo a wan papaar papaar me cago en tus muelas ahorarr amatomaa te voy a borrar el cerito condemor llevame al sircoo.' 
),
(
    2,
    'main',
    'Pesto pasta with pine nuts and mozzarella',
    9.50 ,
    'https://images.pexels.com/photos/750941/pexels-photo-750941.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
    1,
    'Lorem fistrum jarl mamaar te voy a borrar el cerito qué dise usteer papaar papaar a wan apetecan jarl a gramenawer. Jarl ese pedazo de sexuarl pupita a peich diodeno te va a hasé pupitaa la caidita no puedor. Apetecan va usté muy cargadoo fistro caballo blanco caballo negroorl. Diodenoo papaar papaar caballo blanco caballo negroorl diodenoo no puedor está la cosa muy malar te voy a borrar el cerito sexuarl. Va usté muy cargadoo ese que llega diodenoo ahorarr.'
),
(
    3,
    'main',
    'Roasted pork belly with kimchi and soy sauce glaze',
    11.00 ,
    'https://images.pexels.com/photos/1815898/pexels-photo-1815898.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    1,
    'Lorem fistrum te va a hasé pupitaa papaar papaar te voy a borrar el cerito. Ahorarr apetecan ese pedazo de a peich apetecan me cago en tus muelas por la gloria de mi madre. Pecador a wan benemeritaar a wan. La caidita condemor la caidita tiene musho peligro apetecan no te digo trigo por no llamarte Rodrigor pupita diodeno condemor sexuarl. Llevame al sircoo a wan papaar papaar me cago en tus muelas ahorarr amatomaa te voy a borrar el cerito condemor llevame al sircoo.'
),
(
    4,
    'main',
    'Mac and cheese with crunchy seitan',
    10.00 ,
    'https://images.pexels.com/photos/921361/pexels-photo-921361.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    1,
    'Lorem fistrum jarl mamaar te voy a borrar el cerito qué dise usteer papaar papaar a wan apetecan jarl a gramenawer. Jarl ese pedazo de sexuarl pupita a peich diodeno te va a hasé pupitaa la caidita no puedor. Apetecan va usté muy cargadoo fistro caballo blanco caballo negroorl. Diodenoo papaar papaar caballo blanco caballo negroorl diodenoo no puedor está la cosa muy malar te voy a borrar el cerito sexuarl. Va usté muy cargadoo ese que llega diodenoo ahorarr.'
),
(
    5,
    'drink',
    'Gin and Tonic',
    9.50 ,
    'https://www.acouplecooks.com/wp-content/uploads/2020/03/Gin-and-Tonic-007-735x1103.jpg',
    2,
    'Lorem fistrum te va a hasé pupitaa papaar papaar te voy a borrar el cerito. Ahorarr apetecan ese pedazo de a peich apetecan me cago en tus muelas por la gloria de mi madre. Pecador a wan benemeritaar a wan. La caidita condemor la caidita tiene musho peligro apetecan no te digo trigo por no llamarte Rodrigor pupita diodeno condemor sexuarl. Llevame al sircoo a wan papaar papaar me cago en tus muelas ahorarr amatomaa te voy a borrar el cerito condemor llevame al sircoo.'
),
(
    6,
    'drink',
    'White Russian',
    9.20 ,
    'https://www.acouplecooks.com/wp-content/uploads/2020/03/Southside-Cocktail-001-735x919.jpg',
    2,
    'Lorem fistrum jarl mamaar te voy a borrar el cerito qué dise usteer papaar papaar a wan apetecan jarl a gramenawer. Jarl ese pedazo de sexuarl pupita a peich diodeno te va a hasé pupitaa la caidita no puedor. Apetecan va usté muy cargadoo fistro caballo blanco caballo negroorl. Diodenoo papaar papaar caballo blanco caballo negroorl diodenoo no puedor está la cosa muy malar te voy a borrar el cerito sexuarl. Va usté muy cargadoo ese que llega diodenoo ahorarr.'
),
(
    7,
    'drink',
    'Mojito',
    8.00 ,
    'https://www.acouplecooks.com/wp-content/uploads/2019/12/Mojito-007-735x919.jpg',
    2,
    'Lorem fistrum jarl mamaar te voy a borrar el cerito qué dise usteer papaar papaar a wan apetecan jarl a gramenawer. Jarl ese pedazo de sexuarl pupita a peich diodeno te va a hasé pupitaa la caidita no puedor. Apetecan va usté muy cargadoo fistro caballo blanco caballo negroorl. Diodenoo papaar papaar caballo blanco caballo negroorl diodenoo no puedor está la cosa muy malar te voy a borrar el cerito sexuarl. Va usté muy cargadoo ese que llega diodenoo ahorarr.'
),
(
    8,
    'drink',
    'Old Fashioned',
    9.00 ,
    'https://www.acouplecooks.com/wp-content/uploads/2020/04/Old-Fashioned-Cocktail-014-735x919.jpg',
    2,
    'Lorem fistrum te va a hasé pupitaa papaar papaar te voy a borrar el cerito. Ahorarr apetecan ese pedazo de a peich apetecan me cago en tus muelas por la gloria de mi madre. Pecador a wan benemeritaar a wan. La caidita condemor la caidita tiene musho peligro apetecan no te digo trigo por no llamarte Rodrigor pupita diodeno condemor sexuarl. Llevame al sircoo a wan papaar papaar me cago en tus muelas ahorarr amatomaa te voy a borrar el cerito condemor llevame al sircoo.'
),
(
    9,
    'dessert',
    'Fruit Pie',
    6.50 ,
    'https://images.unsplash.com/photo-1476887334197-56adbf254e1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80%20634w,%20',
    3,
    'Lorem fistrum jarl mamaar te voy a borrar el cerito qué dise usteer papaar papaar a wan apetecan jarl a gramenawer. Jarl ese pedazo de sexuarl pupita a peich diodeno te va a hasé pupitaa la caidita no puedor. Apetecan va usté muy cargadoo fistro caballo blanco caballo negroorl. Diodenoo papaar papaar caballo blanco caballo negroorl diodenoo no puedor está la cosa muy malar te voy a borrar el cerito sexuarl. Va usté muy cargadoo ese que llega diodenoo ahorarr.'
),
(
    10,
    'dessert',
    'Ice Cream with Straberries',
    7.20 ,
    'https://images.unsplash.com/photo-1543255006-d6395b6f1171?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80%20675w,%20',
    3,
    'Lorem fistrum jarl mamaar te voy a borrar el cerito qué dise usteer papaar papaar a wan apetecan jarl a gramenawer. Jarl ese pedazo de sexuarl pupita a peich diodeno te va a hasé pupitaa la caidita no puedor. Apetecan va usté muy cargadoo fistro caballo blanco caballo negroorl. Diodenoo papaar papaar caballo blanco caballo negroorl diodenoo no puedor está la cosa muy malar te voy a borrar el cerito sexuarl. Va usté muy cargadoo ese que llega diodenoo ahorarr.'
),
(
    11,
    'dessert',
    'Oreo Surprise',
    6.50 ,
    'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80%20564w,%20',
    3,
    'Lorem fistrum te va a hasé pupitaa papaar papaar te voy a borrar el cerito. Ahorarr apetecan ese pedazo de a peich apetecan me cago en tus muelas por la gloria de mi madre. Pecador a wan benemeritaar a wan. La caidita condemor la caidita tiene musho peligro apetecan no te digo trigo por no llamarte Rodrigor pupita diodeno condemor sexuarl. Llevame al sircoo a wan papaar papaar me cago en tus muelas ahorarr amatomaa te voy a borrar el cerito condemor llevame al sircoo.'
);



