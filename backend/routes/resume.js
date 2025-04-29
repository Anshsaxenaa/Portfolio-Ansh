const express = require('express');
const router = express.Router();
const Resume = require('../models/Resume');

// Get latest resume
router.get('/', async (req, res) => {
  const resume = await Resume.findOne().sort({ updatedAt: -1 });
  res.json(resume);
});

// Update or create resume
router.post('/update', async (req, res) => {
  const updated = await Resume.findOneAndUpdate({}, req.body, { new: true, upsert: true });
  res.json(updated);
});

module.exports = router;
