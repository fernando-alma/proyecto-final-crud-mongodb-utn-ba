// Configuramos las rutas de los productos

const express = require('express');
const router = express.Router();
const productosController = require('../controllers/productosController');
const verifyToken = require('../middleware/verifyToken');

// Rutas CRUD para productos
router.post('/', productosController.createProducto);
router.get('/', productosController.getProductos);
router.get('/:id', productosController.getProductoById);
router.put('/:id', productosController.updateProducto);
router.delete('/:id', productosController.deleteProducto);
router.post('/', verifyToken, productosController.createProducto);
router.put('/:id', verifyToken, productosController.updateProducto);
router.delete('/:id', verifyToken, productosController.deleteProducto);

module.exports = router;




