const mongoose = require('mongoose')
const mongodbUrl = process.env.MONGO_URL

const connectDB = ()=>{
    mongoose.connect(mongodbUrl).then(()=>{
        console.log(`DB connected successfully ${mongoose.connection.host}`)
    }).catch(err=>{
        console.log(`!Oops DB could'nt connected ${err}`)
    })
}

module.exports = connectDB