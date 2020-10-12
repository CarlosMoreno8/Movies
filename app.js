const express = require('express');
const app = express();
const PORT = 3000;
const moviesRouter = require('./routes/movies');

app.use(express.json()); //middleware: parsea el body JSON y evita que req.body sea undefined

app.use('/movies', moviesRouter);













app.listen(PORT, () => console.log('server on'));