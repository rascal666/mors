import { render } from '@testing-library/react';
import React,  { useState, useEffect, componentDidMount, Component } from 'react';
import { useRef } from 'react';
import {Link, useNavigate } from 'react-router-dom';
import '../App.css';


const TurboMiks = React.forwardRef (
    (props) => {

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
                <p className='turboSearch__title' ref={refTitle} >Турбомикс</p>
                <p className='turboSearch__description'>Услуга направлена на одновременное продвижение в органической и рекламной выдаче Яндекс и Google. Привлекает дополнительный трафик, увеличивает количество звонков и заявок из поисковых систем.</p>
                <img src={props.srcPages}></img>
            </div>
        );
    }
)

export default TurboMiks;
