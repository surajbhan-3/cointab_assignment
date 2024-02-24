const express = require("express")
const {connection }= require("./config/db")
const cors = require("cors")
require("dotenv").config()
const {userRoutes}= require("./routes/UserRoutes")
const {postRoutes} = require("./routes/PostRoutes")

const app = express()
app.use(cors())
app.use(express.json())

app.get("/", (req,res)=>{

     res.send("Welcome to backend")
})

app.use("/api/user" , userRoutes)
app.use("/api/post", postRoutes)



app.listen(process.env.PORT, async()=>{

    try {
        await connection 
        console.log("Database connected")
    } catch (error) {
        console.log(error)
        
    }
    console.log("Server is running at port 4500")

})