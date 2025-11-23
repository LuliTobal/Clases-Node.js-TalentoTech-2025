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
        if (product) { //si el producto existe lo devolvemos
            res.status(200).json(product);
        }else {
            res.status(404).json({message: 'El producto no se encuentra'})
        };
    } else{
        res.status(400).json(error)
    };
};

//agregadooooo
export const agregarProducto = async (req, res) =>{
    const nuevoProduct = req.body; //extraemos los datos que se envian en el body de la request post
    const products = await productsServices.allProducts();
    products.push(nuevoProduct);
    res.status(201).json(nuevoProduct);

    console.log('producto agregado')
    // if (id && name && price) {
    //     const nuevoProduct = productsServices.agregarProducts(id, name, price);
    //     res.status(201).json({
    //         message: 'Producto agregado correctamente',
    //         producto: nuevoProduct
    //     });
    // }else{
    //     return res.status(400).json({
    //         message: 'El producto no pudo ser agregado'});
    // };
};

