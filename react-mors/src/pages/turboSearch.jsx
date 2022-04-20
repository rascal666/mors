/** @format */

import { render } from '@testing-library/react';
import React, { useState, useEffect } from 'react';
import { useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';
import f_servisePrice from '../modules/f_servisePrice';
import f_serviseImg from '../modules/f_serviseImg';
import Cart from '../component/cart';
import catalogCarts from '../bd/catalogCarts';
import arrHeading from '../bd/forPages';
import F_arrHeading from '../modules/f_sectionTag';

const TurboSearch = (props) => {
	const refTitle = useRef();
	const navigate = useNavigate();
	const goBack = () => navigate(-1);

	useEffect(() => {
		props.setServiceTitle(refTitle.current.innerHTML);
		F_arrHeading(arrHeading, props.setHomeTag, props.serviceTitle, props.setSectionTitle);
	});

	const servisePrice = f_servisePrice(props.homeTag, props.serviceTitle);
	const serviseImg = f_serviseImg(props.homeTag, props.serviceTitle);

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
				<img src={serviseImg} alt='' />
				<div className='similarServices'>{catalogCarts[props.homeTag].slice(props.randomMin, props.random).map((cart, index) => (cart.title != props.serviceTitle ? <Cart src={cart.src} key={index} title={cart.title} description={cart.description} price={cart.price} linkPages={cart.linkPages} priceNoteBefore={cart.priceNoteBefore} priceNote={cart.priceNote} setDataClickCart={props.setDataClickCart} /> : false))}</div>
			</div>
			<div className='infoBlock'>
				<div className='infoBlock__price'>
					<p>СТОИМОСТЬ И ЗАКАЗ УСЛУГИ</p>
					<p>{servisePrice}</p>
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
};

export default TurboSearch;
