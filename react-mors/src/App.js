/** @format */

import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import './styles/zero.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import TurboSearch from './pages/turboSearch';
import Adjustable from './pages/adjustable';
import TurboMiks from './pages/turboMiks';
import f_random from './modules/f_useful';

function App () {

  const [homeTag, setHomeTag] = useState(() => {
    const homeTagGet = localStorage.getItem("homeTag");
    const initialValue = JSON.parse(homeTagGet);
    return initialValue || "media";
  });

  console.log(`initialValue`, homeTag);

  const [sectionTitle, setSectionTitle] = useState('');
  const [serviceTitle, setServiceTitle] = useState('');


  useEffect(() => {
    if (homeTag != null) {
      localStorage.setItem("homeTag", JSON.stringify(homeTag));
    }
  }, [homeTag]);

  function homeTagChange (value) {
    setHomeTag(value)
  }
  function sectionTitleChange (value) {
    setSectionTitle(value)
  }
  function serviceTitleChange (value) {
    setServiceTitle(value)
  }


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
          <Route index element={<Home setHomeTag={homeTagChange} />} />
          <Route path='adjustable' element={<Adjustable homeTag={homeTag} setHomeTag={homeTagChange} />} />


          <Route path='turboSearch' element=
            {<TurboSearch
              homeTag={homeTag}
              sectionTitle={sectionTitle}
              serviceTitle={serviceTitle}
              setServiceTitle={serviceTitleChange}
              random={random}
              randomMin={randomMin}
              catalogCartsAll={f_random(homeTag)}
              setHomeTag={homeTagChange}
              setSectionTitle={sectionTitleChange}
              price='20 000 ₽' />}
          />

          <Route path='turboMiks' element=
            {<TurboMiks
              homeTag={homeTag}
              sectionTitle={sectionTitle}
              serviceTitle={serviceTitle}
              setServiceTitle={serviceTitleChange}
              random={random}
              randomMin={randomMin}
              catalogCartsAll={f_random(homeTag)}
              setHomeTag={homeTagChange}
              setSectionTitle={sectionTitleChange}
              price='20 000 ₽' />} />
        </Route>
      </Routes>
    </div >
  );
}

export default App;
