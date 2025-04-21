import express from "express"
import UserRouter from "../../feature/user/user.router"
import SocialLinkRouter from "../../feature/user-social-link/social.router";
import UserProfileRouter from "../../feature/user-profile/user-profile.router";
const v1Router = express.Router()


v1Router.use(`/user`, UserRouter);
v1Router.use(`/user-social-link`, SocialLinkRouter);
v1Router.use(`/user-profile`, UserProfileRouter);

export default v1Router
