const mongoose = require('mongoose');

const ResumeSchema = new mongoose.Schema({
  name: String,
  email: String,
  education: String,
  experience: String,
  skills: [String],
  projects: [String],
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resume', ResumeSchema);
