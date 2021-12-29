import { ShoppingCart } from "@mui/icons-material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../contexts";
import { Cart, Total, Divisor, Amount, CartContainer } from './CartWidgetStyle';

const CartWidget = () => {

    const {cart} = useContext(CartContext);

    return (
        <Cart>
            <Total>
                US$ {
                        cart.reduce((acc, {price, c}) => (price * c) + acc, 0)
                    }
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
