import express from "express"

import { UserController } from "../../feature/user/user.controller"

const v1Router = express.Router()


v1Router.get(`/users`, UserController.getUsers)

export default v1Router
