
import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://dayanecarla72:dayane123@cluster0.40ywxoe.mongodb.net/app"
);

let db = mongoose.connection;

export default db;

