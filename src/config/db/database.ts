import mysql from "mysql2/promise"

const config = {
    host: 'localhost',
    user: 'root',
    password: '12345',
    database: 'user',
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


export default pool;