const mongoose = require('mongoose')
const {isEmail}  = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const userSchema = mongoose.Schema(
    {
        username: {
            type: String,
            required:true,
            minLength:3,
            lowercase: true,
            trim:true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            unique: true,
            validate: [isEmail, "Invalid email"]
        },
        password: {
            type: String,
            required: true,
            minLength: 6
        }
    },{ timestamps: true }
)

userSchema.pre("save" , async function(next) {
    if(!this.isModified("password")) return next();    
    this.password = await bcrypt.hash(this.password , 10)
    next()
})


userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password , this.password)
}

userSchema.methods.generateAccessToken = function() {
    return jwt.sign({
        _id: this._id,
        email: this.email,
        username: this.username
    } , process.env.JWT_SECRET , {expiresIn: '30d'})
}

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign({
        _id: this._id
    } , process.env.REFRESH_TOKEN_SECRET , {expiresIn: "30d"})
}

const User = mongoose.model("User" , userSchema)
module.exports = User