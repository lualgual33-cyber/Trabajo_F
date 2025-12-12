import { useEffect, useState } from "react";
import {
    getTodos,
    createTodo,
    deleteTodo,
    updateTodo,
} from "./services/api";
import "./App.css"; // 👈 asegúrate de importar el CSS

function App() {
    const [todos, setTodos] = useState([]);

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [editing, setEditing] = useState(null);

    const loadTodos = async () => {
        const data = await getTodos();
        setTodos(data);
    };

    useEffect(() => {
        loadTodos();
    }, []);

    const handleCreate = async () => {
        if (!title.trim()) {
            alert("El título es obligatorio");
            return;
        }
        await createTodo({ title, description, status: "pendiente" });
        setTitle("");
        setDescription("");
        loadTodos();
    };

    const startEdit = (todo) => {
        setEditing(todo.id);
        setTitle(todo.title);
        setDescription(todo.description);
    };

    const handleUpdate = async () => {
        await updateTodo(editing, {
            title,
            description,
            status: "pendiente",
        });
        setEditing(null);
        setTitle("");
        setDescription("");
        loadTodos();
    };

    const toggleStatus = async (todo) => {
        const nuevoEstado =
            todo.status === "pendiente" ? "completado" : "pendiente";

        await updateTodo(todo.id, {
            title: todo.title,
            description: todo.description,
            status: nuevoEstado,
        });

        loadTodos();
    };

    return (
        <div className="container">
            <h1>Gestión de tareas</h1>

            <input
                className="input"
                placeholder="Título (obligatorio)"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                className="input"
                placeholder="Descripción (opcional)"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />

            {editing ? (
                <button className="btn primary" onClick={handleUpdate}>
                    Guardar cambios
                </button>
            ) : (
                <button className="btn primary" onClick={handleCreate}>
                    Crear tarea
                </button>
            )}

            <ul className="lista">
                {todos.map((todo) => (
                    <li key={todo.id} className="todo-card">
                        <h3>{todo.title}</h3>
                        <p>{todo.description}</p>

                        <p>
                            Estado:{" "}
                            <span
                                className={
                                    todo.status === "pendiente"
                                        ? "status pendiente"
                                        : "status completado"
                                }
                            >
                                {todo.status}
                            </span>
                        </p>

                        <p>Fecha: {new Date(todo.created_at).toLocaleString()}</p>

                        <div className="acciones">
                            <button
                                className="btn warning"
                                onClick={() => toggleStatus(todo)}
                            >
                                {todo.status === "pendiente"
                                    ? "Marcar completada"
                                    : "Marcar pendiente"}
                            </button>

                            <button
                                className="btn info"
                                onClick={() => startEdit(todo)}
                            >
                                Editar
                            </button>

                            <button
                                className="btn danger"
                                onClick={() => deleteTodo(todo.id)}
                            >
                                Eliminar
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
