import express, {NextFunction, Request, Response} from "express";
import * as mongoose from "mongoose";
import {configs} from "./configs/config";
import cors from "cors"
import {productRouter} from "./routers/product.router";
import {ApiError} from "./errors/api.error";
import {userRouter} from "./routers/user.router";

const PORT = 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
// app.use(cors({
//     origin: 'http://localhost:3000',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
//     optionsSuccessStatus: 204,
// }));

app.use('/products', productRouter)
app.use('/users', userRouter)

app.use((error: ApiError, req: Request, res: Response, next: NextFunction) => {
    const status = error.status || 500;

    res.status(status).json({
        message: error.message,
        status: error.status,
    });
});

app.listen(PORT, async () => {
    await mongoose.connect(configs.DB_URI);
    console.log(`server started on port: ${PORT}`)
})


