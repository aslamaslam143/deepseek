// import mongoose from "mongoose"
// let cached = global.mongoose || { conn: null, promise: null }

// export default async function connectDb() {
//     if (cached.conn) return cached.conn;
//     if (!cached.promise) {
//         cached.promise = mongoose.connect(process.env.MONGODB_URI).then((mongoose) => mongoose)
//     }
//     try {
//         cached.conn = cached.promise;
//     } catch (error) {
//         console.log("Error conneting to mongodb", error);

//     }
//     return cached.conn;
// }// /config/db.js
import mongoose from "mongoose";

let cached = global.mongoose || { conn: null, promise: null };
global.mongoose = cached;

export default async function connectDb() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGODB_URI, {
            dbName: "deepseek", // Optional if your URI has the db
        }).then((mongoose) => {
            console.log("✅ MongoDB Connected to Atlas");
            return mongoose;
        }).catch((err) => {
            console.error("❌ MongoDB Connection Error:", err.message);
            throw err;
        });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}