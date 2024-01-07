import React, {Dispatch, FC, PropsWithChildren, SetStateAction} from 'react';
import {IProduct} from "../../../interfaces/product.interface";

interface IProps extends PropsWithChildren {
    product: IProduct,
    setProdForUpdate: Dispatch<SetStateAction<IProduct>>
}
const ProductDetails: FC<IProps> = ({ product, setProdForUpdate }) => {

    return (
        <div>
            <div>name: {product.name}</div>
            <div>price: {product.price}</div>
            <button onClick={()=>setProdForUpdate(product)}>update</button>
            <button>delete</button>
            <button>details</button>
        </div>
    );
};

export default ProductDetails;