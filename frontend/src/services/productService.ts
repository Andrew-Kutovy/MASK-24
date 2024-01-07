import {apiService, IRes} from "./apiService";
import {urls} from "../constants/urls";
import {IProduct} from "../interfaces/product.interface";
import {type} from "node:os";
import {AxiosResponse} from "axios";

const productService = {
    getAll:():IRes<IProduct[]> => apiService.get(urls.products.base),
    create: (data: IProduct): IRes<IProduct> => apiService.post(urls.products.base, data),
    getById:(id: number):IRes<IProduct> => apiService.get(urls.products.byId(id)),
    updateById:(id:number, data:IProduct) => apiService.put<IProduct>(urls.products.byId(id), data),
    deleteById:(id:number):IRes<void> => apiService.delete(urls.products.byId(id))
}

export {productService}