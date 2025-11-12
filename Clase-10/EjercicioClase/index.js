import express from 'express';
import cors from 'cors';
import productRouter from './src/Routes/products_routes.js'

const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());

// const configCors = {
// }

app.use('/api', productRouter) //concatenamos /api + lo declarado en products_routes.js y dependiendo eso va a acceder a la ruta completa 
//cuando en el navegador ponga http://localhost:3000/api/products voy a acceder a la ruta expecífica declarada en products_routes.jss

//Manejo de code 404
app.use((req, res, next) => {
    res.status(404).send('La ruta a la que quiere acceder es inválida')
});

app.listen(PORT, () => {
    console.log(`El servidor se esta ejecutando en http://localhost:${PORT}`)
});