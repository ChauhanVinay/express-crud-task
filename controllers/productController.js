const productService = require("../services/productServices");

const getProducts = (req, res, next) => {
   try {
    const filePath = productService.fetchAllProducts();
    res.sendFile(filePath);
  } catch (err) {
    next(err);
  }
};

const getProductById = (req, res, next) => {
    try {
    const { id } = req.params;
    if (isNaN(id)) {
      const error = new Error('Invalid Product ID');
      error.statusCode = 400;
      return next(error);
    }
    const product = productService.fetchProductById(id);
    res.send(product);
  } catch (err) {
    next(err);
  }
};

const createProducts = (req, res, next) => {
    try {
    const { productName } = req.body;
    if (!productName) {
      const error = new Error('Product name is required');
      error.statusCode = 400;
      return next(error);
    }
    const newProduct = productService.createNewProduct(req.body);
    res.status(201).json(newProduct);
  } catch (err) {
    next(err);
  }
};

module.exports = {
    getProducts,
    getProductById,
    createProducts
};