const { body } = require("express-validator");

const titleError = "must be between 1 and 40 characters long";
const priceError = "price must be a positive number";

exports.validateGame = [
  body("title").trim().isLength({ min: 1, max: 40 }).withMessage(titleError),
  body("price").isFloat({ min: 0 }).withMessage(priceError),
];
