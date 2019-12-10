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
  

 /*var cartSchema = mongoose.Schema;
 var schema = new cartSchema({
     title: {type: String, required: true},
     description: {type: String, required: true},
     quantity:{type:String,required:true},
     price: {type: Number, required: true}
 });
 var cartList = mongoose.model('Cart',schema);

 //var Test = mongoose.model('Test', testSchema);

app.get('/', function(req, res){
    cartList.find({},function(err, docs){
                res.send('index');
            });
});*/

app.listen({ port: port }, () => {
    console.log(`Server running at http://localhost:${port}`);
});

module.exports = app;