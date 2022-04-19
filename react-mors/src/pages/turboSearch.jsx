/** @format */

import { render } from '@testing-library/react';
import React, { useState, useEffect, componentDidMount, Component } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import catalogCarts from '../bd/catalogCarts';
import Cart from '../component/cart';

const TurboSearch = (props) => {
	const refTitle = useRef();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	let catalogCartsAll = [];

	useEffect(() => {
		props.setServiceTitle(refTitle.current.innerHTML);
	});

	function F_catalogCarts() {
		for (let key in catalogCarts) {
			catalogCarts[key].forEach((catalogCartsElement) => {
				if (catalogCarts[key] != catalogCarts[props.homeTab]) {
					catalogCartsAll.push(catalogCartsElement);
				}
			});
		}
	}

	F_catalogCarts();

	let random = Math.floor(Math.random() * catalogCartsAll.length);
	let randomMin = random - 3;
	if (randomMin < 0) {
		randomMin = 0;
		random = 3;
	}

	console.log(random, randomMin);

	return (
		<div className='turboSearch servicePage'>
			<div className=''>
				<div className='crumbs'>
					<Link to='/'>Магазин онлайн сервисов</Link>
					<p onClick={goBack}>{props.sectionTitle}</p>
					<p>{props.serviceTitle}</p>
				</div>
				<p className='turboSearch__title' ref={refTitle}>
					Турбопоиск
				</p>
				<p className='turboSearch__description'>Контекстная реклама ваших товаров, настроенная на целевые запросы в Яндекс и Google. Привлекает дополнительный трафик, увеличивает заказы, повышает узнаваемость компании и доверие со стороны покупателей.</p>
				<img src={props.srcPages}></img>
			</div>
			<div className='infoBlock'>
				<div className='infoBlock__price'>
					<p>СТОИМОСТЬ И ЗАКАЗ УСЛУГИ</p>
					<p>{props.price}</p>
				</div>
				<div className='infoBlock__useful'>
					<p>МОЖЕТ ПРИГОДИТЬСЯ</p>
					{catalogCartsAll.slice(randomMin, random).map((cart, index) => (
						<Cart src={cart.src} key={index} title={cart.title} description={cart.description} price={cart.price} linkPages={cart.linkPages} priceNoteBefore={cart.priceNoteBefore} priceNote={cart.priceNote} setDataClickCart={props.setDataClickCart} />
					))}
				</div>
			</div>
		</div>
	);
};

export default TurboSearch;
