var express = require('express');
var path = require('path');
var app = express();
// @ts-ignore
var router = express.Router();
const port = process.env.PORT || 3000
var bodyParser = require('body-parser');
var expressHbs = require('express-handlebars');
require('dotenv').config();
var mongoose = require('mongoose');
var index = require('./routes/index');
//var cartRouter = require('./routes/cart');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGO_CONNECT_URI, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
}).catch(err => console.log(err));
// view engine setup
app.engine('.hbs', expressHbs({defaultLayout: 'layout', extname: '.hbs'}));
app.set('view engine', '.hbs');
app.use('/', index);
//app.use('/cart', cartRouter);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/img',express.static(path.join(__dirname, 'public/img')));
app.use('/js',express.static(path.join(__dirname, 'public/javascripts')));
app.use('/css',express.static(path.join(__dirname, 'public/stylesheets')));
app.use(express.static(__dirname + '/home.html'));
//app.set('views', __dirname + '/views');
//app.set('view engine', 'hbs'); //extension of views
app.listen({ port: port }, () => {
    console.log(`Server running at http://localhost:${port}`);
});

router.use(function (req,res,next) {
    console.log("/" + req.method);
    next();
  });

  var contactModel = require('./models/contact');
  var cartModel = require('./models/cart');

//saving the cart information
  app.post("/cart", (req, res) => {
    console.log(req.body);
    var myData = new cartModel(req.body);
    console.log(req.body);
    myData.save()
    .then(item => {
    res.send("item saved to database");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });

//saving the contact information
   app.post("/contactus",(req, res) => {
     console.log(req.body);
    var myData = new contactModel(req.body);
    console.log(req.body);
    myData.save()
    .then(item => {
    //res.send("item saved into database");
    res.redirect("/contactus");
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
   });
//render contactus page
   app.get("/contactus", function(req, res) {
    res.render('./contactus');
   });
   //render home page
   app.get('/home', function(req, res) {
    res.render('./home');
  });
//render shopping cart page
  app.get('/cart', function(req, res) {
    res.render('shop/cart');
  });
module.exports = app;