import { Router } from "express";
import {getAllProducts, getProductsId} from '../controllers/productos_contollers.js'

const router = Router();

router.get('/', (req,res) => {
    res.send('Ruta pricipal')
});

router.get('/products', getAllProducts);

router.get('/product/:id', getProductsId);

export default router;