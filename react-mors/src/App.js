import React, { useState, useRef } from 'react';
import './App.css';
import Cart from './component/cart';
import catalogCarts from './bd/catalogCarts';
import Navigation from './component/navigation';
import TurboSearch from './pages/turboSearch';


function App () {

  const [tab, setTab] = useState('seo');


  return (
    <div className="App">

      <Navigation setTab={setTab} />
      <div className='carts'>
        {
          catalogCarts[tab].map((cart, index) =>
            <Cart src={cart.src} id={index} title={cart.title} description={cart.description} price={cart.price} link={cart.link} priceNoteBefore={cart.priceNoteBefore} priceNote={cart.priceNote} />
          )
        }
      </div>
      <TurboSearch />
    </div>
  );
}

export default App;
