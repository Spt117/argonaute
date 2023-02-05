import mongoose from "mongoose"

function connectMongo() {
    mongoose.set("strictQuery", false)
    if (!process.env.MONGO_URI) {
        throw new Error("MONGO_URI is not defined in the environment variables")
    }
    try {
        mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to MongoDB")
    } catch (err) {
        console.log("Could not connect to MongoDB", err)
    }
}

export default connectMongo
