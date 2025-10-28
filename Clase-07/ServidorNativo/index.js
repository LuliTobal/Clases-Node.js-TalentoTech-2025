const http = require('http'); //importacion de libreria con commonjs

const server = http.createServer((req, res) => { //creamos una variable con el metodo crateServer de la libreria http que nos crea un servidor
//req --> para obtener los datos que vengan del requerimiento de la solicitud
//res --> midlleboard para enviar la respuesta al cliente
    res.statusCode = 200; // establecemos el codigo de respuesta 200
    res.setHeader('Content-Type', 'text/plain'); //seteamos un header texto plano
    res.end('Hola Mundo!!'); //info o dato que va a ir en la respuesta
});

//una vez que se ejecuta el metodo el servidor queda funcionando esperando solicitudes
server.listen(3000, () => { //en el servidor usamos el metodo .listen para definir el puerto en que vamos a escuchar (3000) puede estar ocupado y te va a avisar
    console.log('Servidor corriendo en http://localhost:3000') //nos sirve para comprobar que el servidor corre
});