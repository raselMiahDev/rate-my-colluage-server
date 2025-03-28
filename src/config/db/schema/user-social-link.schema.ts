import { timestamp, varchar, mysqlTable } from "drizzle-orm/mysql-core"
import { sql } from 'drizzle-orm';
import { UserSchema } from './user.schema';


export const UserSocialLinkSchema = mysqlTable('user_social_link', {
    id: varchar('id', { length: 255 }).primaryKey(),
    user_id: varchar('user_id', { length: 255 }).references(() => UserSchema.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
    }),
    name: varchar('name', { length: 255 }).notNull(),
    url: varchar('url', { length: 255 }).notNull(), // Changed from social_link to url
    icon: varchar('icon', { length: 255 }).notNull(),
    created_at: timestamp('created_at').notNull().default(sql`CURRENT_TIMESTAMP`)
});


export type IUserSocialLink = typeof UserSocialLinkSchema.$inferSelect
export type ICreateUserSocialLink = typeof UserSocialLinkSchema.$inferInsert