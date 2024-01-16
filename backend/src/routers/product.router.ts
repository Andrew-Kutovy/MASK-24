import {NextFunction, Request, Response, Router} from "express"
import {IProduct} from "../types/product.type";
import {Product} from "../models/Product.model";
import {productController} from "../controllers/product.controller";
import {ProductValidator} from "../validators/product.validator";
import {productMiddleware} from "../middlewares/product.middleware";
import {commonMiddleware} from "../middlewares/common.middleware";

const router = Router();

router.get('', productController.getAll)

router.post('', commonMiddleware.isBodyValid(ProductValidator.create), productController.createProduct)

router.get('/:productId',
    commonMiddleware.isIdValid("productId"),
    productMiddleware.getByIdOrThrow,
    productController.getById);

router.delete('/:productId',
    commonMiddleware.isIdValid("productId"),
    productController.deleteProduct);

router.put('/:productId', commonMiddleware.isIdValid("productId"), productController.updateProduct);

export const productRouter = router