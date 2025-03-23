const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const User = require("./models/User");
const app = express();

app.use(cors());
//middleware
app.use(express.json());

mongoose.connect(
  "mongodb+srv://trinhquanglam2k4:ryeLhByzda5nwk4W@cluster0.4qtgf.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
);
app.get("/test", (req, res) => {
  res.json("test ok3333333333");
});

app.post("/register", async (req, res) => {
  const { username, password } = req.body;
  try {
    const userDoc = await User.create({
      username,
      password,
    });
    res.json(userDoc);
  } catch (e) {
    res.status(400).json(e.message);
  }
});
app.listen(4000);
