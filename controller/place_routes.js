const express = require('express')
//make router
const router = express.Router()
//edit insert or delete
const Place = require('../models/place')




//////////////////////////
/////////////////////////
///////////////////////////////////

//DELETE -Delete  ///this is coming from show.liquid
router.delete('/:id', (req,res) =>{
 const placeId = req.params.id

 Place.findByIdAndDelete(placeId)
    .then(place =>{
        res.redirect('/places') // home page
    })
    .catch(err => {
        res.json(err)
    })
})


//////////////////////////
/////////////////////////
///////////////////////////////////

//GET route for displaying an update from
router.get('/:id/edit', (req,res) => {
    const placeId = req.params.id

    Place.findById(placeId)
        .then(place => {
            res.render('places/edit', { place})
        })
        .catch(err =>{
            res.json(err)
        })
})



//PUT - UpDAte

router.put('/:id', (req,res) =>{
    const placeId = req.params.id

    ////// basically here is a boolean ... 
    req.body.free = req.body.free === 'on' //if free is checked...
    ? true : false //turn on or false
    //////

    Place.findByIdAndUpdate(placeId, req.body, { new: true })
    .then( place => {
        res.redirect(`/places/${place._id}`)
    })
    .catch( err => {
        res.json(err)
    }) 
})







//////////////////////////
/////////////////////////
///////////////////////////////////




//CREATE
//GET route for displaying my form for create
router.get('/new', (req, res) => {
    res.render('places/new')
})

//POST -CREATE
router.post('/', (req,res) =>{
    ////// basically here is a boolean ... 
    req.body.free = req.body.free === 'on' //if free is checked...
    ? true : false //turn on or false
    //////


    Place.create(req.body)
        .then(place =>{
            console.log(place)
            //res.json(place) //here just display it as the begin show the item inside the array
            res.redirect('/places') // as soon as you finish to create the new post it reload to the first page
        })
        .catch(err => {
            res.json(err)
        })
})





//////////////////////////
/////////////////////////
///////////////////////////////////



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

//SHOW
//GET - show
//localhost:3000/places/:id ..... change with the id being passed in
router.get('/:id', (req, res) => {
    const placeId = req.params.id

    Place.findById(placeId)
    //send back some json
    .then(place => {
        //res.json(place)
        res.render('places/show', { place})
    })
    .catch(err => {
        res.json(err)
    })
})

//////////////////////////
/////////////////////////
////////////////////////////////////


//seed route
//insert many items
router.get('/seed', (req,res) => {
    const startPlaces= [
        {name: "Golden Gate",like: 2 ,address:"San Francisco" , free: true},
        {name: "Bay Bridge",like: 3 , address:"San Francisco" , free: true},
        {name: "Pier 39",like: 1 , address:"San Francisco" , free: true},
        {name: "Alcatraz",like: 6 , address:"San Francisco" , free: false},

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


