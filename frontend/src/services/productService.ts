import {apiService} from "./apiService";
import {urls} from "../constants/urls";
import {IProduct} from "../interfaces/product.interface";
import {type} from "node:os";
import {AxiosResponse} from "axios";

type IRes<T> = Promise<AxiosResponse<T>>
const productService = {
    getAll:():IRes<IProduct[]> => apiService.get(urls.products),
    getById:(id: number):IRes<IProduct> => apiService.get(urls.products + id)
}

export {productService}