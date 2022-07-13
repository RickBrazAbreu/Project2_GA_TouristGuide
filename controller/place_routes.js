const express = require('express')
//make router
const router = express.Router()
//edit insert or delete
const Place = require('../models/place')


//seed route
//insert many items
router.get('/seed', (req,res) => {
    const startPlaces= [
        {name: "Golden Gate", address:"San Francisco" , free: true},
        {name: "Bay Bridge", address:"San Francisco" , free: true},
        {name: "Pier 39", address:"San Francisco" , free: true},
        {name: "Alcatraz", address:"San Francisco" , free: false},

    ]

    //delete if we have PLACES
    Place.deleteMany({})
    // insertnew Places
    .then()
    .then()
    .catch()
    
    // return this data as json to view
})

module.exports = router


