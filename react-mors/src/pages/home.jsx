import React, { useState } from 'react';
import '../App.css';
import { Routes, Route, Link } from 'react-router-dom';


function Home (props) {

    function someFunc(e) {
        props.setHomeTab(e.target.getAttribute('tab'))
    }

    return (
        <div className="adjustable" onClick={e => someFunc(e)}>
            <Link to="/adjustable" tab='seo'>перейти на разводную</Link>
            <Link to="/adjustable" tab='media' >медиа</Link>
            <Link to="/adjustable" tab='seo' >seo</Link>
        </div>
    );
}

export default Home;
