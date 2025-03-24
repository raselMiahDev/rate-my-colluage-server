import { timestamp, mysqlTable, varchar } from "drizzle-orm/mysql-core"
import { sql } from 'drizzle-orm';

export const UserSchema = mysqlTable("user_table", {
    id: varchar("id", { length: 255 }).primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    email: varchar("email", { length: 255 }).notNull().unique(),
    avatar: varchar("avatar", { length: 255 }).notNull(),
    created_at: timestamp("created_at").notNull().default(sql`CURRENT_TIMESTAMP`),
})

export type IUser = typeof UserSchema.$inferSelect
export type ICreateUser = typeof UserSchema.$inferInsert

