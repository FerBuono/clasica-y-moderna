import { ShoppingCart } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { CurrencyContext } from "../../context/CurrencyContext";
import { Cart, Total, Divisor, Amount, CartContainer } from './CartWidgetStyle';

const CartWidget = () => {

    const {cartItems, amountInCart} = useContext(CartContext);
    const {currency, changeCartPrice} = useContext(CurrencyContext);

    return (
        <Cart>
            <Total>
                {currency} {changeCartPrice(cartItems)}
            </Total>
            <Divisor></Divisor>
            <Link to={'/cart'} style={{display:'flex', height:'100%', color:'white', width:'40%', justifyContent: 'center'}}>
                <CartContainer>
                    <Amount>
                        {amountInCart()}
                    </Amount>
                    <ShoppingCart />
                </CartContainer>
            </Link>
        </Cart>
    )
}

export default CartWidget
