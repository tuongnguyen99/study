const express = require('express');
const port = 3000;
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(port, () => {
  console.log('app listening on port ' + port);
});
