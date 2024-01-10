import {model, Schema} from 'mongoose';

const productSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    price: {
        type: Number
    },
    photo: {
        type: String
    }
}, {
    timestamps: true,
    versionKey: false
})

export const Product = model('product', productSchema);