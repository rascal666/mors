/** @format */

import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import TurboSearch from './pages/turboSearch';
import Adjustable from './pages/adjustable';
import TurboMiks from './pages/turboMiks';
import f_random from './modules/f_useful';

function App () {
  const [homeTag, setHomeTag] = useState('media');
  const [sectionTitle, setSectionTitle] = useState('');
  const [serviceTitle, setServiceTitle] = useState('');


  // const [constPropsPage, setConstPropsPage] = useState(
  //   [sectionTitle = { sectionTitle },
  //   serviceTitle = { serviceTitle }]);

  let random = Math.floor(Math.random() * f_random(homeTag).length);
  let randomMin = random - 3;
  if (randomMin < 0) {
    randomMin = 0;
    random = 3;
  }

  // const constPropsPage = [sectionTitle = { sectionTitle }, serviceTitle = { serviceTitle }];

  return (
    <div className='App'>
      <Routes>
        <Route path='/' component={Home}>
          <Route index element={<Home setHomeTag={setHomeTag} />} />
          <Route path='adjustable' element={<Adjustable homeTag={homeTag} setHomeTag={setHomeTag} />} />


          <Route path='turboSearch' element=
            {<TurboSearch
              homeTag={homeTag}
              sectionTitle={sectionTitle}
              serviceTitle={serviceTitle}
              setServiceTitle={setServiceTitle}
              random={random}
              randomMin={randomMin}
              catalogCartsAll={f_random(homeTag)}
              setHomeTag={setHomeTag}
              setSectionTitle={setSectionTitle}
              price='20 000 ₽' />}
          />

          <Route path='turboMiks' element=
            {<TurboMiks
              homeTag={homeTag}
              sectionTitle={sectionTitle}
              serviceTitle={serviceTitle}
              setServiceTitle={setServiceTitle}
              random={random}
              randomMin={randomMin}
              catalogCartsAll={f_random(homeTag)}
              setHomeTag={setHomeTag}
              setSectionTitle={setSectionTitle}
              price='20 000 ₽' />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
