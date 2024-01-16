"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepository = void 0;
const Product_model_1 = require("../models/Product.model");
class ProductRepository {
    async getAll() {
        return await Product_model_1.Product.find();
    }
    async findById(productId) {
        return await Product_model_1.Product.findById(productId);
    }
    async createProduct(dto) {
        return await Product_model_1.Product.create(dto);
    }
    async updateProduct(productId, dto) {
        return await Product_model_1.Product.findByIdAndUpdate(productId, dto, {
            returnDocument: "after"
        });
    }
    async deleteProduct(productId) {
        return await Product_model_1.Product.deleteOne({ _id: productId });
    }
}
exports.productRepository = new ProductRepository();
