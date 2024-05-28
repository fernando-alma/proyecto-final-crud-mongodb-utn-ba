// Creamos el modelo de usuarios

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

// Defininimos el esquema de Usuario
const usuarioSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

// Usamos un Middleware para encriptar la contraseña antes de guardar el usuario
usuarioSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Creamos el modelo de Usuario basado en el esquema
const Usuario = mongoose.model('Usuario', usuarioSchema);

module.exports = Usuario;
