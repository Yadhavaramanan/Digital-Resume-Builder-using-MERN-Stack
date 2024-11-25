const express = require('express');
const router = express.Router();
const Resume = require('../models/resume.js');

// Add a new resume
router.post('/add', async (req, res) => {
    try {
        const newResume = new Resume(req.body);
        await newResume.save();
        res.status(201).json(newResume);
    } catch (err) {
        console.error('Error saving resume:', err); // Log the error
        res.status(400).json({ message: 'Failed to save resume. Please try again.' });
    }
});

// GET request to fetch all resumes
router.get('/all', async (req, res) => {
    try {
        const resumes = await Resume.find();
        res.json(resumes);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET request to fetch a resume by ID
router.get('/:id', async (req, res) => {
    try {
        const resume = await Resume.findById(req.params.id);
        if (!resume) return res.status(404).json({ message: 'Resume not found' });
        res.json(resume);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
