import { ShoppingCart } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Cart, Total, Divisor, Amount, CartContainer } from './CartWidgetStyle';

const CartWidget = () => {
    return (
        <Cart>
            <Total>US$ 0.00</Total>
            <Divisor></Divisor>
            <Link to={'/cart'} style={{display:'flex', height:'100%', color:'white'}}>
                <CartContainer>
                    <Amount>0</Amount>
                    <ShoppingCart />
                </CartContainer>
            </Link>
        </Cart>
    )
}

export default CartWidget
