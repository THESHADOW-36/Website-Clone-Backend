import mongoose, { Schema } from "mongoose";

const user = new Schema({
    firstname: String,
    surname: String,
    day: Number,
    month: Number,
    year: Number,
    gender: String,
    email: String,
    password: String
})

export default mongoose.model("User", user);