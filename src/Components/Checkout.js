import React from 'react';

function Checkout({basket, setBasket, total, pointsMoney, setPoints}) {
    const [paid, setPaid] = React.useState(false); //if the basket gets updated, this changes back to false

    React.useEffect(() => {
        if (basket.length > 0) {
            setPaid(false);
        }
      }, [basket])

    if (paid) {
        return (
            <>
                <h2>empty basket</h2>
            </>
        )
    } else {

        return (
            <>
                <h2>Checkout: xyz</h2>
                <h3>{basket}</h3>

                <h3>Total: £{total}</h3>

                <h4>Pay with:</h4>
                <button
                    onClick={() => {
                        console.log('you have been successfully charged, finish button, clear basket executed')
                        setPaid(true);
                        setBasket([]);
                    }}
                >
                    debit/credit card
                </button>
                <h4>OR</h4>
                <button
                    onClick={() => {
                        //check if points money greater/equal to total
                        if (pointsMoney >= total) {
                            console.log('you have been successfully charged, finish button, clear basket executed')
                            //do pointsMoney - total then check how many points are left
                            let convertBack = pointsMoney - total;
                            let newPoints = (convertBack * 4) + (convertBack / 2);
                            setPoints(newPoints);
                            setPaid(true);
                            setBasket([]);
                        } else {
                            console.log('you do not have enough points to pay the total')
                        }
                    }}
                >
                    my points
                </button>
            </>
        )
        
    }
    
  
}



export default Checkout;