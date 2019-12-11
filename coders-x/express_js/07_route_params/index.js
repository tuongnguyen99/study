const express = require('express');
const port = 8080;

var users = [
  {id: 0, name: 'Tuong Nguyen', age: 20},
  {id: 2, name: 'Huyen Tran', age: 20}
];


const app = express();

app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/users', (req, res) => {
  res.render('users', {
    users: users
  });
});

app.get('/users/:id', (req, res) => {
  const id = req.params.id;
  user = users.filter((user) => {
    return user.id == id;
  });
  res.render('info', {
    user: user[0]
  });
});

app.listen(port, () => {
  console.log('server is running on port ' + port);
});
