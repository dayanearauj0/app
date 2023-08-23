
import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://admin:dayane123@cluster0.v2ky7en.mongodb.net/api2"
);

let db = mongoose.connection;

export default db;

