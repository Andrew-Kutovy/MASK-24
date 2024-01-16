import joi from 'joi';
import {ECategory} from "../enums/category.enum";

export class ProductValidator {
    static price = joi.number().min(0).max(999999);
    static title = joi.string().min(2).max(55);
    static description = joi.string().min(5).max(999);
    static category = joi.valid(...Object.values(ECategory)).required();
    static photo = joi.string();

    static create = joi.object({
        price: this.price.required(),
        title: this.title.required(),
        description: this.description,
        category: this.category,
        photo: this.photo
    });

    static update = joi.object({
        price: this.price,
        title: this.title,
        description: this.description,
        category: this.category,
        photo: this.photo,
    });
}