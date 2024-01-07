import React, {Dispatch, FC, PropsWithChildren, SetStateAction} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";
import {IProduct} from "../../interfaces/product.interface";
import {productService} from "../../services/productService";

interface IProps extends PropsWithChildren {
    setTrigger: Dispatch<SetStateAction<boolean>>,
    setProdForUpdate: Dispatch<SetStateAction<IProduct>>,
    prodForUpdate: IProduct
}

const ProductForm: FC<IProps> = ({setTrigger,prodForUpdate,  setProdForUpdate}) => {
    const {reset, register, handleSubmit, setValue} = useForm<IProduct>();

    const save:SubmitHandler<IProduct> = async (product) => {
        await productService.create(product)
        setTrigger(prev => !prev)
        reset()
    };
    const update:SubmitHandler<IProduct> = async (product) => {
        // await productService.updateById(prodForUpdate.id, product)
        // setProdForUpdate(null)
        // setTrigger(prev => !prev)
        // reset()
    }

    return (
        <form onSubmit={handleSubmit(prodForUpdate?update:save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <input type="text" placeholder={'price'} {...register('price')}/>
            <button>{prodForUpdate?'update': 'save'}</button>
        </form>
    );
};

export default ProductForm;