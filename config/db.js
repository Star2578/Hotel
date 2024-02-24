const mongoose = require('mongoose');

const connectDB = async () => {
    mongoose.set('strictQuery', true); // only to suppress duprecated warning
    const conn = await mongoose.connect(process.env.MONGO_URL);

    console.log(`MongoDB Connected: ${conn.connection.host}`);
}

module.exports = connectDB;