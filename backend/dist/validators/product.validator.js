"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductValidator = void 0;
const joi_1 = __importDefault(require("joi"));
const category_enum_1 = require("../enums/category.enum");
class ProductValidator {
}
exports.ProductValidator = ProductValidator;
_a = ProductValidator;
ProductValidator.price = joi_1.default.number().min(0).max(999999);
ProductValidator.title = joi_1.default.string().min(2).max(55);
ProductValidator.description = joi_1.default.string().min(5).max(999);
ProductValidator.category = joi_1.default.valid(...Object.values(category_enum_1.ECategory)).required();
ProductValidator.photo = joi_1.default.string();
ProductValidator.create = joi_1.default.object({
    price: _a.price.required(),
    title: _a.title.required(),
    description: _a.description,
    category: _a.category,
    photo: _a.photo
});
ProductValidator.update = joi_1.default.object({
    price: _a.price,
    title: _a.title,
    description: _a.description,
    category: _a.category,
    photo: _a.photo,
});
