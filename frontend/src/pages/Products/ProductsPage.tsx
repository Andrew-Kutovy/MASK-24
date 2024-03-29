import React, {useEffect, useState} from 'react';
import Products from "../../components/Products/Products";
import {IProduct} from "../../interfaces/product.interface";
import {productService} from "../../services/productService";

const ProductsPage = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [trigger, setTrigger] = useState<boolean>(null)
    const [prodForUpdate, setProdForUpdate] = useState<IProduct>(null)

    useEffect(() => {
        productService.getAll().then(({data}) => setProducts(data));
    }, []);

    return (
        <div>
            <Products products={products} setProdForUpdate={setProdForUpdate}/>
        </div>
    );
};

export default ProductsPage;