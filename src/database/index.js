import mongoose from "mongoose";

export function connectToDB() {
    if(mongoose.connection.readyState === 1) {
        return mongoose.connection.asPromise()
    } else {
        const uri = 'mongodb+srv://charlsemark100:yUahWgpCKcXPB0Ir@cluster0.rua3l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
        return mongoose.connect(uri);
    }
}