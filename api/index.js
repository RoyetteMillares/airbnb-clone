const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const User = require("./models/Users.js")

require('dotenv').config()

const app = express();

const bcryptSalt = bcrypt.genSaltSync(10);

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
app.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  try {
     const user = await User.create({
       name,
       email,
       password: bcrypt.hashSync(password, bcryptSalt),
     });
     res.json(user);
  } catch (error) {
    res.status(422).json(error)
  }
});


app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email })
    if (user) {
      const passwordSame = bcrypt.compareSync(password, user.password)
      if (passwordSame) {
        res.json('Password is the Same')
      } else {
         res.status(422).json("Password Not the same");
      }
    }
    else {
       res.json("Not found");
    }
  } catch (error) {
    res.status(422).json(error);
  }
});

// start the server
app.listen(4000)