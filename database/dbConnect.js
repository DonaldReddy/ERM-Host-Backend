import mongoose from "mongoose";

async function dbConnect() {

    try {
        const URI = process.env.DataBaseURI
        await mongoose.connect(URI)
        console.log("Connected to Data Base");
    } catch (error) {
        throw new Error(error.message)
    }

}

export default dbConnect