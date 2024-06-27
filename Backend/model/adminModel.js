const mongoose = require('mongoose')

const adminSchema = new mongoose.Schema({
    email: String,
    password: String,
    userType: {
        type: String,
        require: true,
    },
});

const adminModel = mongoose.model('admin', adminSchema)

module.exports = adminModel