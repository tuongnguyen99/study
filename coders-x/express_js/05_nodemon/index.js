const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => {
  res.send('noddemon');
});

app.listen(port, () => {
  console.log('Server is running...');
});
