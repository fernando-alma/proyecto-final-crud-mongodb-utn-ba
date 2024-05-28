// Creamos el modelo de productos

const mongoose = require('mongoose');

// Defininimos el esquema de Producto
const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  categoria: { type: mongoose.Schema.Types.ObjectId, ref: 'Categoria', required: true }
});

// Creamos el modelo de Producto basado en el esquema
const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;


