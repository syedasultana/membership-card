import React from 'react';
import logo from './logo.svg';
import './App.css';

import PointsBalance from './Components/PointsBalance';
import Checkout from './Components/Checkout';
import Products from './Components/Products';

function App() {
  const [basket, setBasket] = React.useState([]);
  const [total, setTotal] = React.useState(0);
  const [points, setPoints] = React.useState(1);
  const [pointsMoney, setPointsMoney] = React.useState(1);



  return (
    <div className="App">
      <h1 class="header">Will Baker's Shop</h1>

      

      
    <div class="outer-container">

      <div class="container-1">
        <div class="box-1">
          <Products basket={basket} setBasket={setBasket} total={total} setTotal={setTotal}/>
        </div>
      </div> 

      <div class="container-2">
        <div class="box-2">
          <PointsBalance points={points} setPointsMoney={setPointsMoney}/>
        </div>
        <div class="box-3">
          <Checkout basket={basket} setBasket={setBasket} total={total} pointsMoney={pointsMoney} setPoints={setPoints}/>
        </div>
      </div>

    </div>
      

      
        
      


    </div>
  );
}

export default App;
