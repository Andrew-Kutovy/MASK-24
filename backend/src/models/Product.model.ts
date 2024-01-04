import {model, Schema} from 'mongoose';

const productSchema = new Schema({
    name: {
        type: String
    },
    price: {
        type: Number
    }
}, {
    timestamps: true,
    versionKey: false
})

export const Product = model('product', productSchema);