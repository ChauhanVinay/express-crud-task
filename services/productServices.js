

//Service logic for  fetching all products
const fetchAllProducts = () => {
    return 'Fetching all products';
};

//Service logic for fetching a single product by ID
const fetchProductById = (id) => {
    return `Fetching product with ID: ${id}`;
};

//Service logic for adding a product
const createNewProduct = () => {
    return `Adding a new product`;
};

module.exports = {
    fetchAllProducts,
    fetchProductById,
    createNewProduct
};