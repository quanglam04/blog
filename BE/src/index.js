const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
//middleware
app.use(express.json());
app.get("/test", (req, res) => {
  res.json("test ok3333333333");
});

app.post("/register", (req, res) => {
  const { username, password } = req.body;
  res.json({ requestData: { username, password } });
});
app.listen(4000);
