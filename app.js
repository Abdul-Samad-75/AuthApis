import express from "express";
import "dotenv/config"
import { connect } from "mongoose";
import authRoutes from "./router/authRoutes.js";


const app = express();

app.get("/", (req, res) => {
    res.send("Backend is running");
});

//middlewares
app.use(express.json())

//routes
app.use('/api',authRoutes)


const PORT=process.env.PORT
app.listen(3000,async () => {
    await connect(process.env.DB_URL);
    console.log("Database is connected");
    console.log(`Server is running on http://localhost:${PORT}`);
});