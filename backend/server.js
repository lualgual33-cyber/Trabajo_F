import express from "express";
import cors from "cors";
import todosRoutes from "./todos.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend activo!");
});

app.use("/todos", todosRoutes);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log("Servidor en puerto " + PORT));
