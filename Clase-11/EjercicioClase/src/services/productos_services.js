import { obtenerProductos } from "../models/products_models.js";

export const allProducts = async () => {
    const products = await obtenerProductos();
    return products;
}

export const oneProduct = async (id) => {
    const products = await obtenerProductos();
    return products.find(product => product.id == id);
};