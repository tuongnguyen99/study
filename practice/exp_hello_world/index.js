const express = require('express');
const app = express();

const port = 8000;
app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.send('Hello world');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/members', (req, res) => {
  res.render('members', {
    members: ['Nguyen', 'Chi', 'Tuong']
  })
});

app.listen(port, () => {
  console.log('app listening');
});
