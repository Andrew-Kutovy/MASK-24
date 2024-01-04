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

app.listen(PORT, async () => {
    await mongoose.connect(configs.DB_URI);
    console.log(`server started on port: ${PORT}`)
})


