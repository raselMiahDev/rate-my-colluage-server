import { IUserProfileDto } from './dto/user-profile.dto';
import { IUpdateUserProfileDto } from './dto/user-profile.dto';
import { IDb, db } from '../../config/db/db';
import { UniqueId } from '../../utils/common.util';
import { ICreateUserProfile, UserProfileSchema } from '../../config/db/schema/user-profile.schema';
export const UserProfileService = {
    createUserProfile: async (
        body: Omit<ICreateUserProfile, "id">,
        dbOrTx?: IDb
    ) => {
        const myDb = dbOrTx || db;

        const uid = UniqueId.createCuid();

        await myDb.insert(UserProfileSchema).values({
            ...body,
            id: uid,
        });

        return { uid };
    },
    // Add your service methods here
    getUserProfile: async (userId: string): Promise<IUserProfileDto | null> => {
        // Logic to get user profile by userId
        return null; // Replace with actual implementation
    },
    updateUserProfile: async (userId: string, data: IUpdateUserProfileDto): Promise<IUserProfileDto | null> => {
        // Logic to update user profile by userId
        return null; // Replace with actual implementation
    },
    deleteUserProfile: async (userId: string): Promise<boolean> => {
        // Logic to delete user profile by userId
        return false; // Replace with actual implementation
    }
}