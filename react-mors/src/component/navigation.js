import React from 'react';
import {Link } from 'react-router-dom';
import '../App.css';

function Navigation (props) {

    function someFunc(e) {
        props.setHomeTab(e.target.getAttribute('tab'))
    }

    return (
        <div className="navigation" onClick={e => someFunc(e) }>
            <Link className='navigation__item navigation__home' to='/'>На главную</Link>
            <p  className='navigation__item navigation__placement' tab='placement'>Размещение товаров на торговой площадке</p>
            <p  className='navigation__item navigation__site' tab='site'>Создание сайта</p>
            <p  className='navigation__item navigation__seo' tab='seo'>Продвижение и SEO-оптимизация сайта</p>
            <p  className='navigation__item navigation__media' tab='media'>Медийная реклама</p>
            <p  className='navigation__item navigation__integration' tab='integration'>Интеграции</p>
            <p  className='navigation__item navigation__region' tab='region'>Региональное продвижение</p>
            <p  className='navigation__item navigation__all' tab='all'>Все приложения</p>
        </div>
    );
}

export default Navigation;