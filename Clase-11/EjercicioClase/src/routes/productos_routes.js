import { Router } from "express";
import {getAllProducts, getProductsId, agregarProducto} from '../controllers/productos_contollers.js'

const router = Router();

router.get('/', (req,res) => {
    res.send('Ruta pricipal')
});

router.get('/products', getAllProducts);

router.get('/product/:id', getProductsId);

//agremaos la logica para crear un nuevo producto
router.post('/addproduct', agregarProducto);

export default router;