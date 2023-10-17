const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema({
  text: {
    type: String,
    require: true,
    trim: true,
  },
  author: {
    type: String,
    require: true,
    trim: true,
  },
  photo: {
    type: String,
    default:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUepaBdMZtoy5GmiKF_v1vkRbwo3MgxAiIwcaztDaqiYwLdV58jhq19hUX00btfdkBUF8&usqp=CAU",
  },
});

const Quote = mongoose.model("Quote", quoteSchema);
module.exports = Quote;
