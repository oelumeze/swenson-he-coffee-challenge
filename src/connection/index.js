import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

export const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL+'/'+process.env.MONGODB_DATABASE_NAME, { useNewUrlParser: true, useUnifiedTopology: true })
    } catch (ex) {
        console.log("error in connetion", ex)
    }

    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
}