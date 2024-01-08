const mongoose = require("mongoose");

const URI = process.env.MONGODB_URI

// database connection
const connectdb = async() => {
    try {
        await mongoose.connect(URI)
        console.log("connection successful")
    } catch (error) {
        console.log(error)
        console.error("database connection failed")
        process.exit(0)
    }
    // mongoose.connect(process.env.MONGO_URI)
    // .then(() => {
    //     console.log("MongoDb database is connected!");
    // })
    // .catch((error) => {
    //     console.log(error);
    // });
}

module.exports = connectdb