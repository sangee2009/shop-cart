var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping');

var products = [new Product({
    imagePath:'\img\idli.jpg',
    title:'Idli',
    description: 'A plate of 2 idlis , chutney and sambar',
    price:10
}),


new Product({
    imagePath:'\img\plain-dosa.jpg',
    title:'Plain Dosa',
    description: 'Plain Dosa!!!!!',
    price:15
}),

new Product({
    imagePath:'\img\masala-dosa.jpg',
    title:'Masala Dosa',
    description: 'Masala Dosa with potato stuffing served with chutney and sambar',
    price:20
}),
new Product({
    imagePath:'https://files2.hungryforever.com/wp-content/uploads/2015/04/Featured-image-masala-dosa-recipe.jpg',
    title:'Medu Vada',
    description: 'South Indian Donut with Urad Dal served with chutney and sambar',
    price:7
}),


new Product({
    imagePath:'http://cdn.edgecast.steamstatic.com/steam/apps/261570/header.jpg?t=1462923075',
    title:'Chicken Curry',
    description: 'Curry chicken is a dish  with coconut base',
    price:25
}),
new Product({
    imagePath:'http://cdn.edgecast.steamstatic.com/steam/apps/261570/header.jpg?t=1462923075',
    title:'Chicken Tikka Masala',
    description: 'Chicken tikka masala is a dish of chunks of roasted marinated chicken in a spiced curry sauce',
    price:30
}),

new Product({
    imagePath:'http://cdn.edgecast.steamstatic.com/steam/apps/261570/header.jpg?t=1462923075',
    title:'Chicken Jalfrezi',
    description: 'Made of meat, fish, paneer or vegetables, stir-fried and served in a thick spicy sauce',
    price:32
})
];
var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if(done == products.length)
            exit();
    });
}
function exit() {
    mongoose.disconnect();
}