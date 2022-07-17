//EVERY PAGE YOU WANT TO LOAD NEED TO BE CALLED HERE
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const app = require('liquid-express-views')(express())
const placesRoutes = require('./controller/place_routes')
const userRoutes = require('./controller/user_routes')

app.use(morgan('tiny'))
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: false}))

app.use(express.static('public'))
app.use('/places', placesRoutes) // you called the placesRoutes to run on the localhost:/...places... and this is coming from places_Routes
app.use('/users', userRoutes) // you called the placesRoutes to run on the localhost:/...places... and this is coming from places_Routes




app.get('/', (req, res) => {
    res.send('your server is running, better go catch it')

})

const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log(`app is listening on port: ${PORT}`)
})