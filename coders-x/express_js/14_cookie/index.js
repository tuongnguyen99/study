const express = require('express');
var cookieParser = require('cookie-parser');
const port = 3000;

const app = express();
app.use(cookieParser())

app.get('/', (req, res, next) => {
  res.cookie('cookie', 'demo-cookie');
  res.send('Hello');
});

app.get('/cookie', (req, res, next) => {
  res.send(req.cookies);
});

app.listen(port, () => {
  console.log('app listening on port '+ port);
});
