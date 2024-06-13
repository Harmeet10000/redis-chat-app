const express = require("express");
const cors = require("cors");
const app = express();
const userController = require("./controller/user");
const connectDB = require("./config/db");

app.use(cors());
app.use(express.json());   
app.use("/user", userController);




connectDB();

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
