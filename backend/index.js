import express from 'express';
import dotenv from 'dotenv';
import DatabaseConnection from './config/Database.js';
import mongoose from 'mongoose';
import userRoute from './routes/userRoute.js';

dotenv.config({
    path: ".env"
})
const app = express()

app.use(express.json(), express.urlencoded({ extended: true }))
app.use("/api", userRoute);
app.use("/home", (req, res) => {
    res.json(
        {
            message: "nuh uh"
        }
    )
}
)
DatabaseConnection();
app.listen(process.env.PORT, () => {
    console.log(`Server started at ${process.env.PORT}`)
})