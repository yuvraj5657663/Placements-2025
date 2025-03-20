require('dotenv').config();
const mongoose = require('mongoose');

console.log('Testing MongoDB connection...');

// Try parsing the connection string into components
const uri = process.env.MONGODB_URI;
console.log('Connection string format check:');
console.log('Contains mongodb+srv://?', uri.includes('mongodb+srv://'));
console.log('Contains @?', uri.includes('@'));

// Attempt to connect with mongoose
mongoose.connect(uri)
  .then(() => {
    console.log('Successfully connected to MongoDB');
    process.exit(0);
  })
  .catch(err => {
    console.error('MongoDB connection error:', err.message);
    
    // Let's see if we can provide more specific error guidance
    if (err.message.includes('bad auth')) {
      console.error('Authentication failed - check username and password');
    } else if (err.message.includes('ENOTFOUND')) {
      console.error('Hostname not found - check cluster name and network connection');
    }
    
    process.exit(1);
  });
