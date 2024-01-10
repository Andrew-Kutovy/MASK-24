"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const product_repository_1 = require("../repositories/product.repository");
class ProductService {
    async getAll() {
        return await product_repository_1.productRepository.getAll();
    }
}
exports.productService = new ProductService();
