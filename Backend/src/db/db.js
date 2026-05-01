const mongoose = require("mongoose")

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGOOSE_URI)
        console.log("Database Connected Sucessfully.");
        
    } catch (error) {
        console.log("Error Connecting to Database",error);
        
    }
}

module.exports = connectDB