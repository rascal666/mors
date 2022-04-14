import React, { useState, useRef } from 'react';
import '../App.css';


function TurboMiks (props) {


    return (
        <div className="turboMiks">
            <p className='turboMiks__title'>Турбомикс</p>
            <p className='turboMiks__description'>Контекстная реклама ваших товаров, настроенная на целевые запросы в Яндекс и Google. Привлекает дополнительный трафик, увеличивает заказы, повышает узнаваемость компании и доверие со стороны покупателей.</p>
            <img src={props.srcPages}></img>
        </div>
    );
}

export default TurboMiks;
