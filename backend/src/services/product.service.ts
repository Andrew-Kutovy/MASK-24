
import {IProduct} from "../types/product.type";
import {productRepository} from "../repositories/product.repository";
import {Product} from "../models/Product.model";

class ProductService {
    public async getAll(): Promise<IProduct[]> {
        return await productRepository.getAll();
    }
    public async createProduct(dto: IProduct): Promise<IProduct> {
        return await productRepository.createProduct(dto);
    }
    public async getById(productId: string): Promise<IProduct> {
        return await productRepository.findById(productId)
    }
    public async updateProduct(productId: string, dto: Partial<IProduct>): Promise<IProduct> {
        return await productRepository.updateProduct(productId, dto)
    }
    public async deleteProduct(productId: string) {
        return await productRepository.deleteProduct(productId)
    }
}

export const productService = new ProductService()