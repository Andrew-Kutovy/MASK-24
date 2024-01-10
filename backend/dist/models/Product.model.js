"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = void 0;
const mongoose_1 = require("mongoose");
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
    photo: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
});
exports.Product = (0, mongoose_1.model)('product', productSchema);
