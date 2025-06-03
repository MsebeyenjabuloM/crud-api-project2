const express = require('express');
const router = express.Router();
const programController = require('../controllers/programController');
const { createProgramValidator, updateProgramValidator } = require('../validators/programValidator');


router.get('/', programController.getAllPrograms);
router.get('/:id', programController.getProgramById);
router.post('/', programController.createProgram);
router.put('/:id', programController.updateProgram);
router.delete('/:id', programController.deleteProgram);

module.exports = router;
