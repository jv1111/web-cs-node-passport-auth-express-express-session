const express = require('express');
require('dotenv').config();//load .env variables
const app = express();

// start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})