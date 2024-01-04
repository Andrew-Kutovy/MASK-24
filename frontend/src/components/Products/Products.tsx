import React, {useEffect, useState} from 'react';
import {productService} from "../../services/productService";
import ProductDetails from "./Product/ProductDetails";
import {AxiosResponse} from "axios";
import {IProduct} from "../../interfaces/product.interface";

const Products = () => {
    const [products, setProducts] = useState<IProduct[]>([])

    useEffect(() => {
        productService.getAll().then((response: AxiosResponse<IProduct[]>) => {
            // Извлекаем данные из ответа и передаем их в setProducts
            setProducts(response.data);
        });
    }, []);

    return (
        <div>
            Products:
            {products.map((prod: IProduct) => <ProductDetails key={prod.id} prod={prod}/>)}
        </div>
    );
};

export default Products;