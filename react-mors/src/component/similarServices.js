/** @format */

import { render } from '@testing-library/react';
import React from 'react';
import '../App.css';
import Cart from '../component/cart';
import catalogCarts from '../bd/catalogCarts';

const SimilarServices = (props) => {


    return (
        <div className='similarServices'>{catalogCarts[props.homeTag].slice(props.randomMin, props.random).map((cart, index) => (cart.title != props.serviceTitle ? <Cart src={cart.src} key={index} title={cart.title} description={cart.description} price={cart.price} linkPages={cart.linkPages} priceNoteBefore={cart.priceNoteBefore} priceNote={cart.priceNote} setDataClickCart={props.setDataClickCart} /> : false))}</div>
    );
};

export default SimilarServices;
