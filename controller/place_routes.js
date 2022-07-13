const express = require('express')
//make router
const router = express.Router()
//edit insert or delete
const Place = require('../models/place')

//GET - index it will show your places
// localhost:3000/places
router.get('/', (req,res) => {
    //mongose to finde all th  places
    Place.find({})
    //retunr places as json
    .then(places => {
        // res.json(fruit)
        res.render('places/index', { places})
    })
    .catch(err => {
        res.json(err)
    })
    
})

//get - show
//localhost:3000/places/:id ..... change with the id being passed in
router.get('/:id', (req, res) => {
    const placeId = req.params.id

    Place.findById(placeId)
    //send back some json
    .then(place => {
        res.json(place)
    })
    .catch(err => {
        res.json(err)
    })
})




//seed route
//insert many items
router.get('/seed', (req,res) => {
    const startPlaces= [
        {name: "Golden Gate",like: 0 ,address:"San Francisco" , free: true},
        {name: "Bay Bridge",like: 0 , address:"San Francisco" , free: true},
        {name: "Pier 39",like: 0 , address:"San Francisco" , free: true},
        {name: "Alcatraz",like: 0 , address:"San Francisco" , free: false},

    ]

    //delete if we have PLACES
    Place.deleteMany({})
    // insertnew Places
    .then( () => {
        Place.create(startPlaces) // here putting info inside the array of startPlaces 
        //return this data as json
        .then(data => {
            res.json(data)
        })
        .catch(console.error)
    })
    
    
    
})

module.exports = router


