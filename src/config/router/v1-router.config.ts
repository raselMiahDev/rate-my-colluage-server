import express from "express"
import { UserController } from "../../feature/user/user.controller"
import { Authentication } from "../../middleware/Authentication";

const v1Router = express.Router()

v1Router.post(`/create-user`, UserController.createUser);
v1Router.put(`/update-user/:id`, Authentication, UserController.updateUser);
v1Router.get(`/get-all-users`, Authentication, UserController.getAllUsers);

export default v1Router
