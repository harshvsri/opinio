const express = require("express");
const Message = require("../models/message.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const messages = await Message.find({});
  res.send(messages);
  // res.render("index");
});

router.get("/add", (req, res) => {
  res.render("add");
});

router.post("/add", async (req, res) => {
  const { username, text } = req.body;
  const isUser = await Message.findOne({ username: username });
  if (isUser) {
    res.send("User already exists");
  } else {
    await Message.insertMany([{ username, text }]);
    res.redirect("/");
  }
});

module.exports = router;
