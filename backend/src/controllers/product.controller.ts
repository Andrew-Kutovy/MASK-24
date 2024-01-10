import {NextFunction, Request, Response} from "express";
import {IProduct} from "../types/product.type";
import {productService} from "../services/product.service";
import * as mongoose from "mongoose";
import {ApiError} from "../errors/api.error";
import {Product} from "../models/Product.model";

class ProductController {
    public async getAll (req: Request, res: Response, next: NextFunction): Promise<Response<IProduct[]>> {
        try {
            const products = productService.getAll()

            return res.json(products)
        } catch (e) {
            next(e)
        }
    }
    public async getById (req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;
            if (!mongoose.isObjectIdOrHexString(id)) {
                throw new ApiError('Not valid ID', 404)
            }
            const product = await Product.findById(id);
            if (!product) {
                throw new ApiError('Product not found', 404)
            }
            res.json(product)
        } catch (e) {
            next(e)
        }
    }
}

export const productController = new ProductController()