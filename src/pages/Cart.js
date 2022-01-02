import { useContext } from 'react'
import { CartContext } from '../context/CartContext';
import CartDetailContainer from '../components/CartDetailContainer/CartDetailContainer';

const Cart = () => {

    const {cartItems, amountInCart} = useContext(CartContext);

    return (
        <CartDetailContainer cart={cartItems} amount={amountInCart()}/>
    )
}

export default Cart
