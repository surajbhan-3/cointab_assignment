const express = require("express")
const {connection }= require("./config/db")
const cors = require("cors")
require("dotenv").config()
const {userRoutes}= require("./routes/UserRoutes")
const {postRoutes} = require("./routes/PostRoutes")

const corsOptions = {
    origin: ['http://localhost:3000', 'https://cointab-assignment-jet.vercel.app/'], // Allowed origins
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',               // Allowed HTTP methods
    allowedHeaders: 'Content-Type,Authorization',            // Allowed headers in preflight requests
    exposedHeaders: ['Content-Length', 'Authorization'],    // Headers to expose to the browser
    credentials: true,                                       // Allow credentials (e.g., cookies)
    maxAge: 3600,                                            // Cache preflight requests for 1 hour
    preflightContinue: false,                                // Don't continue processing if CORS checks fail
    optionsSuccessStatus: 204,                               // HTTP status code for successful preflight requests
  };


const app = express()
app.use( cors(corsOptions));
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