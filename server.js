const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Server running");
});

app.get("/api/message", (req, res) => {
  res.json({ msg: "Hello from backend API" });
});

app.listen(3000, () => console.log("Server started"));