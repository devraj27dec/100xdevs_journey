const express = require('express')
const app = express()
const port = 3000;

app.get('/' , (req ,res) => {
    res.send("Welcome to Paytm Wallet App Backend")
})

app.listen(port , (req , res) => {
    console.log(`App runnig at port : ${port}`)
} )