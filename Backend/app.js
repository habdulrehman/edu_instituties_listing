// const dotenv = require('dotenv')
// dotenv.config()
require('dotenv').config()
const port = process.env.PORT;
const express = require('express')
const connectDB = require('./database/db');
const router = require('./router/product');
const authRouter = require('./router/auth')
const app = express()
const cors = require('cors')


connectDB()

app.use(cors())
app.use(express.json())
app.use('/api/v1', router)
app.use('/api/v1', authRouter)


app.all('*', (req, res)=>{
    res.send(`<h1>Page is not found<p>Seems that page is not available.<a href='/'>Back to Home</a></p></h1>`)
})

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`)
})