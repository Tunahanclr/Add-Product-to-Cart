import React from 'react'

export default function Basket({basket,setBasket}) {
    const handleDelete = (index) => {
        const newBasket = [...basket];
        newBasket.splice(index, 1);
        setBasket(newBasket);
      };
  return (
    <div className='mainBasket'>
        <div className='showBasket'>
            <h2>Basket</h2>
            <div className=''>
                {
               basket.map((item)=>(
                <div className='basketList'>
                    <img width={100} src={item.img} alt="" />
                    <p>{item.name} x {item.amount}</p>
                    <p className='showBasketPrice'>${item.price*item.amount}</p>
                    <button className='handleDelete' onClick={()=>handleDelete()}>x</button>
                </div>     
               ))
                }
            </div>
            {basket.length == 0 && <p className='basketDesc'>Add items to your cart</p>}

        </div>
    </div>
  )
}
