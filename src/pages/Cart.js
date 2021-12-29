import React, { useContext } from 'react'
import { CartContext } from '../contexts'

const Cart = () => {

    const {cart} = useContext(CartContext);

    return (
        <div>
            <h1>Cart</h1>
            <pre>
                {JSON.stringify(cart, null, 2)}
            </pre>
        </div>
    )
}

export default Cart
