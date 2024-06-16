const mongoose = require('mongoose')

const HeroProductSchema = mongoose.Schema({
    name:String,
    price:Number,
    discountPrice:Number,
    productImg:String,
    category:String,
})

module.exports = mongoose.model('HeroProduct', HeroProductSchema)