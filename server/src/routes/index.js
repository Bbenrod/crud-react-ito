const express = require("express");
const { USER_ROUTE_NAME, user_router } = require("./userRoute");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Hello, world!");
});

router.use(`/${USER_ROUTE_NAME}`, user_router);

const crearRutas = (app) => {
    app.use("/api", router);
};

module.exports = crearRutas;
