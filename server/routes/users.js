const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

const User = require("../models/user.modal");

router.get("/", async (req, res) => {
  const users = await User.find({});
  res.send(users);
});

router.get("/add", async (req, res) => {
  const user = {
    username: "Aman",
    password: await bcrypt.hash("amanlovesansika", 10),
    gender: "M",
  };
  const isUsed = await User.findOne({ username: user.username });
  if (isUsed) return res.send("Username already exists");
  else {
    const savedUser = await User.insertMany([user]);
    res.send(savedUser);
  }
});

module.exports = router;
