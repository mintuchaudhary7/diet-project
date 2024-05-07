const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = async()=>{
    const uri = process.env.DATABASE_URL
     const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
        await client.connect();
        console.log("Connected to MongoDB cluster successfully!");
        // You can now perform operations on your MongoDB database
    } catch (error) {
        console.error("Error connecting to MongoDB cluster:", error);
    } finally {
        // Close the connection when done
        await client.close();
    }
}
module.exports = dbConnect;


// this function is for connecting the database to backend; 
