import joi from 'joi';

export class ProductValidator {
    static price = joi.number().min(0).max(999999);
    static title = joi.string().min(2).max(55);
    static description = joi.string().min(5).max(999);
    static photo = joi.string();

    static create = joi.object({
        price: this.price.required(),
        title: this.title.required(),
        description: this.description,
        photo: this.photo
    });

    static update = joi.object({
        price: this.price,
        title: this.title,
        description: this.description,
        photo: this.photo,
    });
}