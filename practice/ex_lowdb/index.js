const express = require('express');
const low = require('lowdb');
var bodyParser = require('body-parser')
var port = 8000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.set('view engine', 'pug');
app.set('views', './views');

// config lowdb
const FileSync = require('lowdb/adapters/FileSync')
const adapter = new FileSync('db.json')
const db = low(adapter)
db.defaults({todo: []}).write();
//

var todos = db.get('todo').value();

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/todo', (req, res) => {
  res.render('todo', {
    todos: todos
  });
});

app.post('/todo/new', (req, res) => {
  db.get('todo').push(req.body).write();
  res.redirect('/todo');
});

app.listen(port, () => {
  console.log('app listening on port '  + port);
});
