const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(__dirname + '/public'))

app.listen(port, function () {
  console.log(`Listening on port ${port}.`);
});