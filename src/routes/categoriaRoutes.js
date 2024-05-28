// Configuramos las rutas de las categorias

const express = require('express');
const router = express.Router();
const categoriaController = require('../controllers/categoriaController');

// Rutas CRUD para categorías
router.post('/', categoriaController.createCategoria);
router.get('/', categoriaController.getCategorias);
router.get('/:id', categoriaController.getCategoriaById);
router.put('/:id', categoriaController.updateCategoria);
router.delete('/:id', categoriaController.deleteCategoria);

module.exports = router;
