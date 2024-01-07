import express, {Request, Response} from "express";
import * as mongoose from "mongoose";
import {configs} from "./configs/config";
import {Product} from "./models/Product.model";
import {IProduct} from "./types/product.type";
import cors from "cors"

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));

app.get('/products',
    async (req: Request, res: Response): Promise<Response<IProduct[]>> => {
    const products = await Product.find();

    return res.json(products);
})

app.post('/products', async (req: Request, res: Response) => {
    try {
        const createdProduct = await Product.create({...req.body});
        res.status(201).json(createdProduct);
    } catch (e) {
        res.status(400).json(e.message);
    }
    })

app.get('/products/:id', async (req: Request, res: Response): Promise<Response<IProduct | null>> => {
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

app.listen(PORT, async () => {
    await mongoose.connect(configs.DB_URI);
    console.log(`server started on port: ${PORT}`)
})


