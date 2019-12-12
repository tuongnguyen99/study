const express = require('express');
const usersRoute = require('./routes/users.route');
const port = 8080;

const app = express();

app.set('view engine', 'pug');
app.set('views', './views');
app.get('/', (req, res) => {
  res.render('index');
});
app.use('/users', usersRoute);
app.listen(port, () => {
  console.log('app is listening...');
});
