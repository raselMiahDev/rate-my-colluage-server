import { drizzle } from "drizzle-orm/mysql2"
import mysql from "mysql2/promise"
import { EnvConfig } from "../env.config"


import * as user from "./schema/user.schema"
import * as userProfile from "./schema/user-profile.schema"
import * as userSocial from "./schema/user-social-link.schema"
import * as report from "./schema/report.schema"
import * as company from "./schema/company.schema"
import * as department from "./schema/department.schema"
import * as prRating from "./schema/pr.rating.schema"


export const schemas = {
    ...user,
    ...userProfile,
    ...userSocial,
    ...report,
    ...company,
    ...department,
    ...prRating
}

export const dbPool = mysql.createPool({
    uri: EnvConfig.DATABASE_URL,
})

// use only in services
export const db = drizzle(dbPool, {
    schema: schemas,
    logger: false,
    mode: "default",
})

export type IDb = typeof db
