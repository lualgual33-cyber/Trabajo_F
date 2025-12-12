# 📝 Todo List Full Stack – Actividad Final Integradora

Aplicación Fullstack que permite gestionar tareas (crear, listar, actualizar y eliminar), desarrollada con:

- **Frontend:** React + Vite  
- **Backend:** Node.js con Express  
- **Base de datos:** MySQL (Railway)  
- **Despliegues:**  
  - Frontend en **Vercel**  
  - Backend en **Render**  
- **CI/CD:** GitHub Actions para ejecutar build automático  

---

# 📖 Descripción del proyecto

Este proyecto es un **Todo List** que permite gestionar tareas con un CRUD completo. Está dividido en dos partes:

- **Frontend:** interfaz del usuario desarrollada en React.  
- **Backend:** API REST conectada a MySQL en Railway.

El sistema simula un entorno real de despliegue moderno usando **Vercel, Render y Railway**.

---

# 🧰 Stack tecnológico

| Capa              | Tecnología         |
|------------------|--------------------|
| **Frontend**     | React + Vite       |
| **Backend**      | Node.js + Express  |
| **Base de datos**| MySQL (Railway)    |
| **Despliegue**   | Vercel, Render     |
| **CI/CD**        | GitHub Actions     |

---

# ✅ Requisitos previos

- Node.js 18+
- npm 9+
- MySQL (solo si deseas probar)
- Git
- Cuentas en:
  - Vercel  
  - Render  
  - Railway  
  - GitHub  

---

# ▶️ Cómo ejecutar el frontend 

```bash
cd frontend
npm install
npm run dev



# ▶️ Cómo ejecutar el backend 

```bash
cd frontend
npm install
npm run dev



# 🌐 Links de despliegue

| Servicio         | Link |
|------------------|------|
| **Frontend (Vercel)** | *(a completar)* |
| **Backend (Render)**  | [https://backend-final-0740.onrender.com](https://backend-final-0740.onrender.com) |

---

# 📚 API – Documentación del Backend (Express + MySQL + Sequelize)

Este documento describe los endpoints disponibles en el backend del proyecto Todo List, incluyendo los recursos: **Usuarios**, **Roles** y **Todos (tareas)**.

### Base URL:


---

## 1️⃣ ENDPOINTS PARA TODOS (TAREAS)

Ruta base: `/api/todo`  
Modelo: **Todos** (Id, Title, Description, Status, Created_at)

---

### 1.1 Crear una tarea  
**POST /api/todo/**

#### Body (JSON):
```json
{
  "Title": "Nueva tarea",
  "Description": "Descripción opcional",
  "Status": "pending"
}