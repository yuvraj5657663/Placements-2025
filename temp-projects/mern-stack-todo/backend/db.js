const mongoose = require('mongoose');
require('dotenv').config();

/**
 * Connects to MongoDB using the URI from environment variables
 * @returns {Promise} Mongoose connection promise
 */
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    console.log("Connecting to MongoDB...");
    
    if (!mongoURI) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }
    
    const conn = await mongoose.connect(mongoURI);
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
