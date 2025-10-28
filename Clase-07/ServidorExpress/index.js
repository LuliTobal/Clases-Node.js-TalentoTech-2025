import express from 'express';

const app = express(); //instanciamos la app y dentro ya contiene el servidor

//declaramos dentro del servidor una ruta del tipo get:
app.get('/', (req, res) => { //es la ruta pricipal porque despues de la / no se escribio nada
    res.send('Este HOLA MUNDO! es desde express')
});

app.get('/2', (req, res) => { //si en la ruta agrego /2 me va a traer lo que esta dentro de este
    res.send('Este HOLA MUNDO! es desde la segunda ruta con express')
});

//selleccionamos en que puerto queremos que escuche
app.listen(3000, () => {
    console.log('servidor funcionando en http://localhost:3000')
});

