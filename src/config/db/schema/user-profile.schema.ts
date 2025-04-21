import { mysqlTable, varchar, datetime } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"
import { UserSchema } from "./user.schema"


export const UserProfileSchema = mysqlTable("user.profile", {
    id: varchar("id", { length: 255 }).primaryKey(),
    userID: varchar("userID", { length: 255 })
        .references(() => UserSchema.id, {
            onDelete: "cascade",
            onUpdate: "cascade",
        })
        .notNull(),
    name: varchar("name", { length: 200 }).notNull(),
    currentCompany: varchar("currentCompany", { length: 200 }).notNull(),
    currentDesignation: varchar("currentDesignation", { length: 200 }).notNull(),
    pastCompany: varchar("pastCompany", { length: 200 }).notNull(),
    pastDesignation: varchar("pastDesignation", { length: 200 }).notNull(),
    agree: varchar("agree", { length: 200 }).notNull(),
    createdAt: datetime("created_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
    updatedAt: datetime("updated_at").default(sql`CURRENT_TIMESTAMP`).notNull(),
});


export type IUserProfile = typeof UserProfileSchema.$inferSelect
export type IUserProfileNoPassword = Omit<IUserProfile, "password">
export type ICreateUserProfile = typeof UserProfileSchema.$inferInsert