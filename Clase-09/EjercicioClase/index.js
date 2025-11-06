import express from 'express';
import cors from 'cors'; //importamos la libreria cors

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
//Creamos un objeto con las configuraciones de cors
const configCors = {
    origin: ['https://example.com', 'http://otrodominio.com'], //desde que domino se pueden enviar requests
    method: ['GET', 'PUT', 'POST', 'DELETE'], //metodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'], //encabezados permitidos
    exposedHeaders: ['Content-Length'], //cabeceras visibles al cliente
    credentials: true, //permitir cookies o credenciales
    maxAge: 600, //cache preflight
    optionSuccessStatus: 204 //respuesta preflight* exitosa
    //*preflight son requests previas que se le hace al servidor antes de la request formal
};
//para configurar el middleware global ejecutar los middlewares
app.use(cors(configCors)); //le decimos que app usa de la libreria cors el objeto creado con las configuraciones

////////////////////
//PATH PARAMS
////////////////////

//creamos el endpoint usando path params --> usa el : para indicar que es una variable, y trae la info que está despues de la barra
app.get('/items/:id', (req, res) =>{
    //ejemplo de url: http://localhost:3000/47
    //la linea siguiente = de la require toma el parametro que se pasa como id, y ese dato (47) se convierte en el valor de esa variable
    const idProduct = req.params.id; //accede e a la info que se pasa por la url y toma como valor de esa variable lo que viene
    res.send(`Este producto tiene el id n°${idProduct}`)
});

////////////////////
//QUERY PARAMS
////////////////////

//Creamos el endpoint usando querys
app.get('/item', (req, res) =>{
    //ejemplo url: http://localhost:3000/item?categoria=carteras&price=5478256
    // usamos el = para del lado de la izquierda pasar la "variable" y de la derecha el valor que corresponde a la misma y el & para concatenar variables
    const category = req.query.categoria; //creamos la variable categoria y le damos el valor que va a obtener de la url (categoria=cartera)
    const price = req.query.price;//y aca creamos y obtenemos el valor de la url (price=5478256)
    res.send(`El producto pertenece a la categoría: ${category} y su valor es de: $${price}`)
})

//Manejamos el error 404 con el middleware next - las solucutudes que van a una url inexistente
app.use((req, res, next) =>{
    res.status(404).send('El recurso no se encuentra o la ruta es inválida')
})

app.listen(PORT, () =>{
    console.log(`El servidor fue iniciado y esta siendo ejecuado en: http://localhost:${PORT}`)
})
