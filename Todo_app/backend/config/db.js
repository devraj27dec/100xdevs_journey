const mongoose = require('mongoose')


const dbConnect = mongoose.connect('mongodb://127.0.0.1:27017/todo_app')
.then(() => {
    console.log("DB Connected Successfully")
}).catch((err) => {
    console.log(`Something error in db ${err}`)
})

module.exports = dbConnect