const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json())
// IMPORTANT: for learning purposes I'm passing the user name and password
// directly as this is only dev environment but remember you must never do
// this in production but rather add them using environment variables
mongoose.connect("mongodb://root:password@mongo", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: "food"
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log(err.message))


// foodItem mongo schema
const FoodItem = mongoose.model("FoodItem", new mongoose.Schema({
  name:{
    type: String,
  },
  date: {
    type: Date,
    default: Date.now
  }
}))

// get food items list
app.get('/api', async (req, res) => {
  const foodItems = await FoodItem.find().sort("-date");
  res.send(foodItems);
})

// add a new food item
app.post('/api', async (req, res) => {
  const foodItem = new FoodItem({
    name: req.body.name
  });

  await foodItem.save();

  res.send({success: true})
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));