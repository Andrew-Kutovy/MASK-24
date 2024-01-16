import {model, Schema} from 'mongoose';
import {ECategory} from "../enums/category.enum";
import {IProduct} from "../types/product.type";

const productSchema = new Schema<IProduct>({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    category: {
        type: String,
        enum: ECategory,
        required: true,
    },
    photo: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
})

export const Product = model<IProduct>('product', productSchema);
export const ProductEntity = typeof Product;