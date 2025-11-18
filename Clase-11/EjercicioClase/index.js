import express from 'express';
import cors from 'cors';
import productosRouter from './src/routes/productos_routes.js'

const app = express();

const PORT = process.env.PORT || 3000;

const corsConfig = {
    origin : ['http://localhost:3000'],
    method : ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders : ['Content-Type', 'Authorization'],
    credentials : true,
    optionsSuccessStatus: 204
};

app.use(cors(corsConfig));
//solo como comprobación
app.use((req, res, next) => {
    console.log(`Solicitud del tipo: ${req.method}. Hecha por dominio: ${req.url}`);
    next();
});
//enrutamiento
app.use(productosRouter);

//manejo de error 404
app.use((req, res) => {
    res.status(404).send('Se produjo un error al no encontra la ruta a la que quiere acceder')
});

app.listen(PORT, () => {
    console.log(`El servidor se esta ejecutando en http://localhost:${PORT}`)
});