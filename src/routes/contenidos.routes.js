const { Router } = require ('express');
const contenidosControllers = require('../controllers/contenidos.controllers');
const router = Router();
router.get('/',contenidosControllers.ObtenerContenidos);
router.get('/:id',contenidosControllers.obtenerContenido);
router.post('/',contenidosControllers.guardarContenido);
router.put('/:id',contenidosControllers.actuaizarEstado);

module.exports = router;