import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import "./config/env.config"
import { globalRateLimiter } from "./middleware/limiter/global-rate.limiter"
import v1Router from './config/router/v1-router.config';
import pool from './config/db/database';
// init 
const app = express();

//  middleware
app.use(helmet())
app.use(globalRateLimiter)
app.use(express.static("public"))
app.use(cookieParser())
app.use(cors({ origin: true, credentials: true }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use("/v1", v1Router)

app.get("/", async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM basicinfo');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ message: "error" });
    }
})

export default app;