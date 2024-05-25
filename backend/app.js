// server.js
const express = require('express');
const connectDB = require('./database/db');
const todoRoutes = require('./routes/routes');
const middleware = require('./middleware/middleware');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
connectDB();

// Middleware
middleware(app);

// Routes
app.use('/api/todos', todoRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
