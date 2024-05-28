// Configuramos el Servidor

// Importamos módulos necesarios
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const { engine } = require('express-handlebars');
const path = require('path');
const productoRoutes = require('./src/routes/productoRoutes');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const categoriaRoutes = require('./src/routes/categoriaRoutes');
const authRoutes = require('./src/routes/authRoutes');


// Configuramos dotenv para utilizar variables de entorno
dotenv.config();

// Creamos una instancia de Express
const app = express();

// Configuramos Handlebars como motor de plantillas
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// Middleware para parsear JSON y servir archivos estáticos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Conectamos a MongoDB , -> previamente usé { useNewUrlParser: true, useUnifiedTopology: true } pero ya no se utilizan a partir de mongoose 6 en adelante
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Rutas
app.use('/api/productos', productoRoutes);
app.use('/api/usuarios', usuarioRoutes);
app.use('/api/categorias', categoriaRoutes);
app.use('/api/auth', authRoutes);



// Ruta principal
app.get('/', (req, res) => {
  res.render('home', { title: 'Inicio' });
});

// Iniciamos el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

