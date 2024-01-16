import {Document} from "mongoose";
import {ECategory} from "../enums/category.enum";
export interface IProduct extends Document {
    title: string;
    price: number;
    description?: string;
    category: ECategory;
    photo?: string;
}