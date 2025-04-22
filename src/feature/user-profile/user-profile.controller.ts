import { Response as ExpressResponse } from 'express';
import { UserProfileService } from './user-profile.service';
import { ICreateUserProfile } from '../../config/db/schema/user-profile.schema';
import { AuthenticatedRequest, RequestBody } from '../../types/user.typs';
import { db } from '../../config/db/db';
export const UserProfileController = {
    createUserProfile: async (req: AuthenticatedRequest, res: ExpressResponse) => {
        try {
            const { id: user_id } = req.user; // Assuming req.user contains the authenticated user's ID
            const { name, currentCompany, currentDesignation, pastCompany, pastDesignation, agree

            } = req.body as unknown as RequestBody
            if (!name || !currentCompany || !currentDesignation || !pastCompany || !pastDesignation || !agree) {
                return res.status(400).json({ message: 'Name, currentCompany, currentDesignation, pastCompany, pastDesignation and agree are required' });
            }

            const data: ICreateUserProfile = {
                id: '', // This will be generated in the service layer
                userID: user_id,
                name,
                currentCompany,
                currentDesignation,
                pastCompany,
                pastDesignation,
                agree
            };

            const userProfile = await UserProfileService.createUserProfile(data, db);
            res.status(201).json({ message: "User Profile Create Success", id: userProfile });
        } catch (err) {
            if (err instanceof Error) {
                res.status(500).json({ error: err.message });
            } else {
                res.status(500).json({ error: "An unknown error occurred" });
            }
        }
    },
}