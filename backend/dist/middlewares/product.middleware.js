"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productMiddleware = void 0;
const product_repository_1 = require("../repositories/product.repository");
const api_error_1 = require("../errors/api.error");
class ProductMiddleware {
    async getByIdOrThrow(req, res, next) {
        try {
            const { productId } = req.params;
            const product = await product_repository_1.productRepository.findById(productId);
            if (!product) {
                throw new api_error_1.ApiError("product not found", 404);
            }
            req.res.locals = product;
            next();
        }
        catch (e) {
            next(e);
        }
    }
}
exports.productMiddleware = new ProductMiddleware();
