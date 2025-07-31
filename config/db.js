import mongoose from "mongoose"
import { cache } from "react";
let cached = global.mongoose || { conn: null, promise: null }

export default async function connectDb() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = mongoose.connect(process.env.MONGODB_URI).then((mongoose) => mongoose)
    }
    try {
        cached.conn = cached.promise;
    } catch (error) {
        console.log("Eror conneting to mongodb", error);

    }
    return cached.conn
}