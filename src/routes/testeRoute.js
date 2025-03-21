import express from "express";
const router = express.Router();

router.get("/teste", (req, res) => {
  res.send({ msg: "undercity" });
});

export default router;
