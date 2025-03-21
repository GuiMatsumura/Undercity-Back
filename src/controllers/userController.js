import userService from "../services/userService.js";

const registerUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    const user = await userService.registerUser({
      name,
      email,
      password,
      role,
    });

    res.status(201).json({ message: "Usuário cadastrado com sucesso!", user });
  } catch (error) {
    console.error("Erro no controller registerUser:", error);
    res.status(500).json({ error: "Erro interno do servidor" });
  }
};

export default { registerUser };
