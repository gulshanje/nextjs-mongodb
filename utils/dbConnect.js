import mongoose from "mongoose";
import moongose from "mongoose";

const dbConnect = async () => {
    if (mongoose.connection.readyState >= 1 ) {
        return;
    }
    // moongoses.connect(process.env.NODE_ENV !== 'production')
    mongoose.connect(process.env.DB_URI);

}

export default dbConnect;