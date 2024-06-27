const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    school: String,
    college: String,
    university: String,
    acadmey: String,
    sports_acadmey: String,
})

const productModel = mongoose.model('random', productSchema)


module.exports = productModel