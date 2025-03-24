import express from "express"

import { UserController } from "../../feature/user/user.controller"

const v1Router = express.Router()

v1Router.post(`/create-user`, UserController.createUser);

export default v1Router
