const getCartForUser = (req, res, next) => {
    try {
    const { userId } = req.params;
    if (!userId) {
      const error = new Error('User ID required');
      error.statusCode = 400;
      return next(error);
    }
    res.send(`Fetching cart for user with ID: ${userId}`);
  } catch (err) {
    next(err);
  }
}

const addProductToCart =  (req, res) => {
    try {
    const { userId } = req.params;
    res.send(`Adding product to cart for user with ID: ${userId}`);
  } catch (err) {
    next(err);
  }
}

module.exports = {
    getCartForUser,
    addProductToCart
};