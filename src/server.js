const express = require("express");
const { create } = require("express-handlebars");
const path = require("path");

// Incializaciones
const app = express(); 

// Configuraciones
app.set("port", process.env.PORT || 4000);
app.set("views", path.join(__dirname, "views"));
app.engine(".hbs", create({
    defaultLayout: "main",
    layoutsDir: path.join(app.get("views"), "layouts"),
    partialsDir: path.join(app.get("views"), "partials"),
    extname: ".hbs"
}).engine
);
app.set("view engine", ".hbs");

// Middlewares
app.use(express.urlencoded({extended: false}));

// Variables globales

// Rutas
app.use(require("./routes/index.routes"));

// Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;