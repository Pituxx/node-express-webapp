# 🚀 Node Express Web App

![Node](https://img.shields.io/badge/Node.js-18-green)
![Express](https://img.shields.io/badge/Express-4-blue)
![License](https://img.shields.io/badge/license-MIT-orange)

Aplicación backend desarrollada con **Node.js** y **Express** que implementa una estructura básica tipo **MVC**, middleware personalizado y registro de logs.

---

# 📌 Descripción

Este proyecto consiste en un servidor web construido con Express que permite:

- Servir contenido estático
- Gestionar rutas mediante un router externo
- Utilizar controllers para separar la lógica de negocio
- Implementar middleware personalizado
- Registrar accesos al servidor en archivos de log

El objetivo del proyecto es demostrar una estructura organizada de una aplicación backend utilizando Node.js.

---

# 🧰 Tecnologías utilizadas

- Node.js
- Express
- Dotenv
- JavaScript
- Git / GitHub

---

# 📂 Estructura del proyecto

node-express-webapp
│
├ controllers
│ └ mainController.js
│
├ routes
│ └ router.js
│
├ middlewares
│ └ logger.js
│
├ public
│ └ index.html
│
├ logs
│ └ log.txt
│
├ index.js
├ package.json
├ .env
└ README.md


---

# ⚙️ Instalación

Clonar el repositorio:

```bash
git clone https://github.com/TU-USUARIO/node-express-webapp.git

Entrar al proyecto:
cd node-express-webapp

Instalar dependencias:
npm install

Ejecutar Proyecto:
npm run dev

Servidor disponible en:
http://localhost:3000

| Método | Ruta      | Descripción         |
| ------ | --------- | ------------------- |
| GET    | `/`       | Página principal    |
| GET    | `/status` | Estado del servidor |
