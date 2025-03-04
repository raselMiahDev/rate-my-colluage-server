import { sql } from "drizzle-orm"
import { boolean, datetime, double, json, mysqlTable, varchar } from "drizzle-orm/mysql-core"

export const OrderStatusEnum = ["pending", "approved", "rejected", "refunded"] as const
export type IOrderStatusEnum = (typeof OrderStatusEnum)[number]

export const PaymentSchema = mysqlTable("payment_table", {
    id: varchar("id", { length: 50 }).primaryKey(),
    whoPayingId: varchar("who_paying_id", { length: 50 }).notNull(),
    userEmail: varchar("user_email", { length: 50 }).notNull(),
    submissionId: varchar("submission_id", { length: 50 }).notNull(),
    amount: double("amount").notNull(),
    isRecurring: boolean("is_recurring").default(false),
    paymentStatus: varchar("payment_status", { length: 50 }),
    // billing
    billingReason: varchar("billing_reason", { length: 100 }),
    invoiceId: varchar("invoice_id", { length: 100 }),
    invoicePdf: varchar("invoice_pdf", { length: 255 }),
    invoiceUrl: varchar("invoice_url", { length: 255 }),
    rawInvoice: json("rawInvoice"),
    // other
    createdAt: datetime("created_at")
        .default(sql`(CURRENT_TIMESTAMP)`)
        .notNull(),
})

export type IPayment = typeof PaymentSchema.$inferSelect
export type ICreatePayment = typeof PaymentSchema.$inferInsert
