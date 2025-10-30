import { Router } from "express";
const router = Router();
// TODO: Implementar endpoints de tickets (CRUD, asignación, comentarios, etc)
router.get("/", (_req, res) => {
    res.json({ message: "Ticket module" });
});
export default router;
//# sourceMappingURL=ticket.routes.js.map