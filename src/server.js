const express = require('express');
const connectDb = require('./db'); 
require('dotenv').config();//load .env variables
const app = express();

connectDb();

// start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})