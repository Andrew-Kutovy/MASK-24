"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productController = void 0;
const product_service_1 = require("../services/product.service");
const mongoose = __importStar(require("mongoose"));
const api_error_1 = require("../errors/api.error");
const Product_model_1 = require("../models/Product.model");
class ProductController {
    async getAll(req, res, next) {
        try {
            const products = product_service_1.productService.getAll();
            return res.json(products);
        }
        catch (e) {
            next(e);
        }
    }
    async getById(req, res, next) {
        try {
            const { id } = req.params;
            if (!mongoose.isObjectIdOrHexString(id)) {
                throw new api_error_1.ApiError('Not valid ID', 404);
            }
            const product = await Product_model_1.Product.findById(id);
            if (!product) {
                throw new api_error_1.ApiError('Product not found', 404);
            }
            res.json(product);
        }
        catch (e) {
            next(e);
        }
    }
}
exports.productController = new ProductController();
