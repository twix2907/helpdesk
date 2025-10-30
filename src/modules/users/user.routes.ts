import { Router } from "express";

const router = Router();

// TODO: Implementar endpoints de usuario (registro, login, perfil, CRUD)

router.get("/", (_req, res) => {
  res.json({ message: "User module" });
});

export default router;
