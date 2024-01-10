"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRepository = void 0;
const Product_model_1 = require("../models/Product.model");
class ProductRepository {
    async getAll() {
        return await Product_model_1.Product.find();
    }
}
exports.productRepository = new ProductRepository();
