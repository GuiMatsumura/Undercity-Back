import { body, validationResult } from "express-validator";
import userRepository from "../repositories/userRepository.js";

const validateUser = [
  body("name").notEmpty().withMessage("O nome é obrigatório"),
  body("email").isEmail().withMessage("Email inválido"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("A senha deve ter pelo menos 6 caracteres"),
  body("role").isIn(["ADMIN", "PLAYER", "STORE"]).withMessage("Role inválida"),

  async (req, res, next) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      // Verifica se o email já está cadastrado
      const existingUser = await userRepository.findUserByEmail(req.body.email);
      if (existingUser) {
        return res.status(400).json({ error: "Email já cadastrado!" });
      }

      next();
    } catch (error) {
      console.error("Erro no middleware validateUser:", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  },
];

export default validateUser;
