//Backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const resumeRoutes = require('./routes/resume');

const app = express();

// Middleware
app.use(express.json()); // Parses incoming JSON requests
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/resumeBuilder').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Mount resume routes
app.use('/api/resumes', resumeRoutes); // Ensures routes are mounted under /api/resumes

// Start server
const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
