import { Router } from 'express';

import { SocialLinkController } from './social.controller';
import { Authentication } from '../../middleware/Authentication';

const SocialLinkRouter = Router();

SocialLinkRouter.post('/create-link', Authentication, SocialLinkController.createSocialLink);



export default SocialLinkRouter;
