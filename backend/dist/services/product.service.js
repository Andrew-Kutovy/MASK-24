"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productService = void 0;
const product_repository_1 = require("../repositories/product.repository");
class ProductService {
    async getAll() {
        return await product_repository_1.productRepository.getAll();
    }
    async createProduct(dto) {
        return await product_repository_1.productRepository.createProduct(dto);
    }
    async getById(productId) {
        return await product_repository_1.productRepository.findById(productId);
    }
    async updateProduct(productId, dto) {
        return await product_repository_1.productRepository.updateProduct(productId, dto);
    }
    async deleteProduct(productId) {
        return await product_repository_1.productRepository.deleteProduct(productId);
    }
}
exports.productService = new ProductService();
