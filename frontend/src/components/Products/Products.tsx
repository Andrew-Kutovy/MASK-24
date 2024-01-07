import React, {Dispatch, FC, PropsWithChildren, SetStateAction, useEffect, useState} from 'react';
import {productService} from "../../services/productService";
import ProductDetails from "./Product/ProductDetails";
import {AxiosResponse} from "axios";
import {IProduct} from "../../interfaces/product.interface";

interface IProps extends PropsWithChildren {
    products: IProduct[],
    setProdForUpdate: Dispatch<SetStateAction<IProduct>>
}
const Products: FC<IProps> = ({products, setProdForUpdate}) => {

    return (
        <div>
            {products.map((product, index) => <ProductDetails key={index} product={product}
                                                       setProdForUpdate={setProdForUpdate}/>)}
        </div>
    );
};

export default Products;