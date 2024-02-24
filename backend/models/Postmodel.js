const mongoose = require("mongoose")


const postSchema = mongoose.Schema({
    userId: { type: Number, required: true },
    id: { type: String, required: true },
    title: { type: String, required: true },
    body: { type: String, required: true }
    
})

const PostModel = mongoose.model("post", postSchema)

module.exports = { PostModel }