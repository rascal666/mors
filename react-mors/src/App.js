import React, { useState, useRef } from 'react';
import './App.css';
import Cart from './component/cart';
import catalogCarts from './bd/catalogCarts';
import Navigation from './component/navigation';


function App () {

  const refTab = React.useRef(null);
  const [tab, setTab] = useState('seo');
  console.log(catalogCarts.tab);
  console.log(tab);

  return (
    <div className="App">

      <Navigation setTab={setTab} />
      <div className='carts'>
        {
          catalogCarts.seo.map((cart, index) =>
            <Cart src={cart.src} id={index} title={cart.title} description={cart.description} price={cart.price} link={cart.link} priceNoteBefore={cart.priceNoteBefore} priceNote={cart.priceNote} />
          )
        }
      </div>
    </div>
  );
}

export default App;
