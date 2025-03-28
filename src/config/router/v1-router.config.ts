import express from "express"
import UserRouter from "../../feature/user/user.router"
import SocialLinkRouter from "../../feature/user-social-link/social.router";
const v1Router = express.Router()


v1Router.use(`/user`, UserRouter);
v1Router.use(`/user-social-link`, SocialLinkRouter);

export default v1Router
