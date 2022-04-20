/** @format */

import { render } from '@testing-library/react';
import React, { useState, useEffect, componentDidMount, Component } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import catalogCarts from '../bd/catalogCarts';
import arrHeading from '../bd/forPages';
import F_arrHeading from '../modules/f_sectionTag';
import Cart from '../component/cart';

const TurboMiks = React.forwardRef((props) => {
	const refTitle = useRef();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	useEffect(() => {
		props.setServiceTitle(refTitle.current.innerHTML);
		F_arrHeading(arrHeading, props.setHomeTag, props.serviceTitle, props.setSectionTitle);
	});

	return (
		<div className='turboSearch servicePage'>
			<div className='crumbs'>
				<Link to='/'>Магазин онлайн сервисов</Link>
				<p onClick={goBack}>{props.sectionTitle}</p>
				<p>{props.serviceTitle}</p>
			</div>
			<p className='turboSearch__title' ref={refTitle}>
				Турбомикс
			</p>
			<p className='turboSearch__description'>Услуга направлена на одновременное продвижение в органической и рекламной выдаче Яндекс и Google. Привлекает дополнительный трафик, увеличивает количество звонков и заявок из поисковых систем.</p>
			<img src={props.srcPages}></img>
			<div className='similarServices'>{catalogCarts[props.homeTag].slice(props.randomMin, props.random).map((cart, index) => (cart.title != props.serviceTitle ? <Cart src={cart.src} key={index} title={cart.title} description={cart.description} price={cart.price} linkPages={cart.linkPages} priceNoteBefore={cart.priceNoteBefore} priceNote={cart.priceNote} setDataClickCart={props.setDataClickCart} /> : false))}</div>
			<div className='infoBlock'>
				<div className='infoBlock__price'>
					<p>СТОИМОСТЬ И ЗАКАЗ УСЛУГИ</p>
					<p>{props.price}</p>
				</div>
				<div className='infoBlock__useful'>
					<p>МОЖЕТ ПРИГОДИТЬСЯ</p>
					{props.catalogCartsAll.slice(props.randomMin, props.random).map((cart, index) => (
						<Cart src={cart.src} key={index} title={cart.title} description={cart.description} price={cart.price} linkPages={cart.linkPages} priceNoteBefore={cart.priceNoteBefore} priceNote={cart.priceNote} setDataClickCart={props.setDataClickCart} />
					))}
				</div>
			</div>
		</div>
	);
});

export default TurboMiks;
