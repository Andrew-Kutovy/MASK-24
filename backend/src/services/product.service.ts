
import {IProduct} from "../types/product.type";
import {productRepository} from "../repositories/product.repository";

class ProductService {
    public async getAll(): Promise<IProduct[]> {
        return await productRepository.getAll();
    }
}

export const productService = new ProductService()