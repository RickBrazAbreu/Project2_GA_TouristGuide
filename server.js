require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')

const app = require('liquid-express-views')(express())

app.use(morgan('tiny'))
app.use(methodOverride('_method'))

app.use(express.urlencoded({extended: false}))

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('your server is running, better go catch it')

})

const PORT = process.env.PORT
app.listen(PORT, () =>{
    console.log(`app is listening on port: ${PORT}`)
})