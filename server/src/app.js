const express = require("express");
const mongoose = require("mongoose");
const crearRutas = require("./routes");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

// Conexión a MongoDB
mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Conexión a MongoDB establecida"))
    .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Middlewares
app.use(express.json());

// Rutas
crearRutas(app);

// Servidor
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
