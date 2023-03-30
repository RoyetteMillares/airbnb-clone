const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require('dotenv').config()
const app = express();

app.use(express.json())
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);


mongoose.connect(process.env.MONGODB_URL);

app.get("/test", (req, res) => {
    res.json('test royette');
});

//9sHzvhcJhlAlLclF
app.post("/register", (req, res) => {
    const { name, email, password } = req.body;
  res.json({name, email, password});
});

// start the server
app.listen(4000)