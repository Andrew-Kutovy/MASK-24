import {NextFunction, Request, Response, Router} from "express"
import {IProduct} from "../types/product.type";
import {Product} from "../models/Product.model";
import {productController} from "../controllers/product.controller";
import {ProductValidator} from "../validators/product.validator";
import {ApiError} from "../errors/api.error";
import * as mongoose from "mongoose";

const router = Router();

router.get('',
    async (req: Request, res: Response, next: NextFunction): Promise<Response<IProduct[]>> => {
        const products = await Product.find();
        return res.json(products);
}
    //productController.getAll
)

router.post('', async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const {error, value} = ProductValidator.create.validate(req.body)
        if (error) {
            throw new Error(error.message)
        }
        const createdProduct = await Product.create(value);

        res.status(201).json(createdProduct);
    } catch (e) {
        next(e)
    }
})

router.get('/:id', async (req: Request, res: Response, next: NextFunction): Promise<Response<IProduct | null>> => {
    try {
        const {id} = req.params;
        if (!mongoose.isObjectIdOrHexString(id)) {
            throw new ApiError("Not valid ID", 400);
        }
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        return res.json(product);
    } catch (e) {
        next(e)
    }
});

router.delete('/:id', async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    try {
        const {id} = req.params;
        if (!mongoose.isObjectIdOrHexString(id)) {
            throw new ApiError("Not valid ID", 400);
        }
        const product = await Product.findById(id);

        if (!product) {
            return res.status(404).json({ message: 'Product not found' });
        }
        await Product.deleteOne({_id: id})
        return res.status(204).json('product was deleted');
    } catch (e) {
        next(e)
    }
});

router.put('/:id',
    async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { id } = req.params;
            if (!mongoose.isObjectIdOrHexString(id)) {
                throw new ApiError("Not valid ID", 400);
            }
            const { error, value } = ProductValidator.update.validate(req.body);
            if (error) {
                throw new ApiError(error.message, 400);
            }
            const user = await Product.findByIdAndUpdate(id, value, {
                returnDocument: "after",
            });
            if (!user) {
                throw new ApiError("User not found", 404);
            }
            res.status(201).json(user);
        } catch (e) {
            next(e);
        }
});

export const productRouter = router