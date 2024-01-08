require("dotenv").config();
const connectDB = require("./database/index")
const report = require("./models/index")

const reportJson = require("./reports.json")
const start = async() =>{
    try {
        await connectDB(process.env.MONGODB_URI)
        await report.create(reportJson)
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}
start();