const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const homeRoute = require('./routes/home.route');
const usersRoute = require('./routes/users.route');
const authRoute = require('./routes/auth.route');
const authMiddleware = require('./middlewares/auth.middleware');
const port = 4000;

const app =  express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', homeRoute);
app.use('/users', authMiddleware.requireLogin, usersRoute);
app.use('/login', authRoute);
app.use(express.static('public'));

app.listen(port, () => {
  console.log('app is listening on port ' + port);
});
