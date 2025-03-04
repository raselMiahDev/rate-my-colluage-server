


=== how to connect local MYSQL database with server ===
1. Install Required Dependencies
pnpm install mysql2

2. Create a MySQL Connection
import mysql from 'mysql2/promise';

// MySQL connection configuration
const config = {
  host: 'localhost', // MySQL server host
  user: 'root',      // MySQL username
  password: 'your_password', // MySQL password
  database: 'your_database_name', // Database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
};

// Create a connection pool
const pool = mysql.createPool(config);

const testConnection = async () => {
  try {
    const connection = await pool.getConnection();
    console.log('Connected to MySQL database');
    connection.release(); // Release the connection back to the pool
  } catch (error) {
    console.error('Failed to connect to MySQL:', error);
    // Retry connection after a delay
    setTimeout(testConnection, 5000); // Retry every 5 seconds
  }
};

testConnection();


export default pool;
3. Set Up Express Server router and controller
4. insert data in MYSQL WORKBENCH
5. run server pnpm run dev

