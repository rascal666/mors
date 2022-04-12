import React from 'react';
import '../App.css';
import catalogCarts from '../bd/catalogCarts';

function Navigation (props) {

    return (
        <div className="navigation" onClick={e => props.setTab(e.target.getAttribute('tab'))}>
            <a className='navigation__home'>На главную</a>
            <a className='navigation__placement'>Размещение товаров на торговой площадке</a>
            <a className='navigation__site'>Создание сайта</a>
            <a className='navigation__seo' tab='seo'>Продвижение и SEO-оптимизация сайта</a>
            <a className='navigation__media' tab='media'>Медийная реклама</a>
            <a className='navigation__integration'>Интеграции</a>
            <a className='navigation__region'>Региональное продвижение</a>
            <a className='navigation__all'>Все приложения</a>
        </div>
    );
}

export default Navigation;