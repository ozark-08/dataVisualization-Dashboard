const express = require("express");
require("dotenv").config()
const cors = require("cors")

// import from files
const router = require("./routes/index.js")
const connectdb = require("./database/index.js")


//creates a new instance of an Express application
const app = express();



// <------------ middlewares ------------> 

//we'll be sending data in json format, that's why it is required to use this middleware
app.use(express.json());

//we'll be using dynamic routes, in order to read the data from url we have to use this
// app.use(express.urlencoded({ extended: true }));


const corsOptions = {
    origin:"http://localhost:3001",
    methods:"GET,POST,PATCH,PUT,DELETE,HEAD",
    credentials : true,
}
app.use(cors(corsOptions))

// route splitting
app.use("/api/data", router)

// <-----------------------------------------------------------------------> 


// variables
const PORT = process.env.PORT || 3000



//function is used to bind and listen to the connections on the specified host and port
connectdb().then(() =>{
    app.listen(PORT, () => {
        console.log(`Server is active on Port ${PORT}`)
    })
})
