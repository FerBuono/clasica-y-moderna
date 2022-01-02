import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

const Cart = () => {

    const {cartItems} = useContext(CartContext);

    return (
        <div>
            <h1>Cart</h1>
            <pre>
                {JSON.stringify(cartItems, null, 2)}
            </pre>
        </div>
    )
}

export default Cart
