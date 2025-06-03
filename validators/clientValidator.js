const { body } = require('express-validator');

exports.createClientValidator = [
  body('name').notEmpty().withMessage('Name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phone').notEmpty().withMessage('Phone number is required'),
  body('goals').optional().isString().withMessage('Goals must be a string'),
  body('startDate').optional().isISO8601().toDate().withMessage('Invalid start date'),
];

exports.updateClientValidator = [
  body('name').optional().notEmpty().withMessage('Name cannot be empty'),
  body('email').optional().isEmail().withMessage('Must be a valid email'),
  body('phone').optional().notEmpty().withMessage('Phone cannot be empty'),
  body('goals').optional().isString().withMessage('Goals must be a string'),
  body('startDate').optional().isISO8601().toDate().withMessage('Invalid start date'),
];
