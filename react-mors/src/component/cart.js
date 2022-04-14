import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';




function Cart (props) {
    return (
        <div key={props.id} className="cart" onClick={() => props.setDataClickCart(props.title)}>
                <Link to={{pathname:props.linkPages}}>
                    <img src={props.src}></img>
                </Link>
                <a href={props.linkPages}>
                    <p className="cart__title">{props.title}</p>
                </a>

                <p className="cart__description">{props.description}</p>
                <div className="cart__price">
                    <p className="price__title">
                        {props.priceNoteBefore} {props.price}
                        {props.priceNote}
                    </p>
                    <a href={props.linkPages}>
                        <button className="price__button">Подробнее</button>
                    </a>
                </div>
            </div>
    );
}

export default Cart;