import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('estas en la pagina principal, te invitamos a navegar a http://localhost:3000/ping')
});

app.get('/ping', (req, res) => {
    res.send('PONG')
});

app.listen(3000, () => {
    console.log('servidor funcionando en http://localhost:3000')
});