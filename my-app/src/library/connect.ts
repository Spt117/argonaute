import mongoose from "mongoose";

const connectMongo = async () =>
    mongoose
        .connect(
            "mongodb+srv://root:root@cluster0.z0af0of.mongodb.net/?retryWrites=true&w=majority"
        )
        .then(() => console.log("Connected to MongoDB"))
        .catch((err) => console.error("Could not connect to MongoDB", err));

export default connectMongo;
