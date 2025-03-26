import express from "express"
import UserRouter from "../../feature/user/user.router"
const v1Router = express.Router()


v1Router.use(`/user`, UserRouter);

export default v1Router
