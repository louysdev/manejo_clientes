const express = require("express");
const { create } = require("express-handlebars");
const path = require("path");
const morgan = require("morgan");
const methodOverride = require("method-override");
const flash = require("connect-flash");
const session = require("express-session");

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
app.use(morgan("dev"));
app.use(express.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
}));
app.use(flash())

// Variables globales
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg");
    res.locals.error_msg = req.flash("error_msg");
    next();
});

// Rutas
app.use(require("./routes/index.routes"));
app.use(require("./routes/directions.routes"));
app.use(require("./routes/clients.routes"));

// Archivos estaticos
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;