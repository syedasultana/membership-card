import React from 'react';


function Product({info, basket, setBasket, total, setTotal}) {

    return (
        <div>
            <h3>{info.productname}</h3>

            <p>£{info.productprice}</p>

            <button
                onClick={() => {
                    const updatedBasket = [...basket, info.name]
                    setBasket(updatedBasket); 
                    const updatedTotal = [parseInt(total) + parseInt(info.price)]
                    setTotal(updatedTotal)
                }}
            >
                Add to cart
            </button>


        </div>
    )
        
   
    
  
}



export default Product;