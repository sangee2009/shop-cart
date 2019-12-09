var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');
var Product = require('../models/product');
//var Cart = require('../models/cart');
/* GET home page. */
router.get('/', function(req, res, next) {
//    var successMgs = req.flash('success')[0];
    Product.find(function(err, docs){
        var productChunks = [];
        var chunkSize = 3;
        for (var i = 0; i < docs.length; i += chunkSize) {
          productChunks.push(docs.slice(i, i  + chunkSize));
        }
        res.render('shop/index', { title: 'Shopping cart', products: productChunks });
    });
});



module.exports = router;