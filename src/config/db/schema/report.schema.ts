import { mysqlTable, varchar, datetime } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"
import { UserSchema } from "./user.schema"


export const CompanySchema = mysqlTable("report", {
    id: varchar("id", { length: 50 }).primaryKey(),
    repoterID: varchar("repoterID", { length: 50 })
        .references(() => UserSchema.id, {
            onDelete: "cascade",
            onUpdate: "cascade",
        })
        .notNull(),

    createdAt: datetime("created_at")
        .default(sql`(CURRENT_TIMESTAMP)`)
        .notNull(),
})