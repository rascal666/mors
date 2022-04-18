import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import TurboSearch from './pages/turboSearch';
import Adjustable from './pages/adjustable';
import TurboMiks from './pages/turboMiks'


function App () {
  const [homeTab, setHomeTab] = useState('seo');
  const [sectionTitle, setSectionTitle] = useState('');
  const [serviceTitle, setServiceTitle] = useState('');
  const [fff, setFff] = useState('');

    const arrHeading = [
      {
          title: 'Продвижение и SEO-оптимизация сайта',
              arr: ['Турбопоиск','Турбомикс', 'Турбосети', 'Турботаргет', ]
      },
      {
          title: 'Медийная реклама',
              arr: ['Баннерная реклама в товарных листингах Пульса цен','Витрины - текстово - графическое объявление на Пульсе цен', 'Премиум блок - фиксированное место в топе рубрик Пульса цен', 'Баннеры в рекламных сетях Яндекс и Гугл']
      },

  ]

  useEffect(() =>{  
    for (let index = 0; index < arrHeading.length; index++) {
        const element = arrHeading[index];
        element.arr.forEach(elementServiceTitle => {
            if (elementServiceTitle == serviceTitle) {    
                setSectionTitle(element.title)
            }
        });
    }
 })



  return (
    <div className="App">
      <Routes>
        <Route path="/" component={Home}>
          <Route index element={<Home setHomeTab = {setHomeTab} /> }  />
          <Route path="adjustable" element={<Adjustable homeTab={homeTab} setHomeTab={setHomeTab} /> }  />
          <Route path="turboSearch" element={<TurboSearch homeTab={homeTab}  sectionTitle={sectionTitle}  serviceTitle={serviceTitle} setServiceTitle={setServiceTitle} setFff={setFff}/> }  />
          <Route path="turboMiks" element={<TurboMiks homeTab={homeTab} sectionTitle={sectionTitle}  serviceTitle={serviceTitle} setServiceTitle={setServiceTitle} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
