  require('dotenv').config()

  const mongoose = require('mongoose')

  const DATABASE_URI  = process.env.DATABASE_URI
  const config = {
    useNewUrlParser : true,
    useUnifiedTopology: true
  }

  //thi is conneting our mongo db to mongooose
  mongoose.connect(DATABASE_URI, config)

  mongoose.connection

  .on('open', () => console.log('Connected to Mongoose'))


  .on('close',() => console.log('Disconnected from Mongoose'))


  .on('error', err => console.error(err))

  module.exports = mongoose