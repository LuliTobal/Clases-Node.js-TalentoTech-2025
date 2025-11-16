import { Router } from "express";
import {getAllProducts, getProductId} from'../Controllers/products_controllers.js'

const router = Router();

/* si no tuvieramos controladores
router.get('/products', (req, res) => { //para crear una ruta de tipo get / '/products' para obtener todos los productos
    res.send('Listado de productos');
});
*/
//como si tenemos controlador solo le pasamos la función:
router.get('/products', getAllProducts)

router.get('/principal', (req, res) => {
    res.send('Ruta principal');
});

router.get('/product/:id', getProductId);

export default router //dentro de router van a estar las rutas que se fueron declarando en el archivo
//para importar desde el index