import { Router } from "express";
import { User, Card } from "../config/db.js";
const router = new Router();

router.get("/", async (req, res) => {
  const users = await User.findAll();
  res.status(200).json(users);
});
router.post("/", async (req, res) => {
  const user = await User.create(req.body);
  const card = await Card.create({
    name: `Tarjeta Digital de: ${user.dataValues.name}`,
    userId: user.dataValues.id,
  });
  res.status(200).json({ msg: "Usuario creado exitosamente.", user, card });
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({ msg: "No se encontró el usuario." });
  }
  res.status(200).json(user);
});
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const updatedUser = await User.update(req.body, {
    where: { id },
  });
  res
    .status(200)
    .json({ msg: "Usuario actualizado exitosamente.", updatedUser });
});
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await User.destroy({ where: { id } });
  res.status(200).json({ msg: "Usuario eliminado exitosamente." });
});

export default router;
