import { mysqlTable, varchar, datetime } from "drizzle-orm/mysql-core"
import { sql } from "drizzle-orm"


export const CompanySchema = mysqlTable("company_table", {
    id: varchar("id", { length: 50 }).primaryKey(),
    name: varchar("name", { length: 255 }).notNull(),
    website: varchar("website", { length: 255 }),
    logo: varchar("logo", { length: 255 }),
    createdAt: datetime("created_at")
        .default(sql`(CURRENT_TIMESTAMP)`)
        .notNull(),
})