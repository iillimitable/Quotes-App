const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require('cors')

mongoose.connect("mongodb://127.0.0.1:27017/QuotesApp-DB")
  .then(() => console.log("QuotesApp-DB connected"))
  .catch((err) => console.log(err));


app.use(express.json())

const quotesRouters = require('./Api/quotesRoutes');

app.use(cors({origin:['http://localhost:3000']}))
app.use(quotesRouters);



app.get("/", (req, res) => {
  res.send("working fine");
});

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => {
  console.log("server is up at port", PORT);
});
