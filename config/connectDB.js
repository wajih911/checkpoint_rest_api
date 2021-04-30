const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });

const connectDB = async () => {
  // connectDB is a function using to connect database to the server
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      // connect is method of mongoose  and process and process.env to access to the database
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database is connected");
  } catch (error) {
    console.log("Database is not connected");
  }
};
module.exports = connectDB;
