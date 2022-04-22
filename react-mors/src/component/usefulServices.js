

/** @format */

import { render } from '@testing-library/react';
import React from 'react';
import '../App.css';
import Cart from './cart';
import catalogCarts from '../bd/catalogCarts';

const UsefulServices = (props) => {


    return (
        <div className='usefulServices'>
            <p>МОЖЕТ ПРИГОДИТЬСЯ</p>
            {props.catalogCartsAll.slice(props.randomMin, props.random).map((cart, index) => (
                <Cart src={cart.src} key={index} title={cart.title} description={cart.description} price={cart.price} linkPages={cart.linkPages} priceNoteBefore={cart.priceNoteBefore} priceNote={cart.priceNote} setDataClickCart={props.setDataClickCart} />
            ))}
        </div>
    );
};

export default UsefulServices;
