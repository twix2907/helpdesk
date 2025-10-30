import { Router } from "express";
const router = Router();
// TODO: Implementar endpoints de notificaciones (push/email, gestión)
router.get("/", (_req, res) => {
    res.json({ message: "Notification module" });
});
export default router;
//# sourceMappingURL=notification.routes.js.map