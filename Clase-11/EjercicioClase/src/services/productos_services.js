import { obtenerProductos, agregarProducto } from "../models/products_models.js";

export const allProducts = async () => {
    const products = await obtenerProductos();
    return products;
}

export const oneProduct = async (id) => {
    const products = await obtenerProductos();
    return products.find(product => product.id == id);
};

//agregadoooo
export const agregarProducts = async (id, name, price) => {
    const producto = {
        id,
        name,
        price
    };
    console.log(producto)
    agregarProducto(producto);
};
