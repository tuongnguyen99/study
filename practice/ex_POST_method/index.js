const express = require('express');
var bodyParser = require('body-parser')
const app = express();
const port = 8080;

app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }))

var users = [
  {name: 'Tuong Nguyen'},
  {name: 'Huyen Tran'}
];

app.get('/', (req, res) => {
  res.send('Home page');
});

app.get('/users', (req, res) => {
  res.render('./users/users', {
    users: users
  });
});

app.get('/users/new', (req, res) => {
  res.render('./users/new');
});

app.post('/users/new', (req, res) => {
  var newUser = req.body;
  users.push(newUser);
  res.redirect('/users');
});

app.listen(port, () => {
  console.log('Server is running...');
});
