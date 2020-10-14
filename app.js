const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const moviesRouter = require('./routes/movies');
//const ordersRouter = require('./routes/orders');
//const usersRouter = require('./routes/users');

app.use(express.json()); //middleware: parsea el body JSON y evita que req.body sea undefined


app.use('/movies', moviesRouter);
//app.use('/orders', ordersRouter);
//app.use('/users', usersRouter);






app.listen(PORT, () => console.log('server on ' + PORT));