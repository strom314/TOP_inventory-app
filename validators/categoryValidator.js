const { body } = require("express-validator");

const lengthError = "category must be between 1 and 20 characters long";

const validateCategory = [
  body("title").trim().isLength({ min: 1, max: 20 }).withMessage(lengthError),
];

module.exports = validateCategory;
