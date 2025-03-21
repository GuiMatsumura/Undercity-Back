import userService from "../services/userService.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password || !role) {
      return res
        .status(400)
        .json({ error: "Todos os campos são obrigatórios!" });
    }

    const user = await userService.registerUser({
      name,
      email,
      password,
      role,
    });

    res.status(201).json({ message: "Usuário cadastrado com sucesso!", user });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export default { registerUser };
