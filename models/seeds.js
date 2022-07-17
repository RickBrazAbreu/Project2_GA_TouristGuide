///////////////////////////////////////
// This file runs on `npm run seed`
///////////////////////////////////////

///////////////////////////////////////
// Import Dependencies
///////////////////////////////////////
const mongoose = require('./connection')
const Place = require('./place')

///////////////////////////////////////
// Seed Code
///////////////////////////////////////
// save my db connection to a variable for easy reference later
const db = mongoose.connection

// this runs the callback function when the db connection is opened from this file
db.on('open', () => {
    // array of starter fruits
    const startplaces = [
        { name: "Golden Gate", address: "San Francisco" , like: 0,free: true},
        { name: "Pier 39", address: "San Francisco" ,like: 0,free: true},
        { name: "Pedro Point", address: "Pacifica" ,like: 5,free: false},
        { name: "Bay Bridge", address: "North Beach" ,like: 2,free: false}
    ]

    // when we seed data, we usually clear out the db first
    Place.remove({})
    // then we create that data
        .then(deletedPlaces => {
            console.log('this is what remove returns', deletedPlaces)

            // now that our delete was successful, we can create our fruits
            Place.create(startplaces)
                .then(data => {
                    console.log('the new places', data)
                    db.close()
                })
                .catch(error => {
                    console.log('error:', error)
                    db.close()
                })
        })
        .catch(error => {
            console.log('error:', error)
            db.close()
        })
    // whether it's successful or not, we want to close our db connection
})
























// module.exports = startplaceso