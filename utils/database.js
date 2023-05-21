import mongoose from "mongoose";


let isConnected = false;

export const connectiToDB = async () => {
    mongoose.set('strictQuery', true);

    if(isConnected) {
        console.log('MongoDB is already connected')
        return;
    }

    try {
        await mongoose.connect(
            process.env.MONGODB_URI, 
            {dbName: "share_prompt",
            useNewUrlParser: true,
            useUnifiedTopology: true,
            })
            isConnected = true;

            console.log('MongoDB connnected')
    } catch (error) {
        console.log(error)
    }
}