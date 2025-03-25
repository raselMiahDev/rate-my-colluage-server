import express from "express"
import { UserController } from "../../feature/user/user.controller"

const v1Router = express.Router()

v1Router.post(`/create-user`, UserController.createUser);
v1Router.put(`/update-user/:id`, UserController.updateUser);

export default v1Router
