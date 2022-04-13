import React from 'react';
import '../App.css';

function Navigation (props) {

    return (
        <div className="navigation" onClick={e => props.setTab(e.target.getAttribute('tab'))}>
            <a className='navigation__item navigation__home' tab='home'>На главную</a>
            <a className='navigation__item navigation__placement' tab='placement'>Размещение товаров на торговой площадке</a>
            <a className='navigation__item navigation__site' tab='site'>Создание сайта</a>
            <a className='navigation__item navigation__seo' tab='seo'>Продвижение и SEO-оптимизация сайта</a>
            <a className='navigation__item navigation__media' tab='media'>Медийная реклама</a>
            <a className='navigation__item navigation__integration' tab='integration'>Интеграции</a>
            <a className='navigation__item navigation__region' tab='region'>Региональное продвижение</a>
            <a className='navigation__item navigation__all' tab='all'>Все приложения</a>
        </div>
    );
}

export default Navigation;