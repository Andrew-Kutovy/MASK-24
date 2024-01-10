import {IProduct} from "../types/product.type";
import {Product} from "../models/Product.model";

class ProductRepository {
    public async getAll(): Promise<IProduct[]> {
        return await Product.find();
    }
}

export const productRepository = new ProductRepository()
