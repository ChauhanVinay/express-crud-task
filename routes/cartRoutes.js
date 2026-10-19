const express = require('express');
const router = express.Router();

//controller
const cartController = require("../controllers/cartController");

// GET /cart/:userId
router.get('/:userId', cartController.getCartForUser);

// POST /cart/:userId
router.post('/:userId', cartController.addProductToCart);

module.exports = router;