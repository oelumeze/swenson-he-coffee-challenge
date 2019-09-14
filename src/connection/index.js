import mongoose from 'mongoose';

export const connectdb = async() => {
    console.log("export default connection")
    
    let mongo_db_url = 'mongodb://localhost:27017/Swenson_Coffee';
   
    mongoose.Promise = global.Promise;;
    try {
        await mongoose.connect(mongo_db_url, { useNewUrlParser: true })
    } catch (ex) {
        console.log("error in connetion", ex)
    } 

    mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));
}