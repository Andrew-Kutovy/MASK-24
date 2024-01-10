import {Request, Response, Router} from "express"
import {IProduct} from "../types/product.type";
import {Product} from "../models/Product.model";
import {productController} from "../controllers/product.controller";

const router = Router();

router.get('', productController.getAll)

router.post('', async (req: Request, res: Response) => {
    try {
        const createdProduct = await Product.create({...req.body});
        res.status(201).json(createdProduct);
    } catch (e) {
        res.status(400).json(e.message);
    }
})

router.get(':id', async (req: Request, res: Response): Promise<Response<IProduct | null>> => {
    const productId = req.params.id;

    try {
        // Поиск продукта по айди
        const product = await Product.findById(productId);

        // Если продукт найден, возвращаем его
        if (product) {
            return res.json(product);
        } else {
            // Если продукт не найден, возвращаем 404
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        // Если произошла ошибка при поиске, возвращаем 500 с сообщением об ошибке
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});
export const productRouter = router