import { Router } from "express";

const router = Router();

router.get('/products', (req, res) => { //para crear una ruta de tipo get / '/products' para obtener todos los productos
    res.send('Listado de productos');
});

router.get('/', (req, res) => {
    res.send('Ruta principal');
});

export default router //dentro de Ruter van a estar las rutas que se fueron declarando en el archivo
//para importar desde el index