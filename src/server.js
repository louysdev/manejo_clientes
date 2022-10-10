const express = require("express");
const path = require("path");

// Incializaciones
const app = express(); 

// Configuraciones
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));

// Middlewares
app.use(express.urlencoded({extended: false}));

// Variables globales

// Rutas
app.get("/", (req, res) => {
    res.send("Hola mundo")
})

// Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;