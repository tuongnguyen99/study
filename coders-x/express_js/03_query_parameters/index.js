const express = require('express');
const app = express();
const port = 3000;

app.set('views', './views');
app.set('view engine', 'pug');

var users = [
  {id: 1, name: 'Tuong Nguyen'},
  {id: 2, name: 'Huyen Tran'}
];

app.get('/', (req, res) => {
  res.send('Query parameters');
});

app.get('/users', (req, res) => {
  res.render('users', {
    users: users
  })
});

app.get('/users/search', (req, res) => {
  var name = req.query.name.toLowerCase();
  var result = users.filter((user) => {
    return user.name.toLowerCase().includes(name);
  })
  res.render('users', {
    key: name,
    users: result
  })
});

app.listen(port, () => {
  console.log('App listening at port ${port}');
});
