const express = require("express");
const { getAllUsers } = require("../controllers/userController");
const user_router = express.Router();

// Define el nombre de la ruta
const USER_ROUTE_NAME = "users";

// Define las rutas para la colección de usuarios
user_router.get("/", getAllUsers);

user_router.post("/", async (req, res) => {
    // Manejo de la solicitud POST para crear un nuevo usuario
});

user_router.get("/:id", async (req, res) => {
    // Manejo de la solicitud GET para obtener un usuario por su ID
});

user_router.put("/:id", async (req, res) => {
    // Manejo de la solicitud PUT para actualizar un usuario por su ID
});

user_router.delete("/:id", async (req, res) => {
    // Manejo de la solicitud DELETE para eliminar un usuario por su ID
});

module.exports = { user_router, USER_ROUTE_NAME };
