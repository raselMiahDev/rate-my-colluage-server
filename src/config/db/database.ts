import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise"

const config = {
    host: process.env.HOST || 'localhost',
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
}

const pool = mysql.createPool(config);

const testConnection = async () => {
    try {
        const connenction = await pool.getConnection();
        console.log("Database connected");
        connenction.release();
    } catch (error) {
        console.error('Failed to connect to MySQL:', error);
        setTimeout(testConnection, 5000); // Retry every 5 seconds
    }
}

testConnection();


export const db = drizzle(pool);