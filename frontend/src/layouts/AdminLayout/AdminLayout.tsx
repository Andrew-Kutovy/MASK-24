import React, {useEffect, useState} from 'react';
import Products from "../../components/Products/Products";
import ProductForm from "../../components/ProductForm/ProductForm";
import products from "../../components/Products/Products";
import {IProduct} from "../../interfaces/product.interface";
import {productService} from "../../services/productService";

const AdminLayout = () => {
    const [products, setProducts] = useState<IProduct[]>([])
    const [trigger, setTrigger] = useState<boolean>(null)
    const [prodForUpdate, setProdForUpdate] = useState<IProduct>(null)
    useEffect(() => {
        productService.getAll().then(({data}) => setProducts(data));
    }, [trigger]);
    return (
        <div>
            <ProductForm setTrigger={setTrigger} setProdForUpdate={setProdForUpdate} prodForUpdate={prodForUpdate}/>
            <Products products={products} setProdForUpdate={setProdForUpdate}/>
        </div>
    );
};

export default AdminLayout;