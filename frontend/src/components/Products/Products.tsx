import React, {useEffect, useState} from 'react';
import {productService} from "../../services/productService";
import ProductDetails from "./Product/ProductDetails";

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        //productService.getAll().then((data) => setProducts(data))
    }, []);

    return (
        <div>
            Products:
            {/*{products.map((prod, index) => <ProductDetails key={index} prod={prod}/>)}*/}
        </div>
    );
};

export default Products;