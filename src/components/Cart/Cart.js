import React from 'react';

const Cart = (props) => {
    const cart = props.cart;

    const total = cart.reduce((total,prd) => total + prd.price, 0);

    // let total = 0;
    // for(let i=0; i<cart.length; i++){
    //     total  = total + cart[i].price;
    // }

    let shipping = 0;
    if(total>35){
        shipping = 0;
    }
    else if(total>15){
        shipping = 4.99;
    }
    else if(total > 0){
        shipping = 12.99;
    }
    
    const vat = total / 10;
    const grandTotal = total + shipping + vat;

    const formatNumber = num => {
        const precision = num.toFixed(2);
        return Number(precision);
    }

    return (
        <div>
            <h2>Order Summary</h2>
            <h3>Items Ordered :{cart.length} </h3>
            <p>Product Price : {formatNumber(total)}</p>
            <p>Shipping Cost : {shipping}</p>
            <p><small>Vat : {formatNumber(vat)} </small></p>
            <h4>Total Price : {formatNumber(grandTotal)} </h4>
        </div>
    );
};

export default Cart;