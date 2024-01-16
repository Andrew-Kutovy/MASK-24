import {Request, Response, NextFunction} from "express";
import {productRepository} from "../repositories/product.repository";
import {ApiError} from "../errors/api.error";

class ProductMiddleware {
    public async getByIdOrThrow (req: Request, res: Response, next: NextFunction) {
        try {
            const {productId} = req.params
            const product = await productRepository.findById(productId)

            if (!product) {
                throw new ApiError("product not found", 404)
            }
            req.res.locals = product;
            next()
        } catch (e) {
            next(e)
        }
    }
}

export const productMiddleware = new ProductMiddleware()