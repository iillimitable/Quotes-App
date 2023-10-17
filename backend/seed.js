const mongoose = require("mongoose");
const Quote = require("./models/quote");


mongoose.connect("mongodb://127.0.0.1:27017/QuotesApp-DB")
  .then(() => console.log("QuotesApp-DB connected"))
  .catch((err) => console.log(err));


  dummyData = [
    {
        text:"Be yourself; everyone else is already taken.",
        author:"Oscar Wilde"
    },
    {
        text:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        author:"Marilyn Monroe"
    },
    {
        text:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        author:" Albert Einstein"
    },
    {
        text:"“Listen to the mustn'ts, child. Listen to the don'ts. Listen to the shouldn'ts, the impossibles, the won'ts. Listen to the never haves, then listen close to me... Anything can happen, child. Anything can be.”",
        author:" Shel Silverstein"
    },
    {
        text:"“You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.”",
        author:" John Lennon"
    },
  ]

  async function seedDB(){
    await Quote.deleteMany({})
    await Quote.insertMany(dummyData)
  }

  seedDB()
  .then(()=>console.log("DB seeded"))