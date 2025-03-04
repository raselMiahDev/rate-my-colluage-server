import { relations, sql } from "drizzle-orm"
import { boolean, datetime, mysqlTable, varchar } from "drizzle-orm/mysql-core"
import { Constant } from "../../constant/common.constant"
import { UserSubmissionSchema } from "./user-submission.schema"

export const UserSchema = mysqlTable("user_table", {
    id: varchar("id", { length: 50 }).primaryKey(),
    fullName: varchar("full_name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    avatar: varchar("avatar", { length: 255 }),
    password: varchar("password", { length: 255 }).notNull(),
    isAdmin: boolean("is_admin").default(false).notNull(),

    // address
    countryCode: varchar("country_code", { length: 5 }).default("BD").notNull(),
    city: varchar("city", { length: 50 }),
    state: varchar("state", { length: 50 }),
    zipCode: varchar("zip_code", { length: 50 }),
    address: varchar("address", { length: 255 }),
    // extra info
    timeZone: varchar("time_zone", { length: 50 }).notNull().default(Constant.TIMEZONE),
    fcmToken: varchar("fcm_token", { length: 255 }),
    lastLoggedIn: datetime("last_logged_in")
        .default(sql`(CURRENT_TIMESTAMP)`)
        .notNull(),
    createdAt: datetime("created_at")
        .default(sql`(CURRENT_TIMESTAMP)`)
        .notNull(),
})

// export type IUser = typeof UserSchema.$inferSelectexport type IUserNoPassword = Omit<IUser, "password">
export type ICreateUser = typeof UserSchema.$inferInsert

export const UserRelation = relations(UserSchema, ({ many }) => ({
    userSubmission: many(UserSubmissionSchema),
}))
