const express = require("express");
const connectDB = require("./db");
require('dotenv').config();

const app = express();
app.use(express.json());

// Connect to database
connectDB();

app.get("/", (req, res) => {
  res.send("TODO API is running");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});