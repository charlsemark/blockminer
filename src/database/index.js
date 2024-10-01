import mongoose from "mongoose";

export function connectToDB() {
    if(mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise()
    } else {
        const uri = 'mongodb+srv://charlsemark100:yUahWgpCKcXPB0Ir@cluster0.rua3l.mongodb.net/'
        return mongoose.connect(uri);
    }
}