const mongoose = require('mongoose');

// Define the resume schema
const resumeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    experience: {
        type: String,
        required: true,
    },
    education: {
        type: String,
        required: true,
    },
    skills: {
        type: String,
        required: true,
    }
}, { timestamps: true });  // Automatically adds createdAt and updatedAt fields

// Export the Resume model
module.exports = mongoose.model('Resume', resumeSchema);
