# 🚀 Node Express REST API (Full Backend)

![Node](https://img.shields.io/badge/Node.js-18-green)
![Express](https://img.shields.io/badge/Express-4-blue)
![Sequelize](https://img.shields.io/badge/Sequelize-ORM-blue)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-DB-blue)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![Multer](https://img.shields.io/badge/FileUpload-Multer-yellow)
![Status](https://img.shields.io/badge/status-production_ready-success)

---

# 📌 Descripción

API RESTful desarrollada con **Node.js + Express**, diseñada para gestionar usuarios y publicaciones con autenticación segura mediante JWT y soporte para subida de archivos.

Este proyecto simula un backend real listo para ser consumido por aplicaciones frontend o móviles.

---

# 🎯 Características principales

* ✅ CRUD completo (Users & Posts)
* 🔐 Autenticación con JWT
* 🔒 Rutas protegidas
* 📂 Subida de archivos con Multer
* 🗄️ Base de datos relacional (PostgreSQL)
* 🧠 ORM con Sequelize
* 🧩 Arquitectura modular (MVC)

---

# 🧰 Stack tecnológico

| Tecnología | Uso                |
| ---------- | ------------------ |
| Node.js    | Entorno backend    |
| Express    | Framework web      |
| Sequelize  | ORM                |
| PostgreSQL | Base de datos      |
| JWT        | Autenticación      |
| Multer     | Subida de archivos |

---

# 📂 Arquitectura

El proyecto sigue una arquitectura escalable:

controllers → lógica
models → datos
routes → endpoints
middlewares → seguridad y utilidades

---

# 🔗 Endpoints principales

## 👤 Users

```http
GET /api/users
POST /api/users
PUT /api/users/:id
DELETE /api/users/:id
```

---

## 📝 Posts

```http
GET /api/posts
POST /api/posts 🔒
PUT /api/posts/:id
DELETE /api/posts/:id 🔒
```

---

## 🔐 Auth

```http
POST /api/login
```

---

## 📂 Upload

```http
POST /upload
```

---

# 🔐 Autenticación JWT

### 📌 Login

```json
POST /api/login

{
  "email": "user@test.com",
  "password": "123456"
}
```

---

### 📌 Respuesta

```json
{
  "token": "eyJhbGciOiJIUzI1NiIs..."
}
```

---

### 📌 Uso del token

```http
Authorization: eyJhbGciOiJIUzI1NiIs...
```

---

# 🔒 Seguridad

Se protegen rutas críticas como:

* Creación de posts
* Eliminación de posts

Esto evita accesos no autorizados y protege la integridad de los datos.

---

# 📂 Subida de archivos

### 📌 Endpoint

```http
POST /upload
```

### 📌 Configuración

* Tipo: `form-data`
* Campo: `file`

---

# 🗄️ Base de datos

Relación implementada:

```text
User (1) → (N) Post
```

---

# ⚙️ Instalación

```bash
git clone https://github.com/TU-USUARIO/node-express-webapp.git
cd node-express-webapp
npm install
```

---

# 🔐 Variables de entorno

```env
DB_HOST=localhost
DB_USER=tu_usuario
DB_PASSWORD=tu_password
DB_NAME=tu_db
PORT=3000
JWT_SECRET=secreto123
```

---

# ▶️ Ejecutar

```bash
npm run dev
```

---

# 🧪 Testing

Probado con:

* Postman
* Curl
* Thunder Client

---

# 🧠 Decisiones técnicas

### Sequelize

Permite trabajar con modelos y relaciones sin escribir SQL directamente.

### JWT

Autenticación sin estado, ideal para APIs modernas.

### Multer

Solución estándar para manejo de archivos en Node.js.


---

# 👨‍💻 Autor

Cristobal (Pituxx)
