import React from 'react';
import Product from './Product';
//import { useParams } from 'react-router-dom';
import axios from "axios";

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
    const [productData, setProductData] = React.useState('');

    React.useEffect(() => {
        axios
        .get(
            `http://localhost:3100/products`, 
        )
        .then(response => {
            console.log(response)
            setProductData(response.data);
        })
        .catch(err => {
            console.log(err)
        });

        
    }, [setProductData])



    if (productData !== '') {
        return (
            <>
                <h2>The Products</h2>

                <table class="table table-hover">
                    <tbody>
                        <tr>
                       
                        <td>
                            <Product info={productData[0]} basket={basket} setBasket={setBasket} total={total} setTotal={setTotal}/>
                        </td>
                        <td>
                            <Product info={productData[1]} basket={basket} setBasket={setBasket} total={total} setTotal={setTotal}/>
                        </td>
                       
                        </tr>
                        <tr>
                      
                        <td>
                            <Product info={productData[2]} basket={basket} setBasket={setBasket} total={total} setTotal={setTotal}/>
                        </td>
                        <td>
                            <Product info={productData[3]} basket={basket} setBasket={setBasket} total={total} setTotal={setTotal}/>
                        </td>
                        
                        </tr>
                        
                    </tbody>
                </table>
                






            </>
        );  
   } else {
       return (
           <></>
       )
   }
   
    
  
}



export default Products;