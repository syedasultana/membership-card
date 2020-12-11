import React from 'react';


function Product({info, basket, setBasket, total, setTotal}) {

    return (
        <div>
            <h3>{info.productname}</h3>

            <p>£{info.productprice}</p>

            <button
                onClick={() => {
                    const updatedBasket = [...basket, info.productname]
                    setBasket(updatedBasket); 
                    let price = parseInt(info.productprice);
                    const updatedTotal = [parseInt(total) + price]
                    setTotal(updatedTotal)
                }}
            >
                Add to cart
            </button>


        </div>
    )
        
   
    
  
}



export default Product;