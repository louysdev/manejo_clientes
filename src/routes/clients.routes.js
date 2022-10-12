const { Router } = require("express");
const router = Router();

const {renderSinginForm, renderSingupForm, singin, singup, logout} = require("../controllers/clients.controller");

router.get("/clientes/registro", renderSingupForm);

router.post("/clientes/registro", singup);

router.get("/clientes/iniciar-sesion", renderSinginForm);

router.post("/clientes/iniciar-sesion", singin);

router.get("/clientes/cerrar-sesion", logout);


module.exports = router;