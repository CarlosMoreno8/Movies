# Peliculitas 👀
Es mi primer backend de una tienda de alquiler de películas que usa:

NodeJS
Express
Sequelize
MySQL2
JWT

Cómo lanzarlo 🚀
Descargar repo.
Ejecutar:
npm start
Tambien puedes acceder al enlace heroku desde aqui https://peliculitas-heroku.herokuapp.com/

Deploy ☁
El proyecto está deployado en Heroku
He usado el add-on de Heroku ClearDB MySQL para tener la base de datos en la nube.

Endpoints 📃



GET /movies/

POST /users/signup/
{
    "name": "ejemplo",
    "email": "ejemplo@gmail.com",
    "password": "1234"
}


POST /users/login/
{
    "email": "ejemplo@gmail.com",
    "password": "1234"
}


POST /users/delete/

{
    "email": "ejemplo@gmail.com",
    "password": "1234"
}


POST /movies/
{
    "title": "Ejemplo",
    "backdrop_path": "asfadsfadf.jpg"
}

GET /movies/title

GET /movies/id

El alquiler de la película será de 2 días

POST /movies
{
    "UsuarioId": 1,
    "PeliculaId": 1
}

Get /movies

{
     "UsersId": 1,
     "MovieId": 1
}
