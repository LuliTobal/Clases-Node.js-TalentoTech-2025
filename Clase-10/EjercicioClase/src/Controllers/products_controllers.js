import {allProducts , oneProduct} from '../Services/products_services.js'

//funcion controladora de la solicitud
export const getAllProducts = async (req, res) => {
    const products = await allProducts() //aca la función que traigo desde servivior que me trae los datos de los productos
    res.status(200).json(products); //esta es la respuesta que me va a enviar un json con los productos
};

//función controladora de la solicitud - controlador que obtiene un producto por id
export const getProductId = async (req, res) => {
    const id = req.params.id; //tomo el valor del id por el parametro tomado del endpoint (la url)
    const product = await oneProduct(id); //le paso a la funcion por parametros el valor del id obtenido de la url
    if (product) {
        res.status(200).json(product); //si la respuesta es true (por ende trae info del product) devuelve (legible) el producto
    } else {
        res.status(404).json({message: 'Producto no encontrado'});
    };
};