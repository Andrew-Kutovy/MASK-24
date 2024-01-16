"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductEntity = exports.Product = void 0;
const mongoose_1 = require("mongoose");
const category_enum_1 = require("../enums/category.enum");
const productSchema = new mongoose_1.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String,
        enum: category_enum_1.ECategory,
        required: true,
    },
    photo: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.Product = (0, mongoose_1.model)('product', productSchema);
exports.ProductEntity = typeof exports.Product;
