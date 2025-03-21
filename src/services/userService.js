import bcrypt from "bcrypt";
import userRepository from "../repositories/userRepository.js";

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

export default { registerUser };
