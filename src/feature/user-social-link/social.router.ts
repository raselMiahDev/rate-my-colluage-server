import { RequestHandler, Router } from 'express';
import { SocialLinkController } from './social.controller';
import { Authentication } from '../../middleware/Authentication';

const SocialLinkRouter = Router();

SocialLinkRouter.post('/create-link', Authentication as RequestHandler, (SocialLinkController.createSocialLink as unknown) as RequestHandler);



export default SocialLinkRouter;
