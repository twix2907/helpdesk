import express from "express";
import type { Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";

import userRoutes from "./modules/users/user.routes.js";
import ticketRoutes from "./modules/tickets/ticket.routes.js";
import kbRoutes from "./modules/knowledgebase/kb.routes.js";
import notificationRoutes from "./modules/notifications/notification.routes.js";

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

app.get("/", (_req: Request, res: Response) => {
  res.send("Helpdesk Backend API");
});

export default app;
