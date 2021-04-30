const mongoose = require("mongoose");
const Schema = mongoose.Schema; // schema is a method of mongoose

const userSchema = new Schema({
  // userSchema is a instance of schema that mongoose provide
  name: String,
  age: Number,
  phone: { type: Number, unique: true },
  email: { type: String, required: true, unique: true },
});

module.exports = mongoose.model("user", userSchema);
