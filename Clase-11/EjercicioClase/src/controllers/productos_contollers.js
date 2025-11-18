import * as productsServices from '../services/productos_services.js';

export const getAllProducts = async (req, res) => {
    try{
        console.log('paso1')
        const products = await productsServices.allProducts();
        console.log(products)
        res.status(200).json(products);
    } catch (error){
        res.status(500)
    };
};

export const getProductsId = async (req, res) => {
    const id = req.params.id;
    console.log(id);
    if (id){
        const product = await productsServices.oneProduct(id);
        if (product) {
            res.status(200).json(product);
        }else {
            res.status(404).json({message: 'El producto no se encuentra'})
        };
    } else{
        res.status(400).json(error)
    };
    
};