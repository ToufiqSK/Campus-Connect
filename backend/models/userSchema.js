import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email:
    {
        type: String,
        required: true
    },
    newPassword: {
        type: String,
        required: true
    },
    confirmPassword: {
        type: String,
        required: true
    },
    followers: {
        type: Array,
        default: []
    },
    following: {
        type: Array,
        default: []
    }
}, { timestamps: true })

export const User = mongoose.model("User", userSchema)