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

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await userService.login({ email, password });

    if (!result.success) {
      return res.status(401).json({ message: result.message });
    }

    res.cookie("authToken", result.token, {
      httpOnly: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({ message: "Login bem-sucedido" });
  } catch (error) {
    res.status(500).json({ message: "Erro no servidor", error: error.message });
  }
};

export default { registerUser, login };
