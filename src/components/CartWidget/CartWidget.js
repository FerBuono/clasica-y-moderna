import { ShoppingCart } from "@mui/icons-material";
import { Cart, Total, Divisor, Amount, CartContainer } from './CartWidgetStyle';

const CartWidget = () => {
    return (
        <Cart>
            <Total>US$ 0.00</Total>
            <Divisor></Divisor>
            <CartContainer>
                <Amount>0</Amount>
                <ShoppingCart />
            </CartContainer>
        </Cart>
    )
}

export default CartWidget
