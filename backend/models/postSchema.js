import mongoose from "mongoose";

const Post = new mongoose.Schema({
    description:
    {
        type: String,
        required: true
    },
    like:
    {
        type:Array,
        default:[]
    },
    userID:
    {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User",
        extended:true
    }
   
},{timestamps:true})

export const PostModel = mongoose.model("post", Post)