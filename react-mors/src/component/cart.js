import React from 'react';
import '../App.css';


function Cart (props) {
    return (

        <div className="cart" >
            <a href={props.link}><img src={props.src}></img></a>
            <a href={props.link}><p className='cart__title'>{props.title}</p></a>

            <p className='cart__description'>{props.description}
            </p>
            <div className='cart__price' >
                <p className='price__title'>{props.priceNoteBefore} {props.price}{props.priceNote}</p>
                <a href={props.link}><button className='price__button'>Подробнее</button></a>
            </div>

        </div>
    );
}

export default Cart;