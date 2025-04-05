const mysql = require('mysql2');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 20,
  queueLimit: 0,
  idleTimeout: 60000
});

// Kiểm tra kết nối khi khởi động
pool.getConnection((err, connection) => {
  if (err) {
    console.error('Kết nối CSDL thất bại:', err.stack);
    return;
  }
  console.log('Một phiên đang dùng web với ID', connection.threadId);
  connection.release(); // Trả kết nối về pool
});

// Xử lý sự kiện lỗi để tránh crash app
pool.on('error', (err) => {
  console.error('Lỗi CSDL:', err.code);
});

// Export promise-based interface để dùng async/await
module.exports = pool.promise();