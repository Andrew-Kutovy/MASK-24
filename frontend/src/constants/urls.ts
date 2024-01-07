const baseURL = process.env.REACT_APP_API;

const products = '/products';

const urls = {
    products: {
        base: products,
        byId:(id:number)=>`${products}/${id}`
    }
}

export {baseURL, urls}