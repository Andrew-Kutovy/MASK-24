import {createBrowserRouter, Navigate} from "react-router-dom";

import MainLayout from "./layouts/MainLayout/MainLayout";
import ProductsPage from "./pages/Products/ProductsPage";
import MaskDetailsPage from "./pages/MaskDetails/MaskDetailsPage";
import React from "react";
import AboutPage from "./pages/About/AboutPage";
import PaymentDeliveryPage from "./pages/PaymentDelivery/PaymentDeliveryPage";
import AccountPage from "./pages/Account/AccountPage";
import NotFoundPage from "./pages/NotFound/NotFoundPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Navigate to={'products'} />
            },
            {
                path: 'products',
                element: <ProductsPage/>,
                children: [
                    {
                        path: ':id',
                        element: <MaskDetailsPage />
                    }
                ]
            },
            {
                path: 'about',
                element: <AboutPage/>
            },
            {
                path: 'payment-delivery',
                element: <PaymentDeliveryPage/>
            },
            {
                path: 'account',
                element: <AccountPage/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFoundPage/>
    }
])

export {router};