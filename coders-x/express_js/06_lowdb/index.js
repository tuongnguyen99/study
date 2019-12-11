const express = require('express');
const port = 9999;
const low = require('lowdb');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({ users: []})
  .write();


app.set('view engine', 'pug');
app.set('views', './views');

app.get('/',(req,res) => {
  res.send('lowdb');
});

app.get('/users', (req, res) => {
  console.log(db.get('users').value());
  res.render('users', {
    users: db.get('users').value()
  });
});

app.post('/users', (req, res) => {
  console.log(req.body);
  var newUser = req.body;
  db.get('users')
    .push(newUser)
    .write();
  res.redirect('/users');
});
app.listen(port, () => {
  console.log('server is running...');
});
