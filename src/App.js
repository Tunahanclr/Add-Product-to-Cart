import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Product from './components/Product';
import Basket from './components/Basket';
import Products from '../src/Product.json';
function App() {  
  const [basket,setBasket] = useState([]);
  const [cost,setCost]=useState([])
  useEffect( () => {
    console.log(basket);

  },[basket])

  return (
    <>
    <Header/>
    <div className='productContainer'>
    <div className='productBoxs'>
    {
      Products.map(product => (
        <Product key = { product.id} basket={basket} setBasket={setBasket}  product={product} />
        ))
    }

    </div>
    </div>
    <Basket basket={basket}/>

    </>
    
    );
}

export default App;