import React from 'react';
import css from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div className={css.Header}>
            <div className={css.LeftLinks}>
                <NavLink to={'products'}>Products</NavLink>
                <NavLink to={'about'}>About</NavLink>
                <NavLink to={'payment-delivery'}>Payment & Delivery</NavLink>
            </div>
            <div className={css.RightLinks}>
                <NavLink to={'account'}>My Account</NavLink>
            </div>
        </div>
    );
};

export default Header;