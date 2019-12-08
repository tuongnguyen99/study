const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'pug');
app.set('views', './views')

app.get('/', (req, res) => {
  res.send('Template engines');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/hello', (req, res)=>{
  res.render('hello', {
    name: 'Tuong Nguyen'
  });
});

app.get('/members', (req, res) => {
  res.render('members', {
    members: ['Tuong Nguyen', 'Nguyen Tuong', 'Nguyen Chi Tuong']
  });
});

app.listen(port, () => {
  console.log('app listening on port ' + port);
});
