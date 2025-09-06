import express from 'express'
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.send("Team Defender_Warriors")
})

//Middlewares
app.use(cors({
    origin:'http://localhost:5173/',
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());

try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDb is connected")
} catch (error) {
    res.status(400).json({
        message: "Error in MongoDB"
    })
}

//apis


const port = 3001 || process.env.PORT;

app.listen(port, () => {
    console.log(`App is listening on Port${port}`)
})