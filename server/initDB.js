require("dotenv").config();
// Importa Mongoose y el modelo de usuario
const mongoose = require("mongoose");
const User = require("./src/models/userModel");

// Conexión a la base de datos
mongoose
    .connect(process.env.DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Conexión a MongoDB establecida"))
    .catch((err) => console.error("Error al conectar a MongoDB:", err));

// Datos de ejemplo para usuarios
const userData = [
    {
        name: "Benji",
        studentNumber: "20630277",
        phoneNumber: "3921022513",
        photoUrl:
            "https://media.licdn.com/dms/image/D4D03AQF7jX8kG9A6GQ/profile-displayphoto-shrink_800_800/0/1708014797139?e=1718236800&v=beta&t=RaFApDJj1m2DAz3u74_z7YHaO7Iuktb6adJxcJvoWzE",
    },
    // Puedes agregar más datos de ejemplo si lo deseas
];

// Función para inicializar la base de datos con los datos de ejemplo
async function initDB() {
    try {
        await User.deleteMany({});
        // Crea nuevos usuarios utilizando los datos de ejemplo
        await User.create(userData);
        console.log("[Init] Base de datos inicializada con éxito");
    } catch (error) {
        console.error("[Init] Error al inicializar la base de datos:", error);
    } finally {
        // Cierra la conexión a la base de datos
        mongoose.disconnect();
    }
}

// Ejecuta la función de inicialización
initDB();
