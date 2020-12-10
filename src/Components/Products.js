import React from 'react';
import Product from './Product';

const list = [
    {
        productId: 1,
        name: 'Bag of Ice',
        price: 200
    },
    {
        productId: 2,
        name: 'Bag of Sand',
        price: 2500
    },
    {
        productId: 3,
        name: 'Sandman Action Figure',
        price: 5
    },
    {
        productId: 4,
        name: 'Ice Cream Sculpture',
        price: 1
    }
]

function Products({basket, setBasket, total, setTotal}) {

    return (
        <>
            <h2>The Products</h2>

            <Product info={list[0]} basket={basket} setBasket={setBasket} total={total} setTotal={setTotal}/>
            <Product info={list[1]} basket={basket} setBasket={setBasket} total={total} setTotal={setTotal}/>
            <Product info={list[2]} basket={basket} setBasket={setBasket} total={total} setTotal={setTotal}/>
            <Product info={list[3]} basket={basket} setBasket={setBasket} total={total} setTotal={setTotal}/>
        </>
    )
        
   
    
  
}



export default Products;