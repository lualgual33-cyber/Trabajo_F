import express from "express";
import pool from "./db.js";

const router = express.Router();

// Obtener todos
router.get("/", async (req, res) => {
    try {
        const [rows] = await pool.query("SELECT * FROM todos ORDER BY id DESC");
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener tareas" });
    }
});

// Crear tarea
router.post("/", async (req, res) => {
    try {
        const { title, description } = req.body;

        if (!title) {
            return res.status(400).json({ error: "El título es obligatorio" });
        }

        const [result] = await pool.query(
            "INSERT INTO todos (title, description) VALUES (?, ?)",
            [title, description]
        );

        res.json({ id: result.insertId, title, description, status: "pending" });

    } catch (error) {
        res.status(500).json({ error: "Error al crear tarea" });
    }
});

// Editar tarea
router.put("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;

        const [result] = await pool.query(
            "UPDATE todos SET title=?, description=?, status=? WHERE id=?",
            [title, description, status, id]
        );

        res.json({ id, title, description, status });

    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la tarea" });
    }
});

// Eliminar tarea
router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;

        await pool.query("DELETE FROM todos WHERE id=?", [id]);

        res.json({ message: "Tarea eliminada" });

    } catch (error) {
        res.status(500).json({ error: "Error al eliminar la tarea" });
    }
});

export default router;
