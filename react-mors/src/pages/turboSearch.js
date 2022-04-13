import React, { useState, useRef } from 'react';
import '../App.css';


function TurboSearch (props) {


    return (
        <div className="turboSearch">
            <p className='turboSearch__title'>Турбопоиск</p>
            <p className='turboSearch__description'>Контекстная реклама ваших товаров, настроенная на целевые запросы в Яндекс и Google. Привлекает дополнительный трафик, увеличивает заказы, повышает узнаваемость компании и доверие со стороны покупателей.</p>
            <img src={props.srcPages}></img>
        </div>
    );
}

export default TurboSearch;
