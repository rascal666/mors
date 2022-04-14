import React from 'react';
import {Link } from 'react-router-dom';
import '../App.css';

function Navigation (props) {

    function someFunc(e) {
        props.setHomeTab(e.target.getAttribute('tab'))
        props.setSectionTitle(e.target.innerHTML)
    }

    return (
        <div className="navigation" onClick={e => someFunc(e) }>
            <Link className='navigation__item navigation__home' to='/'>На главную</Link>
            <Link to={} className='navigation__item navigation__placement' tab='placement'>Размещение товаров на торговой площадке</Link>
            <Link to={} className='navigation__item navigation__site' tab='site'>Создание сайта</Link>
            <Link to={} className='navigation__item navigation__seo' tab='seo'>Продвижение и SEO-оптимизация сайта</Link>
            <Link to={} className='navigation__item navigation__media' tab='media'>Медийная реклама</Link>
            <Link to={} className='navigation__item navigation__integration' tab='integration'>Интеграции</Link>
            <Link to={} className='navigation__item navigation__region' tab='region'>Региональное продвижение</Link>
            <Link to={} className='navigation__item navigation__all' tab='all'>Все приложения</Link>
        </div>
        
    );
}

export default Navigation;