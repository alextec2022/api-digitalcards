import { Router } from "express";
import { Card } from "../config/db.js";
const router = Router();

router.get("/", async (req, res) => {
  const cards = await Card.findAll();
  if (cards.length === 0) {
    return res.status(404).json({ msg: "No hay tarjetas creadas." });
  }
  res.status(200).json(cards);
});

router.get("/:userId", async (req, res) => {
  const { userId } = req.params;
  const card = await Card.findOne({
    where: {
      userId,
    },
  });
  if (!card) {
    return res.status(404).json({ msg: "No hay tarjeta para el usuario." });
  }
  res.status(200).json(card);
});

export default router;
