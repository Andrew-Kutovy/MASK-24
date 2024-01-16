import {NextFunction, Request, Response} from "express";
import {IProduct} from "../types/product.type";
import {productService} from "../services/product.service";
import * as mongoose from "mongoose";
import {ApiError} from "../errors/api.error";
import {Product} from "../models/Product.model";
import {ProductValidator} from "../validators/product.validator";

class ProductController {
    public async getAll (req: Request, res: Response, next: NextFunction): Promise<Response<IProduct[]>> {
        try {
            const products = await productService.getAll()

            return res.json(products)
        } catch (e) {
            next(e)
        }
    }
    public async getById (req: Request, res: Response, next: NextFunction) {
        try {
            const product = req.res.locals;

            res.json(product);
        } catch (e) {
            next(e)
        }
    }
    public async createProduct (req: Request, res: Response, next: NextFunction): Promise<Response<IProduct>> {
        try {
        const createdProduct = await productService.createProduct(req.body);

        return res.status(201).json(createdProduct);
        } catch (e) {
            next(e)
        }
    }
    public async deleteProduct (req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const {productId} = req.params;

            await productService.deleteProduct(productId)

            res.status(204).json('product was deleted');
        } catch (e) {
            next(e)
        }
    }

    public async updateProduct (req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const product = await productService.updateProduct(req.params.productId, req.body)

            res.status(201).json(product);
        } catch (e) {
            next(e);
        }
    }
}

export const productController = new ProductController()