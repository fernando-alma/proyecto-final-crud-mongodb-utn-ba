// Agregamos el MIDDLEWARE para proteger las rutas

const jwt = require('jsonwebtoken');

// Middleware para verificar la validez del token JWT
module.exports = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');

  if (!token) return res.status(401).json({ message: 'Acceso denegado' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    res.status(400).json({ message: 'Token no válido' });
  }
};
