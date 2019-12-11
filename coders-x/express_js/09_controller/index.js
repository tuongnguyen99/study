const express = require('express');
var bodyParser = require('body-parser');

const usersRoute = require('./routes/users.route');
const app = express();



const port = 3000;
app.set('view engine', 'pug');
app.set('views', './views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use('/users', usersRoute);


app.get('/', (req, res) => {
  res.render('index');
});




app.listen(port, () => {
  console.log('server running on port ' + port);
});
