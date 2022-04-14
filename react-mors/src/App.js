import React, { useState, useRef } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import TurboSearch from './pages/turboSearch';
import Adjustable from './pages/adjustable';

import TurboMiks from './pages/turboMiks'


function App () {
  const [homeTab, setHomeTab] = useState('seo');

  const [dataClickCart, setDataClickCart] = useState('');
  const [sectionTitle, setSectionTitle] = useState('');

  return (
    <div className="App">
      <Routes>
        <Route path="/" component={Home}>
          <Route index element={<Home setHomeTab = {setHomeTab} setDataClickCart={setDataClickCart}/> }  />
          <Route path="adjustable" element={<Adjustable homeTab={homeTab} setHomeTab={setHomeTab} setDataClickCart={setDataClickCart} setSectionTitle={setSectionTitle}/> }  />
          <Route path="turboSearch" element={<TurboSearch homeTab={homeTab} dataClickCart ={dataClickCart} sectionTitle={sectionTitle}/> }  />
          <Route path="turboMiks" element={<TurboMiks homeTab={homeTab} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
