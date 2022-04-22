/** @format */

import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

function Home(props) {
	function someFunc(e) {
		props.setHomeTag(e.target.getAttribute('tab'));
	}

	return (
		<div className='adjustable' onClick={(e) => someFunc(e)}>
			<Link to='/about/promo/redaktor-test/adjustable' tab='seo'>
				перейти на разводную
			</Link>
			<Link to='/about/promo/redaktor-test/adjustable' tab='media'>
				медиа
			</Link>
			<Link to='/about/promo/redaktor-test/adjustable' tab='seo'>
				seo
			</Link>
		</div>
	);
}

export default Home;
