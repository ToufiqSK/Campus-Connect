import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config({
    path:"../config/.env"
})
const DatabaseConnection = ()=>
{
    mongoose.connect(process.env.MONGO_URI).then(()=>
    {
        console.log("connected to mongoDB")
    }
).catch((error)=>
{
    console.log(error);
})
}

export default DatabaseConnection;