const express = require('express');
const app = express();
const port = 8080;

const usersRoute = require('./routes/users.route');
const db = require('./db');
app.set('view engine', 'pug');
app.set('views', './views');

app.use('/users', usersRoute);

app.listen(port, () => {
  console.log('app is listening...');
});
