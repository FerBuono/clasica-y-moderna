import { ShoppingCart } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext, CurrencyContext } from "../../contexts";
import { Cart, Total, Divisor, Amount, CartContainer } from './CartWidgetStyle';

const CartWidget = () => {

    const {cart} = useContext(CartContext);

    const {currency} = useContext(CurrencyContext);

    return (
        <Cart>
            <Total>
                {currency} {(() => {
                        switch (currency) {
                            case 'ARS$': 
                                return cart.reduce((acc, {price, c}) => Number((price*200 * c + acc).toFixed(0)) , 0);
                            case 'US$': 
                                return cart.reduce((acc, {price, c}) => Number((price * c + acc).toFixed(2)), 0);
                            case '€':
                                return cart.reduce((acc, {price, c}) => Number((price*0.88 * c + acc).toFixed(2)), 0);
                            default:
                                return;
                        };
                    })()}
                        {/* cart.reduce((acc, {price, c}) => Number((price * c + acc).toFixed(2)), Number((0.00).toFixed(2))) */}
                    
            </Total>
            <Divisor></Divisor>
            <Link to={'/cart'} style={{display:'flex', height:'100%', color:'white', width:'40%', justifyContent: 'center'}}>
                <CartContainer>
                    <Amount>
                        {
                            cart.reduce((acc, {c}) => c + acc, 0)
                        }
                    </Amount>
                    <ShoppingCart />
                </CartContainer>
            </Link>
        </Cart>
    )
}

export default CartWidget
