import React, { useState } from 'react';
import '../App.css';

import Cart from '../component/cart';
import catalogCarts from '../bd/catalogCarts';
import Navigation from '../component/navigation';


function Adjustable (props) {

  
    return (
        <div className="home">
            <Navigation setHomeTab={props.setHomeTab} />
            <div className="carts">
                {catalogCarts[props.homeTab].map((cart, index) => (
                    <Cart
                        src={cart.src}
                        key={index}
                        title={cart.title}
                        description={cart.description}
                        price={cart.price}
                        linkPages={cart.linkPages}
                        priceNoteBefore={cart.priceNoteBefore}
                        priceNote={cart.priceNote}
                        setDataClickCart={props.setDataClickCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default Adjustable;
