"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("../services/product.service");
class ProductController {
    async getAll(req, res, next) {
        try {
            const products = await product_service_1.productService.getAll();
            return res.json(products);
        }
        catch (e) {
            next(e);
        }
    }
    async getById(req, res, next) {
        try {
            const product = req.res.locals;
            res.json(product);
        }
        catch (e) {
            next(e);
        }
    }
    async createProduct(req, res, next) {
        try {
            const createdProduct = await product_service_1.productService.createProduct(req.body);
            return res.status(201).json(createdProduct);
        }
        catch (e) {
            next(e);
        }
    }
    async deleteProduct(req, res, next) {
        try {
            const { productId } = req.params;
            await product_service_1.productService.deleteProduct(productId);
            res.status(204).json('product was deleted');
        }
        catch (e) {
            next(e);
        }
    }
    async updateProduct(req, res, next) {
        try {
            const product = await product_service_1.productService.updateProduct(req.params.productId, req.body);
            res.status(201).json(product);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.productController = new ProductController();
