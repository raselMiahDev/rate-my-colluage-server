import { Router } from "express";
import { Authentication } from "../../middleware/Authentication";
import { UserController } from "./user.controller";
const UserRouter = Router();

UserRouter.post(`/create-user`, UserController.createUser);
UserRouter.put(`/update-user/:id`, Authentication, UserController.updateUser);
UserRouter.get(`/get-all-users`, UserController.getAllUsers);
UserRouter.get(`/get-user-by-id/:id`, UserController.getUserById);

export default UserRouter;
