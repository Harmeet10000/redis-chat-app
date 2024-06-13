const mongoose = require('mongoose');
const PATH = "mongodb://localhost:27017";

const connectDB = async () => {
    try {
        await mongoose.connect(PATH, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectDB;