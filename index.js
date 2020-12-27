import express from 'express';
import router from './routes/index.js';

const app = express();

// Definir puerto
const port = process.env.PORT || 4000;

// Habilitar pug
app.set('view engine', 'pug');

// Obtener año actual
app.use( (req, res, next) => {
    res.locals.yearActual = new Date().getFullYear();
    res.locals.nombresitio = 'Agencia de Viajes';
    next();
});

// Agregar "router"
app.use('/', router);

// Definir la carpeta pública
app.use(express.static('public'));

app.listen( port, () => {
    console.log(`El servidor está corriendo en el puerto ${port}`);
});