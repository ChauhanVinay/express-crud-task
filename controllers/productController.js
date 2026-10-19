const getProducts = (req, res) => {
    res.send("Fetching all products");
}

const getProductById = (req, res) => {
    res.send(`Fetching product with ID: ${req.params.id}`);
}

const createProducts = (req, res) => {
    res.send("Adding new Product");
}

module.exports = {
    getProducts,
    getProductById,
    createProducts
};