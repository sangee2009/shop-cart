var mongoose = require('mongoose');
var contactSchema = mongoose.Schema;
var schema = new contactSchema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    message:{type:String,required:true},
    human:{type:Number,required:true}
    
});
module.exports = mongoose.model('contact', schema);

