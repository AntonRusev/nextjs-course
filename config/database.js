import mongoose from 'mongoose';

let connected = false;

const connectDB = async () => {
    // Saving to the db only the spicified fields in the schema 
    mongoose.set('strictQuery', true);

    // If the db is already connected, return
    if (connected) {
        console.log('MongoDB is already connected');
        return;
    };

    // Connecting to the db 
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        connected = true;
        console.log('MongoDB connected');
    } catch (error) {
        console.log(error);
    };
};

export default connectDB;