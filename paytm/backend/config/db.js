const mongoose = require('mongoose')


const connectDB = () => {
    mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("DB connected Successfully🚀 !")
    }).catch((err) => {
        console.log("Error while connecting to DB" , err)
        process.exit(1)
    })
}

module.exports = connectDB