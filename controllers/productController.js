const productService = require("../services/productServices");

const getProducts = (req, res) => {
    const products = productService.fetchAllProducts();
    res.send(products);
};

const getProductById = (req, res) => {
    const product = productService.fetchProductById(req.params.id);
    res.send(product);
};

const createProducts = (req, res) => {
    const result = productService.createNewProduct();
    res.send(result);
};

module.exports = {
    getProducts,
    getProductById,
    createProducts
};