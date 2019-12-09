var express = require('express');
var router = express.Router();
var assert = require('assert');
var mongoose = require('mongoose');
var mongo = require('mongodb');
/* GET cart listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

module.exports = router;