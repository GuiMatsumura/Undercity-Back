import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import userRepository from "../repositories/userRepository.js";

const SECRET_KEY = process.env.SECRET_KEY;

const registerUser = async ({ name, email, password, role }) => {
  const existingUser = await userRepository.findUserByEmail(email);
  if (existingUser) {
    throw new Error("Email já cadastrado!");
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  return await userRepository.createUser({
    name,
    email,
    password: hashedPassword,
    role,
  });
};

const login = async ({ email, password }) => {
  const user = await userRepository.findUserByEmail(email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return { success: false, message: "Credenciais inválidas" };
  }

  const token = jwt.sign({ id: user.id, email: email }, SECRET_KEY, {
    expiresIn: "7d",
  });
  return { success: true, token };
};

export default { registerUser, login };
