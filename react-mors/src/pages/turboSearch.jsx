import { render } from '@testing-library/react';
import React,  { useState, useEffect, componentDidMount, Component } from 'react';
import { useRef } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import '../App.css';


const TurboSearch = (props) => {

    const refTitle = useRef();
    const navigate = useNavigate()
    const goBack = () => navigate(-1);
    

    useEffect(() =>{  
        props.setServiceTitle(refTitle.current.innerHTML)
     })

    return (
        
        <div className="turboSearch">
            <div className='crumbs'>
                <Link to='/'>Магазин онлайн сервисов</Link>
                <p onClick={goBack}>{props.sectionTitle}</p>
                <p>{props.serviceTitle}</p>
                
            </div>
            <p className='turboSearch__title' ref={refTitle} >Турбопоиск</p>
            <p className='turboSearch__description'>Контекстная реклама ваших товаров, настроенная на целевые запросы в Яндекс и Google. Привлекает дополнительный трафик, увеличивает заказы, повышает узнаваемость компании и доверие со стороны покупателей.</p>
            <img src={props.srcPages}></img>
        </div>
    );
}

export default TurboSearch;
