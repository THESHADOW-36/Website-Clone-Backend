import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import router from "./routes/index.js";

const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors())
dotenv.config();

app.use("/api/v1", router)

app.get("/", (req, res) => { res.send("Welcome to Youtube Backend Server") })

mongoose.connect(process.env.MONGOURL).then(() => console.log("Connected to Database"))

app.listen(8000, () => console.log("Server is running on port 8000.")) 