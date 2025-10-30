# Helpdesk Backend

Backend profesional para el sistema Helpdesk.

## Tecnologías principales
- Node.js
- TypeScript
- Express
- PostgreSQL
- JWT (autenticación)
- Estructura modular (usuarios, tickets, base de conocimiento, notificaciones)
- Documentación Swagger
- ESLint, Prettier

## Estructura inicial
- src/
  - modules/
    - users/
    - tickets/
    - knowledgebase/
    - notifications/
  - config/
  - middlewares/
  - utils/
  - app.ts
- .env.example
- README.md

## Instalación y uso
1. Instala dependencias: `npm install`
2. Copia `.env.example` a `.env` y configura tus variables
3. Ejecuta migraciones: `npm run migrate`
4. Inicia el servidor: `npm run dev`

## Endpoints principales
- Autenticación: `/api/auth`
- Usuarios: `/api/users`
- Tickets: `/api/tickets`
- Base de conocimiento: `/api/kb`
- Notificaciones: `/api/notifications`

---

Este archivo se actualizará conforme avance la configuración y desarrollo.