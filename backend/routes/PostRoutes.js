const express = require("express");
const { PostModel } = require("../models/Postmodel");
const postRoutes = express.Router();

//This is a POST route to adding bulk data of users post
postRoutes.post("/addPostInBulk", async (req, res) => {
  try {
    const addBulkPost = req.body;
    console.log(addBulkPost);
    const bulkPostAdded = await PostModel.insertMany(addBulkPost.data);
    return res
      .status(200)
      .send({ message: "Bulk posts added successfully", bulkPostAdded });
  } catch (error) {
    return res.status(500).send({ message: "Internal Server Error" });
  }
});

postRoutes.get("/verifyUserId/:userId", async (req, res) => {
  try {
    const userId = req.params.userId;

    const isUserPresent = await PostModel.findOne({ userId });

    if (isUserPresent) {
      return res
        .status(200)
        .send({ exists: true, message: "userId already exists in the database" });
    } else {
      return res
        .status(200)
        .send({
          exists: false,
          message: "userId does not exist in the database",
        });
    }
  } catch (error) {

    return res
      .status(500)
      .send({ exists: false, message: "Internal Server Error" });
  }
});

module.exports = { postRoutes };
