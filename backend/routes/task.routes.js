const express = require('express');
const router = express.Router();
const validarToken = require('../middlewares/auth.middleware')

const { crearTarea, traerTareas, actualizarTarea, eliminarTarea } = require('../controllers/task.controller')

router.post('/', validarToken, crearTarea);
router.get('/', validarToken, traerTareas);
router.put('/:id', validarToken, actualizarTarea);
router.delete('/:id', validarToken, eliminarTarea);

module.exports = router;