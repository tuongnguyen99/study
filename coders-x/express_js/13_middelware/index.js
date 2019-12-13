const express = require('express');
var bodyParser = require('body-parser');
const homeRoute = require('./routes/home.route');
const usersRoute = require('./routes/users.route');
const port = 3030;

const app =  express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set('view engine', 'pug');
app.set('views', './views');

app.use('/', homeRoute);
app.use('/users', usersRoute);
app.use(express.static('public'));

app.listen(port, () => {
  console.log('app is listening on port ' + port);
});
