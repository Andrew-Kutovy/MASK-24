import {IProduct} from "../types/product.type";
import {Product} from "../models/Product.model";

class ProductRepository {
    public async getAll(): Promise<IProduct[]> {
        return await Product.find();
    }
    public async findById(productId: string): Promise<IProduct> {
        return await Product.findById(productId);
    }
    public async createProduct(dto: IProduct): Promise<IProduct> {
        return await Product.create(dto);
    }
    public async updateProduct(productId: string, dto: Partial<IProduct>): Promise<IProduct> {
        return await Product.findByIdAndUpdate(productId, dto, {
            returnDocument: "after"
        })
    }
    public async deleteProduct(productId: string) {
        return await Product.deleteOne({_id: productId})
    }
}

export const productRepository = new ProductRepository()
