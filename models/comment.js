const { Schema } = require('mongoose')
const mongoose = require('./connection')

const commentSchema = new mongoose.Schema({
    note:  {
        type: String,
        require: true
    },
     author: {
        type: mongoose.Schema.Types.ObjectId, //single User
        ref: 'User' // string value from the model creation
     }
},{
    timestamps: true
})

module.exports = commentSchema