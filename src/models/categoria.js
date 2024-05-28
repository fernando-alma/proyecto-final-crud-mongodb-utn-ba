// Creamos el modelo de categorias

const mongoose = require('mongoose');

// Definimos el esquema de Categoría
const categoriaSchema = new mongoose.Schema({
  nombre: { type: String, required: true }
});

// Creamos el modelo de Categoría basado en el esquema
const Categoria = mongoose.model('Categoria', categoriaSchema);

module.exports = Categoria;
