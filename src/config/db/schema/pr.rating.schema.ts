import { mysqlTable, varchar, boolean, datetime } from "drizzle-orm/mysql-core";
import { sql } from "drizzle-orm";
import { UserSchema } from "./user.schema";
import { CompanySchema } from "./company.schema";

export const PrRatingSchema = mysqlTable("pr_rating", {
    id: varchar("id", { length: 50 }).primaryKey(),
    workRelationShip: varchar("workRelationShip", { length: 20 }) // peer / supervisor
        .notNull(),
    companyID: varchar("companyID", { length: 50 }).references(() => CompanySchema.id, {
        onDelete: "cascade",
        onUpdate: "cascade",
    })
        .notNull(),
    userID: varchar("userID", { length: 255 })
        .references(() => UserSchema.id, {
            onDelete: "cascade",
            onUpdate: "cascade",
        })
        .notNull(),
    reviewerID: varchar("reviewerID", { length: 255 }),
    recommedation: boolean("recommedation").notNull(), // true/false
    communication: varchar("communication", { length: 5 }).notNull(),
    review: varchar("review", { length: 1000 }).notNull(),

    pr_echnical_skill: varchar("pr_echnical_skill", { length: 5 }).notNull(),
    pr_accountability: varchar("pr_accountability", { length: 5 }).notNull(),
    pr_problem_solving: varchar("pr_problem_solving", { length: 5 }).notNull(),
    pr_adaptability: varchar("pr_adaptability", { length: 5 }).notNull(),
    pr_professionalism: varchar("pr_professionalism", { length: 5 }).notNull(),

    created_at: datetime("created_at")
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull(),

    updated_at: datetime("updated_at")
        .default(sql`CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP`)
        .notNull()
});

export type IPrRating = typeof PrRatingSchema.$inferSelect;
export type ICreatePrRating = typeof PrRatingSchema.$inferInsert;
export type IUpdatePrRating = typeof PrRatingSchema.$inferInsert & {
    id: string;
};
export type IPrRatingWithId = IPrRating & { id: string };
