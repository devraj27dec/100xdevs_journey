require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000;
const connectDB = require('./config/db')
const UserRouter = require('./routes/user.route');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.urlencoded({extended:true}))

app.get('/' , (req ,res) => {
    res.send("Welcome to Paytm Wallet App Backend")
})

app.use('/api/v1',  UserRouter)

connectDB()
app.listen(port , (req , res) => {
    console.log(`App runnig at port : ${port}`)
} )