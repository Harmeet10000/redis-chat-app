const mongoose = require('mongoose');
const PATH =
  "mongodb+srv://harmeet:harmeet@cluster0.ih5cssz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

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