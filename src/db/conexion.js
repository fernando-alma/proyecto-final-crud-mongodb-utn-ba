// Configuramos la conexión a MongoDB

const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Configuramos el dotenv para utilizar variables de entorno
dotenv.config();

// Establecemos la conexión con MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));
