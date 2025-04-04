import { body, validationResult } from "express-validator";

const validateLogin = [
  body("email")
    .notEmpty()
    .withMessage("O email é obrigatório")
    .isEmail()
    .withMessage("Formato de email inválido"),
  body("password").notEmpty().withMessage("A senha é obrigatória"),

  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    next();
  },
];

export default validateLogin;
