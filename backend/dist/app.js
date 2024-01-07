"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mongoose = __importStar(require("mongoose"));
const config_1 = require("./configs/config");
const Product_model_1 = require("./models/Product.model");
const cors_1 = __importDefault(require("cors"));
const PORT = 3001;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204,
}));
app.get('/products', async (req, res) => {
    const products = await Product_model_1.Product.find();
    return res.json(products);
});
app.post('/products', async (req, res) => {
    try {
        const createdProduct = await Product_model_1.Product.create({ ...req.body });
        res.status(201).json(createdProduct);
    }
    catch (e) {
        res.status(400).json(e.message);
    }
});
app.get('/products/:id', async (req, res) => {
    const productId = req.params.id;
    try {
        const product = await Product_model_1.Product.findById(productId);
        if (product) {
            return res.json(product);
        }
        else {
            return res.status(404).json({ message: 'Product not found' });
        }
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal Server Error' });
    }
});
app.listen(PORT, async () => {
    await mongoose.connect(config_1.configs.DB_URI);
    console.log(`server started on port: ${PORT}`);
});
