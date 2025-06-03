const Program = require('../models/program');

// GET all programs
exports.getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.json(programs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// GET one program
exports.getProgramById = async (req, res) => {
  try {
    const program = await Program.findById(req.params.id);
    if (!program) return res.status(404).json({ message: 'Program not found' });
    res.json(program);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// POST create program
exports.createProgram = async (req, res) => {
  try {
    const newProgram = new Program(req.body);
    const savedProgram = await newProgram.save();
    res.status(201).json(savedProgram);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// PUT update program
exports.updateProgram = async (req, res) => {
  try {
    const updatedProgram = await Program.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!updatedProgram) return res.status(404).json({ message: 'Program not found' });
    res.json(updatedProgram);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// DELETE program
exports.deleteProgram = async (req, res) => {
  try {
    const deletedProgram = await Program.findByIdAndDelete(req.params.id);
    if (!deletedProgram) return res.status(404).json({ message: 'Program not found' });
    res.json({ message: 'Program deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
