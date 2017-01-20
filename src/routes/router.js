var express = require('express');
var routeHandlers = require('./routeHandlers');

var router = express.Router();

router.route('/authorize')
          .get(routeHandlers.authorize);

router.route('/receive/:id')
          .get(routeHandlers.receive);

module.exports = router;
