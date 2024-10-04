import mongoose from 'mongoose';

// Function to connect to MongoDB 
const db = async () => {
    try {
        // Connect to MongoDB using Mongoose
        const conn = await mongoose.connect(`${process.env.CONNECTION_STRING}`);

        console.log(`Database connected !! ${conn.connection.host}`);

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        process.exit(1);
    }
};

export default db;
