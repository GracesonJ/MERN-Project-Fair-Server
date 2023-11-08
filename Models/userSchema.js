const mongoose = require('mongoose')
const validator = require('validator')

const userSchema = mongoose.Schema({
    username: {
         type: String, 
         required: [true,"Username is Required"] 
        },
    email: {
        type: String,
        required:[true,"Email is Required"],
        unique: true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    password: { 
        type: String, 
        required: [true, "Password Required"] 
    },
    image:{
        type:  String
    },
    github:{
        type: String
    },
    linkedin:{
        type: String
    }
})

const users = mongoose.model('users',userSchema)

module.exports = users