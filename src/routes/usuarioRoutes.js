// Configuramos las rutas de los usuarios

const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// Rutas CRUD para usuarios
router.post('/', usuarioController.createUsuario);
router.get('/', usuarioController.getUsuarios);
router.get('/:id', usuarioController.getUsuarioById);
router.put('/:id', usuarioController.updateUsuario);
router.delete('/:id', usuarioController.deleteUsuario);

// Ruta para mostrar el formulario de registro
router.get('/register', (req, res) => {
    res.render('register');
  });
  
  // Ruta para manejar el registro de usuarios
  router.post('/register', usuarioController.createUsuario);
  
  // Ruta para mostrar el formulario de inicio de sesión
  router.get('/login', (req, res) => {
    res.render('login');
  });
  
  // Ruta para manejar el inicio de sesión
  router.post('/login', usuarioController.login);

module.exports = router;





