import { Router } from "express";
const router = Router();
// TODO: Implementar endpoints de base de conocimiento (CRUD artículos, categorías, búsqueda)
router.get("/", (_req, res) => {
    res.json({ message: "Knowledgebase module" });
});
export default router;
//# sourceMappingURL=kb.routes.js.map