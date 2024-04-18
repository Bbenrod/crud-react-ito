const express = require("express");
const {
    getAllUsers,
    updateUser,
    createUser,
} = require("../controllers/userController");
const user_router = express.Router();

// Define el nombre de la ruta
const USER_ROUTE_NAME = "users";

// Define las rutas para la colección de usuarios
user_router.get("/", getAllUsers);

user_router.post("/", createUser);

user_router.get("/:id", async (req, res) => {
    // Manejo de la solicitud GET para obtener un usuario por su ID
});

user_router.patch("/:id", updateUser);

user_router.delete("/:id", deleteUser);

module.exports = { user_router, USER_ROUTE_NAME };
