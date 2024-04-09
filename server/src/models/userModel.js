// Importa Mongoose
const mongoose = require("mongoose");

// Define el esquema del usuario
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    studentNumber: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    photoUrl: { type: String, required: false },
});

// Crea y exporta el modelo de usuario
module.exports = mongoose.model("User", userSchema);
