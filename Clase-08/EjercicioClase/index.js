import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use((req, res, next) => {
    console.log(`el tipo de solicitud es: ${req.method}`);
    //Configurar CORS desde los HEADERS -- Acá solo se habilitan esos headers, despues 
    //en la capa de logica hay que hacer la validación de esos headers
    res.header('Access-Control-Allow-Origin', 'https://example.com'); //Esto es para permitir los accesos de solicitudes provenientes de la URL especificada
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE'); //Acá elegimos que metodos permitir que funsionen en la API
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization'); //Aca se permite enviar tokens de acceso en el header authorization
    res.header('Access-Control-Allow-Credentials', 'true'); //Desde aca permito enviar cookies desde mi API
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

//Ruta parametrizada con PATH PARAMS
//URL ejemplo: http://localhost:3000/items/12
app.get('/items/:id', (req, res) => { //declaro solicitud de tipo get, y declaro el endpoint al tener ":" lo que este despues(en este caso id) pasa a ser una variable que trae info
    const itemId = req.params.id; //acá guardo en la variable la info, significa: desde la solicitud traer los parametros id
    res.send(`El id del producto seleccionado: ${itemId}`)
});

//Ruta prametrizada con QUERY PARAMS -- permite concatenar solicitudes
//URL ejemplo: http://localhost:3000/item?category=carteras&price=20300
app.get('/item', (req, res) =>{
    const categoria = req.query.category;  //significa: desde la solicitud traer el parametro category
    const precio = req.query.price;
    res.send(`Producto disponible
        Categoria: ${categoria}
        Precio: ${precio}`);
});



//Manejo de error 404
app.use((req, res, next) => {
    res.status(404).send('Ocurrió un error y no se encuentra el recurso o la ruta es invalida')
})

app.listen(PORT, () => {
    console.log(`El servidor se esta ejecutando en el siguiente link:
        http://localhost:${PORT}`)
});