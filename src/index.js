var bodyParser = require('body-parser');
var cors = require('cors')
var express = require('express');
var app = express();

var router = require('./routes/router');

app.use(cors());

app.use('/oauth', router);

app.use(bodyParser.json());

const port = process.env.PORT || 3005;
const ip = process.env.IP || "0.0.0.0";

app.listen(port, ip, () => {
  console.log('App listening on port ' + port);
}); 