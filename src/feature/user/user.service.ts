import { eq, sql } from "drizzle-orm";
import { IDb, db } from "../../config/db/db";
import { ICreateUser, IUserNoPassword, UserSchema, IUser } from "../../config/db/schema/user.schema";
import { UniqueId } from "../../utils/common.util";
import bcrypt from 'bcrypt';

export const UserService = {
    getUserByIdentifier: async (
        by: "id" | "email",
        identifier: string,
        withPassword = false,
        dbOrTx?: IDb
    ): Promise<IUser | IUserNoPassword | undefined> => {
        const myDb = dbOrTx || db
        const where =
            by === "id" ? eq(UserSchema.id, sql.placeholder("id")) : eq(UserSchema.email, sql.placeholder("email"))
        const fullUserPrep = myDb.query.UserSchema.findFirst({
            where,
        }).prepare()

        const fullUser: IUser | undefined = await fullUserPrep.execute(
            by === "id"
                ? {
                    id: identifier,
                }
                : {
                    email: identifier,
                }
        )

        if (fullUser) {
            if (withPassword) {
                return fullUser
            }
            const { password, ...user } = fullUser
            return user
        }
        return undefined
    },
    createUser: async (body: Omit<ICreateUser, "id">, dbOrTx?: IDb) => {
        const myDb = dbOrTx || db;

        const uid = UniqueId.createCuid();

        await myDb.insert(UserSchema).values({
            ...body,
            id: uid
        })
        return uid;
    },
    updateUser: async (id: string, body: Partial<ICreateUser>): Promise<IUserNoPassword> => {
        const hashPass = body.password ? await bcrypt.hash(body.password, 10) : undefined;
        await db.update(UserSchema).set({
            ...body,
            password: hashPass,
        }).where(eq(UserSchema.id, id))
        const user = (await UserService.getUserByIdentifier("id", id)) as IUserNoPassword
        return user
    }
}