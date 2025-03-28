import { Response } from 'express';
import { SocialLinkService } from './social.service';
import { AuthenticatedRequest, ICreateSocialLink } from '../../types/user.typs';

export const SocialLinkController = {
    createSocialLink: async (req: AuthenticatedRequest, res: Response) => {
        try {
            const { id: user_id } = req.user;

            // Validate required fields
            const { name, url, icon } = req.body as unknown as { name: string; url: string; icon: string };


            if (!name || !url || !icon) {
                return res.status(400).json({ message: 'Name, URL, and icon are required' });
            }

            const data: ICreateSocialLink = {
                id: '', // This will be generated in the service layer
                name,
                url,
                icon,
                user_id
            };
            const uid = await SocialLinkService.createSocialLink(data);

            return res.status(201).json({ id: uid });
        } catch (e) {
            console.error('Error creating social link:', e);
            if (e instanceof Error) {
                return res.status(500).json({ message: e.message });
            }
            return res.status(500).json({ message: 'Internal Server Error' });
        }
    }
}