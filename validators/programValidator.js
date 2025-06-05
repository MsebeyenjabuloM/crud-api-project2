const { body } = require('express-validator');

exports.createProgramValidator = [
  body('title').notEmpty().withMessage('Title is required'),
  body('description').optional().isString(),
  body('duration').isInt({ min: 1 }).withMessage('Duration must be a positive integer'),
  body('price').isFloat({ min: 0 }).withMessage('Price must be a non-negative number'),
];

exports.updateProgramValidator = [
  body('title').optional().notEmpty().withMessage('Title cannot be empty'),
  body('description').optional().isString(),
  body('duration').optional().isInt({ min: 1 }).withMessage('Duration must be a positive integer'),
  body('price').optional().isFloat({ min: 0 }).withMessage('Price must be a non-negative number'),
];
