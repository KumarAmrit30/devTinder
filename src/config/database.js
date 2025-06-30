const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose.connect(
    "mongodb+srv://iamritkumar30:8D5MOcG0ybWv7sWv@cluster0.ysznx1t.mongodb.net/"
  );
};

connectDB
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);    
  });
