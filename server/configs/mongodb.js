import mongoose from "mongoose";

// MongoDB connection
const connectDb = async () => {
    mongoose.connection.on('connected', () => {
        console.log('MongoDB connected successfully');
    });
    await mongoose.connect(`${process.env.MONGODB_URI}/lms`);
}

export default connectDb;