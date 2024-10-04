import express from "express";
import cors from "cors"
import db from "./src/database/database.js";
import authRoute from "./src/routes/authroutes.js";
import dotenv from "dotenv"
dotenv.config()

const app = express();
const port = process.env.PORT || 8001

app.use(cors());
app.use(express.json())


db();

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use("/api/auth", authRoute)

app.listen(port, () => {
    console.log(`server is running on ${port}`)
})