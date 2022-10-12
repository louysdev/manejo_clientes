const { Router } = require('express');
const router = Router();

const { renderDirectionForm, createDirection, renderDirections, renderEditForm, updateDirection, deleteDirection } = require('../controllers/directions.controller');
const { render } = require('../server');

//Nueva direccion
router.get('/direcciones/agregar', renderDirectionForm);
router.post('/direcciones/agregar', createDirection);

// Obtener todas las direccioens
router.get('/direcciones', renderDirections);

// Editar direcciones
router.get('/direcciones/editar/:id', renderEditForm);
router.put('/direcciones/editar/:id', updateDirection);

// Elimar direcciones
router.delete('/direcciones/eliminar/:id', deleteDirection)

module.exports = router;