const { Router } = require('express');
const router = Router();

const { renderDirectionForm, createDirection, renderDirections, renderEditForm, updateDirection, deleteDirection } = require('../controllers/directions.controller');
const { render } = require('../server');

const {isAuthenticated}= require("../helpers/auth");

//Nueva direccion
router.get('/direcciones/agregar', isAuthenticated,  renderDirectionForm);
router.post('/direcciones/agregar', isAuthenticated, createDirection);

// Obtener todas las direccioens
router.get('/direcciones', isAuthenticated, renderDirections);

// Editar direcciones
router.get('/direcciones/editar/:id',  isAuthenticated, renderEditForm);
router.put('/direcciones/editar/:id',  isAuthenticated, updateDirection);

// Elimar direcciones
router.delete('/direcciones/eliminar/:id',  isAuthenticated, deleteDirection)

module.exports = router;