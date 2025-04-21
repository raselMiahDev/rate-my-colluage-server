import { Router } from "express";
import { Authentication } from "../../middleware/Authentication";
import { UserProfileController } from "./user-profile.controller";
import { RequestHandler } from "express"; // import this to use RequestHandler type

const UserProfileRouter = Router();
UserProfileRouter.post(
    "/create",
    Authentication as RequestHandler,
    (UserProfileController.createUserProfile as unknown) as RequestHandler
);

export default UserProfileRouter;