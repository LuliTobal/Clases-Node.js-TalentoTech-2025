const products = [
    {id: 1, name: 'Product 1', price: 25000},
    {id: 2, name: 'Product 2', price: 55200}
];

export const allProducts = async () => {
    return products;
};

export const oneProduct = async (id) => {
    return products.find(product => product.id == id);
};