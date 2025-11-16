import express from 'express';
import cors from 'cors';
import productRouter from './src/Routes/products_routes.js'

//declaramos la app
const app = express();

//configuramos el puerto
const PORT = process.env.PORT || 3000; //busca en el .env el puerto declarado y sino lo declara 3000
//app.use(express.json());

//armamos objeto de configuración de cors
const corsConfig = {
    origin:['http://localhost:3000'],
    method: ['GET', 'PUT', 'POST', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    exposedHeaders: ['Content-Length'],
    credentials: true,
    optionsSuccessStatus: 204
};

//configuramos los cors dento de la app
app.use(cors(corsConfig));

//middleware para ver el tipo de solicitud y de donde proviene
app.use((req, res, next) => {
    console.log(`datos received at: ${req.method} - ${req.url}`);
    next();
});

app.use('/', productRouter) //concatenamos /api + lo declarado en products_routes.js y dependiendo eso va a acceder a la ruta completa 
//cuando en el navegador ponga http://localhost:3000/api/products voy a acceder a la ruta expecífica declarada en products_routes.jss

//middleware para rutas no encontradas, error 404
app.use((req, res) => {
    res.status(404).send('Se produjo un error al no encontra la ruta a la que quiere acceder')
})

app.listen(PORT, () => {
    console.log(`El servidor se esta ejecutando en http://localhost:${PORT}`)
});