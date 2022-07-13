// using an already connected mongoose not a fresh one from node_modules
const mongoose = require('./connection')


// inside of mongoose I want hte keys that are name Schema and model
const {Schema, model } = mongoose

const placesSchema = new Schema({
 name: String,
 address: String,
 free: Boolean,
 like: Number

},{
    timestamps: true
})

const Place = model('Place', placesSchema)

module.exports = Place // here exporting only one place!!!