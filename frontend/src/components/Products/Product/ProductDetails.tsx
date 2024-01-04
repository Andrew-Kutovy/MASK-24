import React from 'react';
import {IProduct} from "../../../interfaces/product.interface";

const ProductDetails: React.FC<{ prod: IProduct }> = ({ prod }) => {
    return (
        <div>
            <p>{prod.name}</p>
            <p>{prod.price}</p>
        </div>
    );
};

export default ProductDetails;