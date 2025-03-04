import { mysqlTable, varchar, datetime } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"
import { UserSchema } from "./user.schema"


export const DepartmentSchema = mysqlTable("department", {
    id: varchar("id", { length: 50 }).primaryKey(),
    title: varchar("title", { length: 255 }).notNull(),
    companyID: varchar("companyID", { length: 50 })
        .references(() => UserSchema.id, {
            onDelete: "cascade",
            onUpdate: "cascade",
        })
        .notNull(),

    createdAt: datetime("created_at")
        .default(sql`(CURRENT_TIMESTAMP)`)
        .notNull(),
})