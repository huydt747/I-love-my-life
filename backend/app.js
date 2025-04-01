const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();

app.use(cors());

// Routes
const articlesRoutes = require('./routes/articlesRoutes.js');

// Middleware
app.use(express.json());

// API Routes
app.use('/api/articles', articlesRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something broke!' });
});

// Khởi động server
const PORT = process.env.PORT || 3500;
app.listen(PORT, () => {
  console.log(`Server running on port localhost:${PORT}`);
});