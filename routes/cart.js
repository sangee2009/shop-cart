var express = require('express');
var router = express.Router();
var assert = require('assert');
var mongoose = require('mongoose');
var mongo = require('mongodb');
var Cart = require('../models/cart');
/* GET cart listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.get('/', function(req, res, next) {
  //    var successMgs = req.flash('success')[0];
      Cart.find(function(err, docs){
          var cartArray = [];
          var chunkSize = 3;
          for (var i = 0; i < docs.length; i ++) {
            cartArray.push(docs.slice(i, i  + chunkSize));
          }
          res.render('shop/cart', { title: 'Shopping cart', cart: cartArray });
      });
  });

module.exports = router;