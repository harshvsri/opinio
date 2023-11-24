const express = require("express");
const Message = require("../models/message.model");
const router = express.Router();

router.get("/", async (req, res) => {
  const messages = await Message.find({});
  res.json(messages);
});

router.post("/add", async (req, res) => {
  const { username, text } = req.body;
  const isUser = await Message.findOne({ username: username });
  if (isUser) {
    res.json({ message: "User already exists" });
  } else {
    await Message.insertMany([{ username, text }]);
    res.json({ message: "Message added successfully" });
  }
});

module.exports = router;
