const express = require("express");
const cors = require("cors")
const app = express();


app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5173',
  })
);

  
app.get("/test", function (req, res) {
    res.json('test royette')
});



// start the server
app.listen(4000, () => {
  console.log('Server is running on port 4000');
});