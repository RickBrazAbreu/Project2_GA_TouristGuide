// requiring dotenv package so we can geet things out of our .env file
require('dotenv').config()
// getting mongoose to use
const mongoose = require('mongoose')


// Fire off the connection to Mongo DB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  
  
  mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${mongoose.connection.host}:${mongoose.connection.port}`);
  });
  
  mongoose.connection.on("error", (err) => {
    console.log("Could not connect to MongoDB!", err);
  });

module.exports = mongoose