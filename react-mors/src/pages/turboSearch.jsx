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
import SimilarServices from '../component/similarServices';
import UsefulServices from '../component/usefulServices';
import PriseServices from '../component/priseServices/priseServices';

const TurboSearch = (props) => {
	const refTitle = useRef();

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
					<Link to='/adjustable'>{props.sectionTitle}</Link>
					<p>{props.serviceTitle}</p>
				</div>
				<p className='turboSearch__title' ref={refTitle}>
					Турбопоиск
				</p>
				<p className='turboSearch__description'>Контекстная реклама ваших товаров, настроенная на целевые запросы в Яндекс и Google. Привлекает дополнительный трафик, увеличивает заказы, повышает узнаваемость компании и доверие со стороны покупателей.</p>
				<img src={serviseImg} alt='' />

				<SimilarServices homeTag={props.homeTag} randomMin={props.randomMin} random={props.random} serviceTitle={props.serviceTitle} />
			</div>
			<div className='infoBlock'>
				<PriseServices servisePrice={servisePrice.price} servisePriceNote={servisePrice.priceNote} erviceTitle={props.serviceTitle} />
				<UsefulServices catalogCartsAll={props.catalogCartsAll} randomMin={props.randomMin} random={props.random} serviceTitle={props.serviceTitle} />
			</div>
		</div>
	);
};

export default TurboSearch;
