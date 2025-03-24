import cookieParser from 'cookie-parser';
import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import "./config/env.config"
import { globalRateLimiter } from "./middleware/limiter/global-rate.limiter"
import v1Router from './config/router/v1-router.config';
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

export default app;