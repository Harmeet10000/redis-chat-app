const express = require("express");
const User = require("../modal/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) return res.status(400).send({ msg: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send({ msg: "Invalid credentials" });

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      "harmeet",
      { expiresIn: "1d" }
    );
    return res.status(200).send({
      data: { token },
      msg: "Login successful",
    });
  } catch (error) {
    res.status(400).send({ msg: "An error occurred" });
  }
});

router.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).send("User already exists");
    }
    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);
    const user = new User({ name, email, password });
    await user.save();

    const token = jwt.sign(
      {
        _id: user._id,
        name: user.name,
        email: user.email,
      },
      "harmeet",
      { expiresIn: "1d" }
    );
    return res.status(200).send({
      data: { token },
      msg: "user created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ msg: "An error occurred" });
  }
});
module.exports = router;
