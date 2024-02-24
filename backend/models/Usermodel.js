const mongoose = require("mongoose")


const userSchema = mongoose.Schema({
    userId:{type:Number ,required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    website: { type: String, required: true },
    city: { type: String, required: true },
    company: { type: String, required: true }
  
})

const UserModel = mongoose.model("user", userSchema)

module.exports = { UserModel }