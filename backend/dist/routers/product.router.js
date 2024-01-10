"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = require("express");
const Product_model_1 = require("../models/Product.model");
const product_controller_1 = require("../controllers/product.controller");
const router = (0, express_1.Router)();
router.get('', product_controller_1.productController.getAll);
router.post('', async (req, res) => {
    try {
        const createdProduct = await Product_model_1.Product.create({ ...req.body });
        res.status(201).json(createdProduct);
    }
    catch (e) {
        res.status(400).json(e.message);
    }
});
router.get(':id', async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product_model_1.Product.findById(productId);
        if (product) {
            return res.json(product);
        }
        else {
            return res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});
exports.productRouter = router;
