'use strict';

var express = require('express');
var controller = require('./watchHistory.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:userId', controller.show);
router.post('/', controller.create);

module.exports = router;
