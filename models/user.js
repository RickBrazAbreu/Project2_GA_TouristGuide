///////////////////////////////////////
// First, import dependencies
///////////////////////////////////////
const mongoose = require('./connection')

///////////////////////////////////////
// define our user model
///////////////////////////////////////
// pull the schema and model constructors from mongoose
// here, we'll use destructuring syntax to accomplish this
const { Schema, model } = mongoose

// make a user schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true // this way cant repeate the same user name
    },
    password: {
        type: String,
        required: true
    }
})

// make a user model with the userSchema
const User = model('User', userSchema)


///////////////////////////////////////
// export our user model
///////////////////////////////////////
module.exports = User