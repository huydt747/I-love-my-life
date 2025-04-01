const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10, // Số kết nối tối đa trong pool
  queueLimit: 0
});

// Kiểm tra kết nối khi khởi động
pool.getConnection((err, connection) => {
  if (err) {
    console.error('❌ Database connection failed:', err.stack);
    return;
  }
  console.log('✅ Connected to database as ID', connection.threadId);
  connection.release(); // Trả kết nối về pool
});

// Xử lý sự kiện lỗi để tránh crash app
pool.on('error', (err) => {
  console.error('🛑 Database error:', err.code);
});

// Export promise-based interface để dùng async/await
module.exports = pool.promise();