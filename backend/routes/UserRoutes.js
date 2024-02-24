const express = require("express");
const { UserModel } = require("../models/Usermodel");
const userRoutes = express.Router();

userRoutes.get("/userdata", async (req, res) => {
  try {
    const userData = await UserModel.find();

    if (userData.length === 0) {
      return res.status(400).send({ message: "No User Data" });
    }

    // getting user id
    const allUserIDs = userData.map((user) => user.userId);

    return res.status(200).send({ userIDs: allUserIDs });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

userRoutes.post("/addNewUser", async (req, res) => {
  try {
    const { name, email, phone, website, city, company, userId } = req.body;

    const userTobeAdded = new UserModel({
      email,
      name,
      phone,
      website,
      city,
      company,
      userId,
    });
    console.log(userTobeAdded);
    await userTobeAdded.save();
    return res
      .status(200)
      .send({ message: "The user Data is added successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

userRoutes.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const userData = await UserModel.findOne({ userId: id });

    if (!userData) {
      return res.status(200).send({ message: "No User Data" });
    }


    return res.status(200).send({ data: userData });
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

module.exports = { userRoutes };
