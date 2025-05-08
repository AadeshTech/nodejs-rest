const { body, validationResult } = require('express-validator');

exports.validateRegister = [
  body('name').notEmpty(),
  body('firstName').notEmpty(),
  body('email').isEmail(),
  body('country').notEmpty(),
  body('password').isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

exports.validateAdminCreate = [
  body('name').notEmpty(),
  body('firstName').notEmpty(),
  body('email').isEmail(),
  body('country').notEmpty(),
  body('password').isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];