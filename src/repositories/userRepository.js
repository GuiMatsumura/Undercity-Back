import prisma from "../config/database.js";

// cria usuario
const createUser = async (userData) => {
  return await prisma.user.create({ data: userData });
};

// procura usuario por email
const findUserByEmail = async (email) => {
  return await prisma.user.findUnique({ where: { email } });
};

export default { createUser, findUserByEmail };
