const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  durationWeeks: {
    type: Number,
    required: true,
  },
  intensityLevel: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    required: true,
  },
  description: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model('Program', programSchema);
