import { IDb, db } from '../../config/db/db';
import { UniqueId } from '../../utils/common.util';
import { ICreateUserProfile, UserProfileSchema } from '../../config/db/schema/user-profile.schema';
import { eq } from 'drizzle-orm';

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
    getUserProfile: async (userId: string) => {
        const userProfile = await db.query.UserProfileSchema.findFirst({
            where: eq(UserProfileSchema.id, userId)
        }).prepare().execute();
        return userProfile
    },
}