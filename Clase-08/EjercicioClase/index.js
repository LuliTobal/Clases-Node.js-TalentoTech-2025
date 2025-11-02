import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`el tipo de solicitud es: ${req.method}`);
    next();
});

app.get('/HTML', (req, res) =>{
    res.send('<h1>HOLA MUNDO Mandando HTML</h1>')
});

app.get('/JSON', (req, res) =>{
    res.send({productos: [
        {
            nombre: 'remera',
            precio: 20043
        },
        {
            nombre: 'short',
            precio: 58000
        }
    ]});
});

app.listen(PORT, () => {
    console.log(`El servidor se esta ejecutando en el siguiente link:
        http://localhost:${PORT}`)
});