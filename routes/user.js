const express = require("express");
const router = express.Router();
const User = require("../models/User");

// method: get
//description: find() to read users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({ msg: "List of users:", users });
  } catch (error) {
    res.status(500).send("Impossible to get users");
  }
});
//method : post
//description: create new user through req.body to pass the data
router.post("/", async (req, res) => {
  try {
    const { name, age, phone, email } = req.body;
    if (!name || !email) {
      return res.status(400).send("Name and email are required");
    }
    const user = new User({ name, age, phone, email });
    await user.save();
    res.status(200).send({ msg: "User added succesfully", user });
  } catch (error) {
    res.status(500).send("Impossible to add user");
  }
});
//method : put
//description : findOneAndUpdate() to find user through the ID and update using req.params
router.put("/Id", async (req, res) => {
  try {
    const id = req.params.Id;
    const user = await User.findOneAndUpdate(
      { _id: id },
      { $set: { name, age, phone, email } }
    );
    res.status(200).send(user);
  } catch (error) {
    console.log("Impossible to edit user");
  }
});
//method : delete
//description : findOneAndDelete() to find  and delete user  using req.params to be acquainted the user through his ID
router.delete("/Id", async (req, res) => {
  try {
    const id = req.params.Id;
    const user = await User.findOneAndUpdate({ _id: id });
    res.status(200).send({ msg: "User deleted succesfuly", user });
  } catch (error) {
    console.log("Impossible to delete user");
  }
});

module.exports = router;
