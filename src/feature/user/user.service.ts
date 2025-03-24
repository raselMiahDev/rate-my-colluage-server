import { IDb, db } from "../../config/db/db";
import { ICreateUser, UserSchema } from "../../config/db/schema/user.schema";
import { UniqueId } from "../../utils/common.util";

export const UserService = {
    createUser: async (body: Omit<ICreateUser, "id">, dbOrTx?: IDb) => {
        const myDb = dbOrTx || db;

        const uid = UniqueId.createCuid();

        await myDb.insert(UserSchema).values({
            ...body,
            id: uid
        })
        return uid;
    }
}