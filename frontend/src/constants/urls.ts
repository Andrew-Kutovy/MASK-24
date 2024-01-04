const baseURL = process.env.REACT_APP_API;

const products = '/products';
const paymentDelivery = '/payment-delivery';
const about = '/about';
const account = '/account';

const urls = {
    paymentDelivery,
    about,
    account,
    products
        //byId:(id:number)=>`${products}/${id}`
}

export {baseURL, urls}