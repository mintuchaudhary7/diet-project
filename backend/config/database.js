const mongoose = require('mongoose');
require('dotenv').config();
const { MongoClient } = require('mongodb');
const dbConnect = async()=>{
    
    mongoose.connect(process.env.DATABASE_URL);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to database.');
});
}
module.exports = dbConnect;


// this function is for connecting the database to backend; 
