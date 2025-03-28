import { db, IDb } from '../../config/db/db';
import { UserSocialLinkSchema, ICreateUserSocialLink } from '../../config/db/schema/user-social-link.schema';
import { UniqueId } from '../../utils/common.util';

export const SocialLinkService = {
    createSocialLink: async (body: ICreateUserSocialLink, dbOrTx?: IDb) => {
        const myDb = dbOrTx || db;
        const uid = UniqueId.createCuid();

        await myDb.insert(UserSocialLinkSchema).values({
            id: uid,
            user_id: body.user_id,
            name: body.name,
            url: body.url,
            icon: body.icon,
        })
        return uid;
    }
}