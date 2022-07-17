///////////////////////////////////////
// Import dependencies
///////////////////////////////////////
const express = require('express')
const User = require('../models/user')
// bcrypt is used to hash(read: encrypt) passwords
const bcrypt = require('bcryptjs')

///////////////////////////////////////
// Create a router
///////////////////////////////////////
const router = express.Router()

///////////////////////////////////////
// list out our routes
///////////////////////////////////////
// two sign up routes
// one GET to show the form
router.get('/signup', (req, res) => {
    res.render('users/signup')
})
// one POST to make the db request
router.post('/signup', async (req, res) => {
    console.log('this is our initial request body', req.body)
    // first, we need to encrypt our password
    // that's why we made this an async function
    // because the password hashing takes a little time, we want to wait until it's done before things progress
    // we need to wait for bcrypt to run its 'salt rounds' before continuing
    // salt rounds are like saying "encrypt this x amount of times before settling on one encryption"
    req.body.password = await bcrypt.hash(
        req.body.password,
        await bcrypt.genSalt(10)
    )

    // now that our password is hashed, we can create a user
    console.log('this is request body after hashing', req.body)
    User.create(req.body)
        // if created successfully, we'll redirect to the login page
        .then(user => {
            console.log('this is the new user', user)
            res.redirect('/users/login')
        })
        // if creation was unsuccessful, send the error
        .catch(error => {
            console.log(error)
            res.json(error)
        })
})

// // two login routes
// // one GET to show the form
// router.get('/login', (req, res) => {
//     res.render('users/login')
// })
// // one POST to login and create the session
// router.post('/login', async (req, res) => {
//     // take a look at our req obj
//     // console.log('this is the request object', req)
//     // destructure data from request body
//     const { username, password } = req.body
//     // console.log('this is username', username)
//     // console.log('this is password', password)
//     console.log('this is the session', req.session)
//     // first we find the user
//     User.findOne({ username })
//         .then(async (user) => { // ._id
//             // we check if the user exists
//             // if they do, we'll compare the passwords and make sure it's correct
//             if (user) {
//                 // compare the pw
//                 // bcrypt.compare evaluates to a truthy or falsy value
//                 const result = await bcrypt.compare(password, user.password)

//                 if (result) {
//                     // if the compare comes back truthy we store user properties in the session
//                     // if the pw is correct, we'll use the newly created session object
//                     req.session.username = username
//                     req.session.loggedIn = true
//                     req.session.userId = user._id
//                     // redirect to the '/fruits' page
//                     console.log('this is the session after login', req.session)
//                     res.redirect('/fruits')
//                 } else {
//                     // otherwise(pw incorrect) send an error message
//                     // for now just send some json error
//                     res.json({ error: 'username or password incorrect' })
//                 }
//             } else {
//                 // send error if user doesn't exist
//                 res.json({ error: 'user does not exist' })
//             }
//         })
//         // if they don't we'll redirect to the sign up page
//         .catch(error => {
//             console.log(error)
//             res.json(error)
//         })
// })

// // logout route
// // can be a GET that calls destroy on our session
// // we can add an 'are you sure' page if there is time
// router.get('/logout', (req, res) => {
//     // destroy the session and redirect to the main page
//     req.session.destroy(ret => {
//         console.log('this is returned from req.session.destroy', ret)
//         console.log('session has been destroyed')
//         console.log(req.session)
//         res.redirect('/fruits')
//     })
// })

///////////////////////////////////////
// export our router
///////////////////////////////////////
module.exports = router