import { sql } from "drizzle-orm"
import { datetime, int, mysqlTable, text, varchar } from "drizzle-orm/mysql-core"
import { QuizSchema } from "./quiz-schema"

export const ReportSettingSchema = mysqlTable("report_setting", {
    id: varchar("id", { length: 50 }).primaryKey(),
    quizId: int("quiz_id").references(() => QuizSchema.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
    }),
    title: varchar("title", { length: 255 }).notNull(),
    description: text("description").notNull(),
    createdAt: datetime("created_at").default(sql`(CURRENT_TIMESTAMP)`),
})
export type IReportSettingSchema = typeof ReportSettingSchema.$inferSelect
export type ICreateReportSetting = typeof ReportSettingSchema.$inferInsert
