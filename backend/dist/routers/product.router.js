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
exports.productRouter = void 0;
const express_1 = require("express");
const Product_model_1 = require("../models/Product.model");
const product_validator_1 = require("../validators/product.validator");
const api_error_1 = require("../errors/api.error");
const mongoose = __importStar(require("mongoose"));
const router = (0, express_1.Router)();
router.get('', async (req, res, next) => {
    const products = await Product_model_1.Product.find();
    return res.json(products);
});
router.post('', async (req, res, next) => {
    try {
        const { error, value } = product_validator_1.ProductValidator.create.validate(req.body);
        if (error) {
            throw new Error(error.message);
        }
        const createdProduct = await Product_model_1.Product.create(value);
        res.status(201).json(createdProduct);
    }
    catch (e) {
        next(e);
    }
});
router.get('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!mongoose.isObjectIdOrHexString(id)) {
            throw new api_error_1.ApiError("Not valid ID", 400);
        }
        const product = await Product_model_1.Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.json(product);
    }
    catch (e) {
        next(e);
    }
});
router.delete('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!mongoose.isObjectIdOrHexString(id)) {
            throw new api_error_1.ApiError("Not valid ID", 400);
        }
        const product = await Product_model_1.Product.findById(id);
        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await Product_model_1.Product.deleteOne({ _id: id });
        return res.status(204).json('product was deleted');
    }
    catch (e) {
        next(e);
    }
});
router.put('/:id', async (req, res, next) => {
    try {
        const { id } = req.params;
        if (!mongoose.isObjectIdOrHexString(id)) {
            throw new api_error_1.ApiError("Not valid ID", 400);
        }
        const { error, value } = product_validator_1.ProductValidator.update.validate(req.body);
        if (error) {
            throw new api_error_1.ApiError(error.message, 400);
        }
        const user = await Product_model_1.Product.findByIdAndUpdate(id, value, {
            returnDocument: "after",
        });
        if (!user) {
            throw new api_error_1.ApiError("User not found", 404);
        }
        res.status(201).json(user);
    }
    catch (e) {
        next(e);
    }
});
exports.productRouter = router;
