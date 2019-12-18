var mongoose = require('mongoose');
var cartSchema = mongoose.Schema;
var schema = new cartSchema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    quantity:{type:Number,required:true},
    price: {type: Number, required: true}
});

module.exports = mongoose.model('carts', schema);


