import express from 'express';
import {join , dirname} from 'path'; //para traer la ruta absoluta
import { fileURLToPath } from 'url'; //para crear url

const __filename = fileURLToPath(import.meta.url); //nombre del archivo en el que estamos actualmente
const __dirname = dirname(__filename);

const app = express(); //cramos el servidor
//cracion de midlleware para archivos estáticos
//.use le agrega funcionalidades al servidor, da servicios para que use el cliente, le da rutas
app.use(express.static(join(__dirname, 'public'))); //pone la ruta hasta un nivel atras del archivo actual (carpeta: ServidorEstatico) y despues entra en carpeta public
//arriba se una un middleware que muestra una pagina estatica


////////////////////////////////////////////////////////////////////////////////////////////
//PARA EXPLICAR MIDDLEWARES --- hay que comentar la linea 11
//////////////////////////////////////////////////////////////////////////////////////////////////

/*Esto se va a ejecutar cada vez que llegue una solicitud a mi servidor */

//primero se ejecuta este codigo y despues se lo deriba a la ruta a la que el usuario queria navegar porque usa el middleware next
app.use((req, res, next) => { //con el middleware next es que el comando a continuar sea el de la rut al que quiso savegar el ususario
    console.log(`datos recibidos ${req.method} y ${req.url}`); //est se ejecuta cada vez que llegu una solicitud al servidor
    next();
});

app.get('/testmiddlewares', (req, res) => {
    res.send('Hello desde Express con middleware');
});

///////////////////////////////////////////////////////////////////////////////////////////////////
//HASTA ACA
////////////////////////////////////////////////////////////////////////////////////////////



const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en: http://localhost:${PORT}`)
});