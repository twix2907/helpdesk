import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./modules/users/user.routes";
import ticketRoutes from "./modules/tickets/ticket.routes";
import kbRoutes from "./modules/knowledgebase/kb.routes";
import notificationRoutes from "./modules/notifications/notification.routes";
// Configuración de variables de entorno
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
// Rutas principales
app.use("/api/users", userRoutes);
app.use("/api/tickets", ticketRoutes);
app.use("/api/kb", kbRoutes);
app.use("/api/notifications", notificationRoutes);
app.get("/", (_req, res) => {
    res.send("Helpdesk Backend API");
});
export default app;
//# sourceMappingURL=app.js.map