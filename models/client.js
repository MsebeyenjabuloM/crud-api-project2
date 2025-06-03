const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  goals: {
    type: String,
    required: true,
  },
  enrolledProgram: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program', // reference to Program model
  },
}, { timestamps: true });

module.exports = mongoose.model('Client', clientSchema);
