const express = require('express');
const connectDb = require('./db');
const UserRoute = require('./routes/UserRoute');
require('dotenv').config();//load .env variables
const app = express();

// ----------Config----------------
connectDb();
app.use(express.json());
require('./appSession')(app);//express session middleware

// -----------routes----------------
app.use('/user', UserRoute);

// start the server
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
})