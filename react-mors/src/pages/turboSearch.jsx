import React, { useState, useRef } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import '../App.css';


function TurboSearch (props) {

    const navigate = useNavigate()
    const goBack = () => navigate(-1)

    console.log(props.sectionTitle);
    return (
        <div className="turboSearch">
            <div className='crumbs'>
                <Link to='/'>Магазин онлайн сервисов</Link>
                <p onClick={goBack}>{props.sectionTitle}</p>
                <p>{props.dataClickCart}</p>
                
            </div>
            <p className='turboSearch__title'>Турбопоиск</p>
            <p className='turboSearch__description'>Контекстная реклама ваших товаров, настроенная на целевые запросы в Яндекс и Google. Привлекает дополнительный трафик, увеличивает заказы, повышает узнаваемость компании и доверие со стороны покупателей.</p>
            <img src={props.srcPages}></img>
        </div>
    );
}

export default TurboSearch;
