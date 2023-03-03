const mongoose = require('mongoose');
const connectDb = () => {
    const Options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
    mongoose.connect(
        process.env.MONGO_URI,
        Options
    ).then(() => {
        console.log('MongoDb connected!');
    }).catch((err) => {
        console.log(`${err} \n Connection failed`);
    });
}

module.exports = connectDb;